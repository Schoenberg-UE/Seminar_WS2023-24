import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"

import "./pb.css"

const Pb = ({teiNode}) => {
  const pb = teiNode
  const n = pb.getAttribute('n') || ''

  if (n) {
    return (
      <Behavior node={teiNode}>
        <span className="Pb text-muted">Seite {n}<hr/></span>
      </Behavior>    
    )
  }
  return null
}

export default Pb