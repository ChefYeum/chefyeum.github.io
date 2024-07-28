import React, { useState } from "react"
import { HeadFC, graphql } from "gatsby"
import Template from "../Template"
import useFetchDecrypt from "../hooks/useFetchDecrypt"


export const query = graphql`
  query AllPosts {
    allFile(filter: {extension: {eq: "encrypted"}}) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

function compile(s: string): string {
  return `<pre>${s}</pre>`
}


/* TODO: find library type def? */
interface BlogPageProps {
  location: Location,
  data: { file: { publicURL: string }, allFile: { edges: { node: { publicURL: string } }[] } }
}

const BlogPage = ({ data, location }: BlogPageProps) => {
  let queryParams = new URLSearchParams(location.search)
  let iv = queryParams.get('iv')?.split(',').map(Number)

  let [keyData, setKeyData] = useState<string | undefined>();
  let { blogList, retrieveBlogList } = useFetchDecrypt(iv, keyData)

  return (
    <>
      <Template>
        <main>
          {(iv === undefined) && <p>In order to decrypt the blog, you must provide an initialisation vector. Contact Dee for how.</p>}
          {(iv && blogList === undefined) && <form style={{ textAlign: 'center' }}>
            <input autoFocus type={"password"}
              style={{
                width: '95%',
                maxWidth: '600px',
                height: '2em'
              }}
              onChange={(e) => setKeyData(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  let blogUrls = data.allFile.edges.map((edge) => edge.node.publicURL)
                  if (blogUrls.length != 0)
                    retrieveBlogList(blogUrls)
                  else
                    console.error("No blog urls found.")
                }
              }}
            />
          </form>}
          <>{blogList?.length == 0 && "Decryption failed..."}</>
          <>{blogList?.map((decrypted, i) => <div key={i} dangerouslySetInnerHTML={{ __html: compile(decrypted) }} />)}</>
        </main>
      </Template>
    </>
  );
}

export const Head: HeadFC = () => <title>ChefYeum - Blog</title>

export default BlogPage