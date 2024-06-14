import React from "react"
import { Behavior } from "gatsby-theme-ceteicean/src/components/Behavior"
import { TEINodes } from "react-teirouter"

const TeiHeaderCommentTab = (props) => {

  const teiNode = props.teiNode
  const correspDesc = teiNode.getElementsByTagName("tei-correspDesc")[0]
  if (correspDesc.getElementsByTagName("tei-note")[0] === undefined) return console.log("Kein Kommentartext vorhanden.")
  const comment = correspDesc.getElementsByTagName("tei-note")[0]

  return <Behavior node={props.teiNode}>
            {/*<h3 className="mt-5 mb-3">Kommentar</h3>*/}
            <div className="comment mt-5">
              <TEINodes teiNodes={comment.childNodes} {...props}/>
            </div>
         </Behavior>
}

export default TeiHeaderCommentTab