import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

const PersName = (props) => {
  
  const persName = props.teiNode
  const target = persName.getAttribute("ref")
  if (target === null) return
  const gndId = target.split("/").pop()
  
  return <Behavior node={props.teiNode}>
    <a href={target} className="PersName" data-gndid={gndId} target="_blank" rel="noopener noreferrer">
      <TEINodes 
        teiNodes={props.teiNode.childNodes}
        {...props}/>
    </a>
  </Behavior>
}

export default PersName