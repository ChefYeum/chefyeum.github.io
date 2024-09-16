import React from 'react'
import { Badge } from './Badge'
import { RightAlign } from './SubSection'

export const SubSubSection = (params: {
  leftSub: string, rightSub: string | string[], children: React.ReactNode, noBadge?: boolean
}) => (
  <div style={{
    marginBottom: '.5em'
  }}>
    <h3>
      {params.leftSub}
      <RightAlign>{typeof params.rightSub === 'string' ? params.rightSub : params.rightSub.map((badgeName: string) => <Badge name={badgeName} noBadge={params.noBadge ?? false} />)}</RightAlign>
    </h3>
    {params.children}
  </div>
)

export default SubSubSection