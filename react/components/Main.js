import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import "../app.css";
import Questions from './Questions';
function Main() {
    return (
        <Layout>
          <Questions/>
        </Layout>
    );
}
   
export default Main;