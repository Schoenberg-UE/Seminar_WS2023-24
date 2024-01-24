import React from "react"
import { Link } from "gatsby"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

const PersName = (props) => {
  
  const persName = props.teiNode
  const target = persName.getAttribute("ref")
  const gndId = target.split("/").pop()
  
  return <Behavior node={props.teiNode}>
    <Link to={target} className="PlaceName" data-gndId={gndId}>
      <TEINodes 
        teiNodes={props.teiNode.childNodes}
        {...props}/>
    </Link>
  </Behavior>
}

export default PersName