/* tslint:disable */
/* eslint-disable */
export class EngineGame {
  free(): void;
  constructor(gear_ratio: number);
  update(throttle: number): void;
  rpm(): number;
  refuel(): number;
  torque(): number;
  speed: number;
  points: number;
  distance: number;
  tank_size: number;
  fuel: number;
  mass: number;
  bsfc: number;
  drag_coefficient: number;
  frontal_area: number;
  wheel_radius: number;
  drivetrain_efficiency: number;
  gear_ratio: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_enginegame_free: (a: number, b: number) => void;
  readonly __wbg_get_enginegame_speed: (a: number) => number;
  readonly __wbg_set_enginegame_speed: (a: number, b: number) => void;
  readonly __wbg_get_enginegame_points: (a: number) => number;
  readonly __wbg_set_enginegame_points: (a: number, b: number) => void;
  readonly __wbg_get_enginegame_distance: (a: number) => number;
  readonly __wbg_set_enginegame_distance: (a: number, b: number) => void;
  readonly __wbg_get_enginegame_tank_size: (a: number) => number;
  readonly __wbg_set_enginegame_tank_size: (a: number, b: number) => void;
  readonly __wbg_get_enginegame_fuel: (a: number) => number;
  readonly __wbg_set_enginegame_fuel: (a: number, b: number) => void;
  readonly __wbg_get_enginegame_mass: (a: number) => number;
  readonly __wbg_set_enginegame_mass: (a: number, b: number) => void;
  readonly __wbg_get_enginegame_bsfc: (a: number) => number;
  readonly __wbg_set_enginegame_bsfc: (a: number, b: number) => void;
  readonly __wbg_get_enginegame_drag_coefficient: (a: number) => number;
  readonly __wbg_set_enginegame_drag_coefficient: (a: number, b: number) => void;
  readonly __wbg_get_enginegame_frontal_area: (a: number) => number;
  readonly __wbg_set_enginegame_frontal_area: (a: number, b: number) => void;
  readonly __wbg_get_enginegame_wheel_radius: (a: number) => number;
  readonly __wbg_set_enginegame_wheel_radius: (a: number, b: number) => void;
  readonly __wbg_get_enginegame_drivetrain_efficiency: (a: number) => number;
  readonly __wbg_set_enginegame_drivetrain_efficiency: (a: number, b: number) => void;
  readonly __wbg_get_enginegame_gear_ratio: (a: number) => number;
  readonly __wbg_set_enginegame_gear_ratio: (a: number, b: number) => void;
  readonly enginegame_default: (a: number) => number;
  readonly enginegame_update: (a: number, b: number) => void;
  readonly enginegame_rpm: (a: number) => number;
  readonly enginegame_refuel: (a: number) => number;
  readonly enginegame_torque: (a: number) => number;
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
