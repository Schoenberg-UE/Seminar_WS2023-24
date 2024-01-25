import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

const Bibl = (props) => {
  
  const bibl = props.teiNode
  const target = bibl.getAttribute("sameAs")
  const gndId = target.split("/").pop()
  
  return <Behavior node={props.teiNode}>
    <a href={target} className="Bibl" data-gndid={gndId} target="_blank" rel="noopener noreferrer">
      <TEINodes 
        teiNodes={props.teiNode.childNodes}
        {...props}/>
    </a>
  </Behavior>
}

export default Bibl