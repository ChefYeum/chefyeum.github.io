import React from 'react';

export type BadgeName = 'binance' | 'jenkins' | 'cypress' | 'websocket' | 'cpp' | 'go' | 'python'
  | 'postgressql' | 'rust' | 'wasm' | 'gatsby' | 'react' | 'graphql' | 'tailwindcss'
  | 'node' | 'java' | 'javascript' | 'android' | 'firebase' | 'haskell' | 'nextjs' | 'flutter' | 'dart' | 'googlecloud'
  | 'flask' | 'aws' | 'typescript' | 'ocaml' | 'githubActions' | 'selenium' | 'jest' | 'mongodb';


const badgeURL: {
  [key in BadgeName]: string;
} = {
  jenkins: 'https://img.shields.io/badge/Jenkins-%232C5263.svg?logo=jenkins&logoColor=white',
  binance: 'https://img.shields.io/badge/Binance-FCD535?logo=binance&logoColor=white',
  websocket: 'https://img.shields.io/badge/WebSocket-20232A?logo=WebSocket&logoColor=white',
  cpp: 'https://img.shields.io/badge/C++-00599C?logo=c%2B%2B&logoColor=white',
  cypress: 'https://img.shields.io/badge/-Cypress-%23E5E5E5?logo=cypress&logoColor=058a5e',
  postgressql: 'https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white',
  go: 'https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white',
  gatsby: 'https://img.shields.io/badge/Gatsby-%23663399.svg?logo=gatsby',
  react: 'https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB',
  graphql: 'https://img.shields.io/badge/-GraphQL-E10098?&logo=graphql',
  rust: 'https://img.shields.io/badge/Rust-b7410e.svg?logo=rust&logoColor=white',
  wasm: 'https://img.shields.io/badge/WebAssembly-654EF0.svg?logo=webassembly&logoColor=white',
  tailwindcss: 'https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white',
  node: 'https://img.shields.io/badge/NodeJS-6DA55F?logo=node.js&logoColor=white',
  java: 'https://img.shields.io/badge/Java-%23ED8B00.svg?logo=java&logoColor=white',
  javascript: 'https://img.shields.io/badge/JavaScript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E',
  android: 'https://img.shields.io/badge/Android-3DDC84?logo=android&logoColor=white',
  firebase: 'https://img.shields.io/badge/Firebase-%23039BE5.svg?logo=firebase',
  haskell: 'https://img.shields.io/badge/Haskell-5e5086?logo=haskell&logoColor=white',
  nextjs: 'https://img.shields.io/badge/Next-black?logo=next.js&logoColor=white',
  flutter: 'https://img.shields.io/badge/Flutter-042B59.svg?logo=Flutter&logoColor=white',
  dart: 'https://img.shields.io/badge/Dart-027DFD.svg?logo=dart&logoColor=white',
  googlecloud: 'https://img.shields.io/badge/Google Cloud-%234285F4.svg?logo=google-cloud&logoColor=white',
  flask: 'https://img.shields.io/badge/Flask-%23000.svg?logo=flask&logoColor=white',
  aws: 'https://img.shields.io/badge/AWS-%23FF9900.svg?logo=amazon-aws&logoColor=white',
  typescript: 'https://img.shields.io/badge/TypeScript-%23007ACC.svg?logo=typescript&logoColor=white',
  ocaml: ' https://img.shields.io/badge/OCaml-%23EC6813.svg?logo=ocaml&logoColor=white',
  githubActions: 'https://img.shields.io/badge/GitHub Actions-%232671E5.svg?logo=github-actions&logoColor=white',
  selenium: 'https://img.shields.io/badge/Selenium WebDriver-%234285F4.svg?logo=selenium&logoColor=white',
  jest: 'https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white',
  mongodb: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white',
  python: 'https://img.shields.io/badge/Python-%233776AB.svg?logo=python&logoColor=white',
};

export const Badge: React.FC<{ name: BadgeName }> = ({ name: name }) =>
  <img
    src={badgeURL[name]}
    alt={name}
    style={{ width: 'auto', height: '1em', verticalAlign: 'middle' }}
  />

