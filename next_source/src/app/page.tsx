'use client';

import init, { EngineGame } from "../../public/pkg/engine_incremental_game.js";
import { useEffect, useState } from 'react';

function MainGame() {
  const [game, setGame] = useState<EngineGame | null>(null);
  const [distance, setDistance] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [score, setScore] = useState(0);
  const [fuel, setFuel] = useState(0);
  const [rpm, setRpm] = useState(0);
  const [torque, setTorque] = useState(0);
  const [gear, setGear] = useState(1);
  const [neutral, setNeutral] = useState(true);
  const [throttle, setThrottle] = useState(0);

  useEffect(() => {
    async function loadWasm() {
      await init();
      const newGame = new EngineGame(gear);
      //newGame.speed = 10.0;
      setGame(newGame);
      setFuel(100);
    }

    loadWasm();
  }, []);

  useEffect(() => {
    if (game) {
      game.gear_ratio = neutral ? 0.0 : gear;
    }
  }, [game, gear, neutral]);

  useEffect(() => {
    if (!game) return;

    let animationFrameId: number;

    function gameLoop() {
      game!.update(throttle); 
      setDistance(game!.distance * 0.0006213712);
      setSpeed(game!.speed * 2.236936);
      setFuel(game!.fuel);
      setScore(game!.points);
      setRpm(game!.rpm());
      setTorque(game!.torque());
      

      animationFrameId = requestAnimationFrame(gameLoop);
    }

    animationFrameId = requestAnimationFrame(gameLoop);

    return () => cancelAnimationFrame(animationFrameId); // Cleanup on unmount
  }, [game, throttle]);

  return (
    <div>
      <div className="font-bold text-2xl grid justify-center text-white">
        Engine Incremental
        {game ? <>
          <div className="justify-center">
            <br />
            Speed: {speed.toFixed(2)} miles per hour, Distance: {distance.toFixed(2)} miles <br />
            RPM: {rpm}, Torque: {torque.toFixed(2)} Nm  <br />
            Fuel: {fuel.toFixed(2)} liters <br />
            Throttle: {throttle.toFixed(2)} <br/>
            Points: {score.toFixed(0)}
          </div>
          Gear Ratio: {gear}

          <br/>
          Set New Ratio:
          <input className="bg-blue-400" defaultValue={gear} onChange={(e) => { if (!isNaN(Number(e.target.value))) setGear(Number(e.target.value)) }}></input>
          {(fuel > 0.0) ? (throttle > 0 ?
              <button onClick={() => setThrottle(0)}>
                Stop
              </button> :
            <button onClick={() => setThrottle(1)}>
              Go
            </button>)
            :
            <button onClick={() => {game.fuel = 100.0; setFuel(100.0)}}>
              Refuel
            </button>}
            
          <button onClick={() => setNeutral(!neutral)}>
            {neutral ? "Drive" : "Neutral"}
          </button>

        </> : "Game is loading"}
      </div>
    </div>
  );
}

export default function Home() {
  return <MainGame />;
}
