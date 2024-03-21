import React, { useEffect, useState } from "react";
import Siv_0 from '../../assets/projects-images/screenshot-0.jpg';
import Siv_Icon from '../../assets/projects-images/Siv_512x512.png';
import MonedaG from '../../assets/projects-images/MonedaG4.png';
import "./SivProject.css";

const SivProject = () => {

    return (
        <div className="App">
            <div className="sivProject-TopDown">
                <img src={Siv_0} className="sivProject-MainImage"></img>

                <div className="sivProject-LeftRight">
                    <img src={Siv_Icon} className="sivProject-IconImage"></img>
                    <div className="sivProject-SpaceB">Here will be a general Siv presentation.</div>
                </div>
                <div className="sivProject-LeftRight"> 
                    <div className="sivProject-SpaceA">Here is a short description about the features of the project.</div>
                    <img src={MonedaG} className="sivProject-IconImage"></img>
                </div>
                <div className="sivProject-LeftRight"> 
                    <img src={MonedaG} className="sivProject-IconImage"></img>
                    <div className="sivProject-SpaceB">Here I will give link to the app at google play, link to the privacy policy, link to my bio and my email so a customer can contact me, the developer.</div>
                </div>
            </div>
        </div>
    );
}

export default SivProject;