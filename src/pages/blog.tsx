import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Template from "../Template";
import useFetchDecrypt from "../hooks/useFetchDecrypt";

function compile(s: string): string {
  return `<pre>${s}</pre>`;
}
// Discover encrypted blog posts in /blogs/ using Vite's glob import
const blogModules = import.meta.glob<string>('/blogs/*.encrypted', { query: '?url', import: 'default' });

const BlogPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const iv = queryParams.get('iv')?.split(',').map(Number);

  const [keyData, setKeyData] = useState<string | undefined>();
  const { blogList, retrieveBlogList } = useFetchDecrypt(iv, keyData);

  useEffect(() => {
    document.title = 'ChefYeum - Blog';
  }, []);

  const handleDecrypt = async () => {
    const urls = await Promise.all(
      Object.values(blogModules).map((loader) => loader() as Promise<string>)
    );
    if (urls.length !== 0) {
      retrieveBlogList(urls);
    } else {
      console.error("No blog urls found.");
    }
  };

  return (
    <Template>
      <main>
        {iv === undefined && (
          <p>In order to decrypt the blog, you must provide an initialisation vector. Contact Dee for how.</p>
        )}
        {iv && blogList === undefined && (
          <form style={{ textAlign: 'center' }} onSubmit={(e) => e.preventDefault()}>
            <input
              autoFocus
              type="password"
              style={{
                width: '95%',
                maxWidth: '600px',
                height: '2em'
              }}
              onChange={(e) => setKeyData(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleDecrypt();
                }
              }}
            />
          </form>
        )}
        {blogList?.length === 0 && "Decryption failed..."}
        {blogList?.map((decrypted, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: compile(decrypted) }} />
        ))}
      </main>
    </Template>
  );
};

export default BlogPage;
