import React from 'react';
import { render } from "react-dom";
import {BrowserRouter} from "react-router-dom";

function Popup() {
  return (
    <div className="content">
      <BrowserRouter>
        <h1>Congratulations! Your one step forward to building an extension!</h1>
      </BrowserRouter>
    </div>
  );
}

render(<Popup />, document.getElementById("app"));