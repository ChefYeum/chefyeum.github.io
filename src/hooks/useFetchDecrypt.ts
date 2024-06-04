
import react, { useState } from 'react';

function useFetchDecrypt(iv: number[] | undefined, keyData: string | undefined) {
  const [blogList, setBlogList] = useState<string[] | undefined>(undefined)

  function isString(x: string | undefined): x is string {
    return (x as string) !== undefined;
  }

  function retrieveBlogList(encryptedSrcUrls: string[]): void {
    if (iv === undefined) return;
    Promise.all(encryptedSrcUrls.map(url =>
      fetch(url)
        .then(async response => {
          try {
            let key = await crypto.subtle.importKey(
              "jwk",
              {
                key_ops: ['encrypt', 'decrypt'],
                ext: true,
                kty: 'oct',
                k: keyData,
                alg: 'A256GCM'
              },
              "AES-GCM",
              true,
              ["encrypt", "decrypt"]
            );

            let decrypted = await crypto.subtle.decrypt(
              {
                name: "AES-GCM",
                iv: new Uint8Array(iv)
              },
              key,
              await response.arrayBuffer()
            );

            return new TextDecoder().decode(decrypted);
          } catch (e) {
            console.error(e);
          }
        })
    )).then(xs => setBlogList(xs.filter(isString)))
  }
  return { blogList, retrieveBlogList };
}

export default useFetchDecrypt;
