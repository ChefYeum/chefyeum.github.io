import { useEffect, useState } from "react";

// takes the uncompiled source code and compile it via wasm
function loadWasm(unloadedHtml: string) {
  const [html, setHtml] = useState(unloadedHtml);

  interface WasmExports extends WebAssembly.Exports {
    memory: WebAssembly.Memory;
    allocUint8: (length: number) => number;
    _compile: () => void;
  }

  const decodeString = (pointer: number, length: number, memory: WebAssembly.Memory) => {
    const slice = new Uint8Array(
      memory.buffer, // memory exported from Zig
      pointer,
      length
    );
    return new TextDecoder().decode(slice);
  };

  const encodeString = (string: string, memory: WebAssembly.Memory, ptr: number) => {
    const buffer = new TextEncoder().encode(string);
    const slice = new Uint8Array(
      memory.buffer, // memory exported from Zig
      ptr,
      buffer.length + 1
    );
    slice.set(buffer);
    slice[buffer.length] = 0; // null byte to null-terminate the string
    return ptr;
  };

  useEffect(() => {
    const wasmModules = import.meta.glob<string>('/**/*.wasm', { query: '?url', import: 'default' });
    const wasmLoaders = Object.values(wasmModules);

    if (wasmLoaders.length > 0) {
      wasmLoaders[0]().then((url) => {
        WebAssembly.compileStreaming(fetch(url))
          .then(async (module) => {
            let wasmExports: WasmExports;
            const instance = await WebAssembly.instantiate(module, {
              env: {
                print: (result: unknown) => { console.log(`Wasm output: ${result}`); },
                inputStr: () => encodeString(html, wasmExports.memory, wasmExports.allocUint8(html?.length || 123)),
                _renderOutput: (pointer: number, length: number) => {
                  setHtml(decodeString(pointer, length, wasmExports.memory));
                }
              }
            });
            wasmExports = instance.exports as WasmExports;
            wasmExports._compile();
          });
      }).catch(() => setHtml('no wasm'));
    } else {
      setHtml('no wasm');
    }
  }, []);

  return [html, setHtml];
}

export default loadWasm;
