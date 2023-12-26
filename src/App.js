import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: 'light',
      navbg: 'bg-primary',
      progress: 0
    }
  }

  toggleMode = () => {
    this.setState({
      mode: this.state.mode === 'light' ? 'dark' : 'light',
      navbg: this.state.mode === 'dark' ? 'bg-primary' : 'bg-dark'
    })
    if (this.state.mode == 'light') {
      document.body.style.backgroundColor = "grey"
    } else {
      document.body.style.backgroundColor = "white"
    }
  }
  
  state = {
    progress : 0
  }

  setProgress = (progress)=>{
    this.setState({
      progress: progress
    })
}

  render() {

    return (
      <>
        <Router>
          <Navbar mode={this.state.mode} navbg={this.state.navbg} toggleMode={this.toggleMode} />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={5}
          />
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress} category='general' key="general" mode={this.state.mode} navbg={this.state.navbg} />
            </Route>
            <Route exact path='/business' key="business" >
              <News setProgress={this.setProgress} category='business' mode={this.state.mode} navbg={this.state.navbg} />
            </Route>
            <Route exact path='/entertainment'>
              <News setProgress={this.setProgress} category='entertainment' key="entertainment" mode={this.state.mode} navbg={this.state.navbg} />
            </Route>
            <Route exact path='/science'>
              <News setProgress={this.setProgress} category='science' key="science" mode={this.state.mode} navbg={this.state.navbg} />
            </Route>
            <Route exact path='/health'>
              <News setProgress={this.setProgress} category='health' key="health" mode={this.state.mode} navbg={this.state.navbg} />
            </Route>
            <Route exact path='/sports'>
              <News setProgress={this.setProgress} category='sports' key="sports" mode={this.state.mode} navbg={this.state.navbg} />
            </Route>
            <Route exact path='/technology'>
              <News setProgress={this.setProgress} category='technology' key="technology" mode={this.state.mode} navbg={this.state.navbg} />
            </Route>
          </Switch>

        </Router>
      </>
    )
  }
}
