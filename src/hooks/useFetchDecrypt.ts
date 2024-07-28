
import react, { useState } from 'react';

function useFetchDecrypt(iv: number[] | undefined, keyData: string | undefined) {
  const [blogList, setBlogList] = useState<string[] | undefined>(undefined)

  function retrieveBlogList(encryptedSrcUrls: string[]): void {
    if (iv === undefined) return;
    Promise.all(encryptedSrcUrls.map(async url => {
      let response = await fetch(url)
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
            // Do nothing - things will fail (by design)
          }
    })).then(xs => {
      const validPosts = xs.filter(x => x !== undefined)
      if (validPosts.length != 1) {
        console.error(`Decrypted ${validPosts.length} out of ${xs.length}.`)
      }
      setBlogList(validPosts)
    })
  }
  return { blogList, retrieveBlogList };
}

export default useFetchDecrypt;
