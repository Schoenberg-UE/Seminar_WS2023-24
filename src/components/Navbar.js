import * as React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

export default function basicNavbar({ location, title, menuLinks }) {
  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/*<Navbar.Brand href={ menuLinks[0].link }>{ title }</Navbar.Brand>*/}
        <Link className="navbar-brand" to={menuLinks[0].link}>{ title }</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          { menuLinks.map(m => (
                <Link className="nav-link" key={ m.name } to={ m.link }>{ m.name }</Link>
                /* <Nav.Link key={ m.name } href={ m.link }>{ m.name }</Nav.Link> */
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    /*<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <Link className="navbar-brand" to={menuLinks[0].link}>{ title }</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {menuLinks.map(m => (
                        <li key={m.name} className={location === m.name.toLowerCase() ? 'nav-item active' : 'nav-item'}>
                            <Link className="nav-link" to={m.link}>{m.name}</Link>
                        </li>
                    ))}*/
                    /*<li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/letters">Briefe</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Register
                        </a>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/Register/Personen.html">Personen</a></li>
                        <li><a className="dropdown-item" href="/Register/Organisationen.html">Organisationen</a></li>
                        <li><a className="dropdown-item" href="/Register/Orte.html">Orte</a></li>
                        <li><a className="dropdown-item" href="/Register/Werke.html">Werke</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">Impressum</Link>
                    </li>*/
                /*</ul>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Suche</button>
                </form>
            </div>
        </div>
  </nav>*/
  )
}