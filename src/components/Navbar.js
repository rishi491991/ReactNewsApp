import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      activeLink: 'Home'
    }
  }

  handleOnClick(link) {
    this.setState({
      activeLink: link,
    })
  }


  render() {
    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} ${this.props.navbg} sticky-top`}>
          <div className="container-fluid">
            <a className="navbar-brand">NewsPaper</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={this.state.activeLink == 'Home' ? "nav-link active" : "nav-link"} onClick={() => this.handleOnClick('Home')} aria-current="page" to="/" ><strong>Home</strong></Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link"><strong>|</strong></a>
                </li>
                <li className="nav-item">
                  <Link className={this.state.activeLink == 'Business' ? "nav-link active" : "nav-link"} onClick={() => this.handleOnClick('Business')} to='/business'><strong>Business</strong></Link>
                </li>
                <li className="nav-item">
                  <Link className={this.state.activeLink == 'Entertainment' ? "nav-link active" : "nav-link"} onClick={() => this.handleOnClick('Entertainment')} to='/entertainment'><strong>Entertainment</strong></Link>
                </li>
                <li className="nav-item">
                  <Link className={this.state.activeLink == 'Health' ? "nav-link active" : "nav-link"} onClick={() => this.handleOnClick('Health')} to='/health'><strong>Health</strong></Link>
                </li>
                <li className="nav-item">
                  <Link className={this.state.activeLink == 'Science' ? "nav-link active" : "nav-link"} onClick={() => this.handleOnClick('Science')} to='/science'><strong>Science</strong></Link>
                </li>
                <li className="nav-item">
                  <Link className={this.state.activeLink == 'Sports' ? "nav-link active" : "nav-link"} onClick={() => this.handleOnClick('Sports')} to='/sports'><strong>Sports</strong></Link>
                </li>
                <li className="nav-item">
                  <Link className={this.state.activeLink == 'Technology' ? "nav-link active" : "nav-link"} onClick={() => this.handleOnClick('Technology')} to='/technology'><strong>Technology</strong></Link>
                </li>
              </ul>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={this.props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{color:"white"}}>{this.props.mode.toUpperCase()} mode enabled</label>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar