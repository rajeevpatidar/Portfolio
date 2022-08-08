import React from "react";
import  ReactDOM  from "react-dom";
import Appy from "./App"
import {BrowserRouter } from "react-router-dom";
ReactDOM.render(
    <>
    <BrowserRouter>
      <Appy/>
    </BrowserRouter>
    </>
,document.getElementById("root"))