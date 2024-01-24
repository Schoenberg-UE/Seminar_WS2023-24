import * as React from "react"
import { Link } from "gatsby"

export default function Navbar({ location, title, menuLinks }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <Link className="navbar-brand" to="/">Briefe von und an Arnold Schönberg</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {menuLinks.map(m => (
                        <li key={m.name} className={location === m.name.toLowerCase() ? 'nav-item active' : 'nav-item'}>
                            <Link className="nav-link" to={m.link}>{m.name}</Link>
                        </li>
                    ))}
                    {/*<li className="nav-item">
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
                    </li>*/}
                </ul>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Suche</button>
                </form>
            </div>
        </div>
  </nav>
  )
}