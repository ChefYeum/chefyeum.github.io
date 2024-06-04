import React from 'react'
const LambdaLogo = (props: {
  size: number | string
  print?: boolean
}) => (
  <span css={{
    height: '1em',
    width: '1em',

    lineHeight: '1em',
    borderRadius: '1em',
    fontSize: props.size,

    textAlign: 'center',

    color: 'black',
    backgroundColor: 'white',

    display: props.print ? 'inline-block' : 'block',
    filter: props.print ? 'invert(1)' : 'unset',

    marginRight: '.2em',
  }}>
    &lambda;
  </span>
)

export default LambdaLogo