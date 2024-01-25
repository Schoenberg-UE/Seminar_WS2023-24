import * as React from "react"
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return  (
    <Layout location="home">
      <main>
        <div className="container">
          <Alert variant={"primary"} className="my-5">
            <p>Die auf dieser Seite gezeigten Briefe wurden von Studierenden der mdw im Rahmen des Seminars <em>»Klavierstuecke unveraendert Stop«. Schönberg-Briefe edieren</em> transkribiert und kommentiert. Das Seminar wurde im Wintersemester 2023/24 am Arnold Schönberg Center abgehalten.</p>
          </Alert>
          <div className="theme-cards">
            <div className="d-flex flex-row mb-3">
              <Card style={{ display: "flex", flexDirection: "row", width: "60%" }}>
                <Card.Img style={{ width: "auto", height: "20em" }} src="/images/PH8469.jpg" />
                <Card.Body>
                  <Card.Title>Karl Linke</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </Card.Text>
                  <Button variant="light">
                    <Link to="/letters">Zu den Briefen</Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="d-flex flex-row-reverse mb-3">
              <Card style={{ display: "flex", flexDirection: "row", width: "60%" }}>
                <Card.Body>
                  <Card.Title>Marie Pappenheim</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </Card.Text>
                  <Button variant="light">
                    <Link to="/letters">Zu den Briefen</Link>
                  </Button>
                </Card.Body>
                <Card.Img style={{ width: "auto", height: "20em" }} src="/images/CR090.jpg" />
              </Card>
            </div>
            <div className="d-flex flex-row mb-3">
              <Card style={{ display: "flex", flexDirection: "row", width: "60%" }}>
                <Card.Img style={{ width: "auto", height: "20em" }} src="#" />
                <Card.Body>
                  <Card.Title>Erwin Stein</Card.Title>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </Card.Text>
                  <Button variant="light">
                    <Link to="/letters">Zu den Briefen</Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
        </div>
        </div>
      </main>
    </Layout>
  )
}
