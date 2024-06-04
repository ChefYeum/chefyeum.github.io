import React from 'react'
import { BadgeName, Badge} from './Badge'
import { RightAlign } from './SubSection'

export const SubSubSection = (params: {
  leftSub: string, rightSub: string | BadgeName[], children: React.ReactNode
}) => (
  <div style={{
    marginBottom: '.5em'
  }}>
    <h3>
      {params.leftSub}
      <RightAlign>{typeof params.rightSub === 'string' ? params.rightSub : params.rightSub.map((badgeName) => <Badge name={badgeName} />)}</RightAlign>
    </h3>
    {params.children}
  </div>
)

export default SubSubSection