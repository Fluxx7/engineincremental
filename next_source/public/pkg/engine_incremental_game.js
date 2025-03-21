let wasm;

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const EngineGameFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_enginegame_free(ptr >>> 0, 1));

export class EngineGame {

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        EngineGameFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_enginegame_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get speed() {
        const ret = wasm.__wbg_get_enginegame_speed(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set speed(arg0) {
        wasm.__wbg_set_enginegame_speed(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get points() {
        const ret = wasm.__wbg_get_enginegame_points(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set points(arg0) {
        wasm.__wbg_set_enginegame_points(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get distance() {
        const ret = wasm.__wbg_get_enginegame_distance(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set distance(arg0) {
        wasm.__wbg_set_enginegame_distance(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get tank_size() {
        const ret = wasm.__wbg_get_enginegame_tank_size(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set tank_size(arg0) {
        wasm.__wbg_set_enginegame_tank_size(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get fuel() {
        const ret = wasm.__wbg_get_enginegame_fuel(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set fuel(arg0) {
        wasm.__wbg_set_enginegame_fuel(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get mass() {
        const ret = wasm.__wbg_get_enginegame_mass(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set mass(arg0) {
        wasm.__wbg_set_enginegame_mass(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get bsfc() {
        const ret = wasm.__wbg_get_enginegame_bsfc(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set bsfc(arg0) {
        wasm.__wbg_set_enginegame_bsfc(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get drag_coefficient() {
        const ret = wasm.__wbg_get_enginegame_drag_coefficient(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set drag_coefficient(arg0) {
        wasm.__wbg_set_enginegame_drag_coefficient(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get frontal_area() {
        const ret = wasm.__wbg_get_enginegame_frontal_area(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set frontal_area(arg0) {
        wasm.__wbg_set_enginegame_frontal_area(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get wheel_radius() {
        const ret = wasm.__wbg_get_enginegame_wheel_radius(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set wheel_radius(arg0) {
        wasm.__wbg_set_enginegame_wheel_radius(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get drivetrain_efficiency() {
        const ret = wasm.__wbg_get_enginegame_drivetrain_efficiency(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set drivetrain_efficiency(arg0) {
        wasm.__wbg_set_enginegame_drivetrain_efficiency(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get gear_ratio() {
        const ret = wasm.__wbg_get_enginegame_gear_ratio(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set gear_ratio(arg0) {
        wasm.__wbg_set_enginegame_gear_ratio(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} gear_ratio
     */
    constructor(gear_ratio) {
        const ret = wasm.enginegame_default(gear_ratio);
        this.__wbg_ptr = ret >>> 0;
        EngineGameFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {number} throttle
     */
    update(throttle) {
        wasm.enginegame_update(this.__wbg_ptr, throttle);
    }
    /**
     * @returns {number}
     */
    rpm() {
        const ret = wasm.enginegame_rpm(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    refuel() {
        const ret = wasm.enginegame_refuel(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    torque() {
        const ret = wasm.enginegame_torque(this.__wbg_ptr);
        return ret;
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_init_externref_table = function() {
        const table = wasm.__wbindgen_export_0;
        const offset = table.grow(4);
        table.set(0, undefined);
        table.set(offset + 0, undefined);
        table.set(offset + 1, null);
        table.set(offset + 2, true);
        table.set(offset + 3, false);
        ;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function __wbg_init_memory(imports, memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedUint8ArrayMemory0 = null;


    wasm.__wbindgen_start();
    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (typeof module !== 'undefined') {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (typeof module_or_path !== 'undefined') {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (typeof module_or_path === 'undefined') {
        module_or_path = new URL('engine_incremental_game_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync };
export default __wbg_init;
