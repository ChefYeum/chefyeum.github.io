import react, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

// takes the uncompiled source code and compile it via wasm
function loadWasm(unloadedHtml: string) {
  const [html, setHtml] = useState(unloadedHtml);
  const wasmData = useStaticQuery(graphql`
      query {
          allFile(filter: {extension: {eq: "wasm"}}) {
              nodes {
                  id
                  name
                  publicURL
              }
          }
      }
  `);

  const decodeString = (pointer, length, memory) => {
    const slice = new Uint8Array(
      memory.buffer, // memory exported from Zig
      pointer,
      length
    );
    return new TextDecoder().decode(slice);
  };

  const encodeString = (string: string, memory: { buffer: ArrayBufferLike; }, ptr: number /*really*/) => {
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
    if (wasmData.allFile.nodes.length > 0) {
      WebAssembly.compileStreaming(fetch(wasmData.allFile.nodes[0].publicURL))
        .then(async module => {
          const { exports: { memory, allocUint8, _compile } } = await WebAssembly.instantiate(module, {
            env: {
              print: (result: any) => { console.log(`Wasm output: ${result}`); },
              inputStr: () => encodeString(html, memory, allocUint8(html?.length || 123)), // TODO: how to work out the length
              _renderOutput: (pointer: any, length: any) => {
                setHtml(decodeString(pointer, length, memory))
              }
            }
          });
          _compile();
        })
    } else {
      setHtml('no wasm');
    }
  }, []); // TODO: understand the dependency list

  return [html, setHtml];
}

export default loadWasm;