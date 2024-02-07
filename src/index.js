import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Button from "./components/Button";
// import { LoremIpsum } from 'react-lorem-ipsum';
// import Breadcrums from './components/Breadcrums';

const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div style={{ margin: '10px', padding: '20px' }}>
        {/* put in here the components*/}
        <App/>
        <Button/>
        {/* <Section1.js/> */}
    </div>
);