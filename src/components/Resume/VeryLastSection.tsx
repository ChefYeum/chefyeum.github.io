import React from 'react'

export const VeryLastSection = (props: {title: string, children: React.ReactNode}) => (<>
    <u><div style={{ marginTop: '.5em', marginBottom: 0 }}>{props.title}</div></u>
    <div style={{margin: '0 0 0 0.5em'}}>
      {props.children}
    </div>
  </>)

export default VeryLastSection 