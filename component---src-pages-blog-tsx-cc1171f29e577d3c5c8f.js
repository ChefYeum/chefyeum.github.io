"use strict";(self.webpackChunkchefyeum_github_io=self.webpackChunkchefyeum_github_io||[]).push([[410],{4459:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i},default:function(){return u}});var r=n(7294),o=n(6068);var l=function(e,t){const{0:n,1:o}=(0,r.useState)(void 0);return{blogList:n,retrieveBlogList:function(n){void 0!==e&&Promise.all(n.map((async n=>{let r=await fetch(n);try{let n=await crypto.subtle.importKey("jwk",{key_ops:["encrypt","decrypt"],ext:!0,kty:"oct",k:t,alg:"A256GCM"},"AES-GCM",!0,["encrypt","decrypt"]),o=await crypto.subtle.decrypt({name:"AES-GCM",iv:new Uint8Array(e)},n,await r.arrayBuffer());return(new TextDecoder).decode(o)}catch(o){}}))).then((e=>{const t=e.filter((e=>void 0!==e));1!=t.length&&console.error(`Decrypted ${t.length} out of ${e.length}.`),o(t)}))}}},a=n(917);const i=()=>(0,a.tZ)("title",null,"ChefYeum - Blog");var u=e=>{var t;let{data:n,location:i}=e,u=null===(t=new URLSearchParams(i.search).get("iv"))||void 0===t?void 0:t.split(",").map(Number),{0:c,1:s}=(0,r.useState)(),{blogList:d,retrieveBlogList:p}=l(u,c);return(0,a.tZ)(r.Fragment,null,(0,a.tZ)(o.Z,null,(0,a.tZ)("main",null,void 0===u&&(0,a.tZ)("p",null,"In order to decrypt the blog, you must provide an initialisation vector. Contact Dee for how."),u&&void 0===d&&(0,a.tZ)("form",{style:{textAlign:"center"}},(0,a.tZ)("input",{autoFocus:!0,type:"password",style:{width:"95%",maxWidth:"600px",height:"2em"},onChange:e=>s(e.target.value),onKeyDown:e=>{if("Enter"===e.key){e.preventDefault();let t=n.allFile.edges.map((e=>e.node.publicURL));0!=t.length?p(t):console.error("No blog urls found.")}}})),(0,a.tZ)(r.Fragment,null,0==(null==d?void 0:d.length)&&"Decryption failed..."),(0,a.tZ)(r.Fragment,null,null==d?void 0:d.map(((e,t)=>{return(0,a.tZ)("div",{key:t,dangerouslySetInnerHTML:{__html:(n=e,`<pre>${n}</pre>`)}});var n}))))))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-cc1171f29e577d3c5c8f.js.map