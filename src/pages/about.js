import * as React from "react"
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout location="impressum">
        <div className="container">
          <h2 className="my-5">Impressum</h2>
          <div className="pb-3">
            <h4>Seminarleitung</h4>
            <p>Katharina Bleier, Jannik Franz, Philipp Kehrer</p>
          </div>
          <div className="pb-3">
            <h4>Seminarteilnehmer:innen</h4>
            <p>Marius Auer, Soleil Fröhlich, Veronika Lesjak, Jil Paul, Adrian Schmidt, Katharina Stolarov</p>
          </div>
          <div className="pb-3">
            <h4>Technische Umsetzung</h4>
            <p>Jannik Franz</p>
          </div>
          <div className="pb-3">
            <h4>Kontakt</h4>
            <p><a href="mailto:franz@mdw.ac.at">franz@mdw.ac.at</a></p>
          </div>
          <div className="pb-3">
            <h4>Anschriften</h4>
            <div className="pb-3">
              <div>Universität für Musik und darstellende Kunst Wien</div>
              <div>Anton-von-Webern-Platz 1</div>
              <div>1030 Wien</div>
              <a href="https://www.mdw.ac.at/229/" target="_blank" rel="noopener noreferrer">Impressum der Universität für Musik und darstellende Kunst Wien</a>
            </div>
            <div className="pb-3">
              <div>Arnold Schönberg Center Privatstiftung</div>
              <div>Schwarzenbergplatz 6/A</div>
              <div>1030 Wien</div>
              <a href="https://www.schoenberg.at/index.php/de/impressum" target="_blank" rel="noopener noreferrer">Impressum des Arnold Schönberg Centers</a>
            </div>
          </div>
        </div>
    </Layout>
  )
}