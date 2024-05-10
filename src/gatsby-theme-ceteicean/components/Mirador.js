import React, { useEffect } from "react"
import mirador from "mirador/dist/es/src"

const Mirador = (props) => {

  useEffect(() => { 
    const { config, plugins } = props;
    const viewerConfig = {
      id: config.id,
      windows: [
        {
          manifestId: config.manifest
        }
      ],
      workspaceControlPanel: {
        enabled: false  // Einstellungs-Leiste am linken Rand (Workspace-Settings)
      }
    }

    mirador.viewer(viewerConfig)
   })

   const { config } = props
  
  return <div id={config.id} style={{ height: "80vh", position: "relative" }}/>
  
}

export default Mirador