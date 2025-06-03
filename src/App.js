// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  pageSize = 15;

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress }); // ✅ CORRECT
  }

  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general" />} />
          <Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="us" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
          <Route path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general" />} />
          <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="us" category="health" />} />
          <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="us" category="science" />} />
          <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
          <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          {/* Add more routes below as needed */}
          {/* <Route path="/sports" element={<News setProgress={this.setProgress}   key="" pageSize={this.pageSize} country="us" category="sports" />} /> */}
        </Routes>
      </Router>
    )
  }
}

