// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import News from './components/News';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App = () => {
  const [progress, setProgress] = useState(0)
  const pageSize = 15;
  // apiKey=process.env.REACT_APP_NEWS_API;
  const state = {
    progress: 0
  }



  return (
    <Router>
      <Navbar />
      <LoadingBar
        color="#f11946"
        progress={progress}
      // onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
        <Route path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="us" category="business" />} />
        <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
        <Route path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general" />} />
        <Route path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health" />} />
        <Route path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science" />} />
        <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports" />} />
        <Route path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology" />} />
        {/* Add more routes below as needed */}
        {/* <Route path="/sports" element={<News setProgress={setProgress}    key="" pageSize={pageSize} country="us" category="sports" />} /> */}
      </Routes>
    </Router>
  )
}
export default App

