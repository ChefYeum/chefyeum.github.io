import React from 'react';

const NAME_MAP: {
  [key: string]: string
} = {
  'java': 'openjdk',
  'google cloud': 'googlecloud',
  'github actions': 'githubactions',
  'node': 'node.js',
}


export const Badge: React.FC<{ name: string, noBadge?: boolean }> = ({ name, noBadge}) => (
  <>
    <img
      src={`https://cdn.simpleicons.org/${NAME_MAP[name.toLowerCase()] ?? name}`}
      alt={name}
      title={name}
      style={{ width: 'auto', height: '1em', verticalAlign: 'middle' }}
    />
    {' '}{noBadge ?? name}
</>)
