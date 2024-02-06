import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Button from "./components/Button";
// import { LoremIpsum } from 'react-lorem-ipsum';
import Section1 from "./components/Section1";

const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        {/* put in here the components*/}
        <App/>
        <Button/>
        <Section1/>
    </div>
);