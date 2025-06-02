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


export default class App extends Component {
  pageSize=15;
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" pageSize={this.pageSize} country="us" category="general" />} />
          <Route path="/business" element={<News key="business" pageSize={this.pageSize} country="us" category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
          <Route path="/general" element={<News key="general" pageSize={this.pageSize} country="us" category="general" />} />
          <Route path="/health" element={<News key="health" pageSize={this.pageSize} country="us" category="health" />} />
          <Route path="/science" element={<News key="science" pageSize={this.pageSize} country="us" category="science" />} />
          <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
          <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          {/* Add more routes below as needed */}
          {/* <Route path="/sports" element={<News key="" pageSize={this.pageSize} country="us" category="sports" />} /> */}
        </Routes>
      </Router>
    )
  }
}

