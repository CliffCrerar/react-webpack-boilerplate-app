/**
 * Application main entry point
 * @summary Frameworks and other files
 * @author Cliff Crerar
 * Created at     : 2018-07-04 18:22:57
 * Last modified  : 2018-12-15 00:36:22
 */



import React from "react";
import ReactDOM from "react-dom";

import style from './index.css';

const Index = () => {
    return <div className={style.primaryButton}>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));