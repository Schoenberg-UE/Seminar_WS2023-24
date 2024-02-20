import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

const OrgName = (props) => {
  
  const orgName = props.teiNode
  const target = orgName.getAttribute("ref")
  if (target === null)
  return <Behavior node={props.teiNode}>
          <span className="org">
            <TEINodes 
              teiNodes={props.teiNode.childNodes}
              {...props}/>
          </span>
        </Behavior>

  const gndId = target.split("/").pop()
  return <Behavior node={props.teiNode}>
          <a href={target} className="org" data-gndid={gndId} target="_blank" rel="noopener noreferrer">
            <TEINodes 
              teiNodes={props.teiNode.childNodes}
              {...props}/>
          </a>
         </Behavior>
}

export default OrgName