use wasm_bindgen::prelude::*;

pub struct ICEngine {
    efficiency: f64,
    rpm: u64,
    redline: u64, 
    torque_peak: u64,
    max_torque: u64
}

impl ICEngine {
    fn force(&self, gear_ratio: f64, wheel_radius: f64, drivetrain_efficiency: f64) -> f64 {
        let wheel_torque = self.torque() * gear_ratio * drivetrain_efficiency;
        wheel_torque / wheel_radius // Force in Newtons
    }

    fn horsepower(&self) -> f64 {
        (self.torque() * self.rpm as f64) / 5252.0
    }

    fn fuel_consumption(&self, power: f64, bsfc: f64) -> f64 {
        power * bsfc / self.efficiency // Fuel rate in kg/s
    }

    fn torque(&self) -> f64 {
        let rpm_ratio = (self.rpm as f64) / (self.torque_peak as f64);
        self.max_torque as f64 * (1.0 - (rpm_ratio - 1.0).powi(2)) // Simple parabolic torque curve
    }

    fn update_rpm(&mut self, speed: f64, gear_ratio: f64, wheel_radius: f64) {
        self.rpm = ((speed * gear_ratio) / (2.0 * 3.14 * wheel_radius) * 60.0) as u64;
        if self.rpm > self.redline {
            self.rpm = self.redline; // Cap at max RPM
        }
    }
}

#[wasm_bindgen]
pub struct EngineGame {
    pub speed: f64, // Speed in m/s
    pub distance: f64,
    pub fuel: f64, // Initial fuel in liters
    pub mass: f64, // Mass of the car in kg
    pub bsfc: f64, // Brake Specific Fuel Consumption in kg/J
    pub drag_coefficient: f64,
    pub frontal_area: f64, // Frontal area in m^2
    pub wheel_radius: f64, // Wheel radius in meters
    pub drivetrain_efficiency: f64,
    engine: ICEngine,
    pub gear_ratio: f64,
}

#[wasm_bindgen]
impl EngineGame {
    #[wasm_bindgen(constructor)]
    pub fn default(gear_ratio: f64) -> EngineGame {
        EngineGame {
            speed: 10.0,
            distance: 0.0,
            fuel: 100.0,
            mass: 1500.0,
            bsfc: 0.00025,
            drag_coefficient: 0.3,
            frontal_area: 2.5,
            wheel_radius: 0.3,
            drivetrain_efficiency: 0.85,
            engine: ICEngine {
                efficiency: 0.9,
                rpm: 1000,
                redline: 7000,
                torque_peak: 5000,
                max_torque: 200 },
            gear_ratio: gear_ratio
        }
    }

    pub fn update(&mut self) -> bool {
        let air_density = 1.225; // Air density in kg/m^3

        self.engine.update_rpm(self.speed, self.gear_ratio, self.wheel_radius);
        println!(
            "RPM: {}, Torque: {:.2}, Horsepower: {:.2}, Speed: {:.2} m/s, Distance: {:.2} m, Fuel Left: {:.2} L",
            self.engine.rpm, self.engine.torque(), self.engine.horsepower(), self.speed, self.distance, self.fuel
        );

        let accel_force = self.engine.force(self.gear_ratio, self.wheel_radius, self.drivetrain_efficiency);
        let drag_force = 0.5 * self.drag_coefficient * self.frontal_area * air_density * self.speed.powi(2);
        let net_force = accel_force - drag_force;
        let acceleration = net_force / self.mass;

        self.speed += acceleration;
        self.distance += self.speed;
        let power = accel_force * self.speed; // Power in Watts
        let fuel_rate = self.engine.fuel_consumption(power, self.bsfc);

        self.fuel -= fuel_rate * 0.1; // Reduce fuel based on timestep
        if self.fuel > 0.0 {
            return true;
        }
        false
    } 

    pub fn rpm(&self) -> f64 {
        self.engine.rpm as f64
    }

    pub fn torque(&self) -> f64 {
        self.engine.torque()
    }
}
