import * as React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return  (
    <Layout location="home">
      <main>
        <div className="container">
        <div className="alert alert-primary my-5" role="alert">
          <p>Die auf dieser Seite gezeigten Briefe wurden von Studierenden der mdw im Rahmen des Seminars <em>»Klavierstuecke unveraendert Stop«. Schönberg-Briefe edieren</em> transkribiert und kommentiert. Das Seminar wurde im Wintersemester 2023/24 am Arnold Schönberg Center abgehalten.</p>
        </div>
        </div>
      </main>
    </Layout>
  )
}
