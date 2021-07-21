import '../styles/AboutMe.css';
import avatar from "../Images/Avatar.PNG"
import python from "../Images/python.png"
import java from "../Images/java.png"
import cplusplus from "../Images/c++.png"
import javascript from "../Images/javascript.png"
import jquery from "../Images/jquery.png"
import node from "../Images/node.PNG"
import react from "../Images/react.png"
import express from "../Images/express.png"
import mysql from "../Images/mysql.png"
import database from "../Images/database.png"


function AboutMePage (){
    return (

        <div>
            <div className = "AboutContainer">
                <div className = "AboutContainerContent">
                    <img className = "avatarImage" src = {avatar} height="280" width="250"/>
                    <div className = "AboutMeInfo">
                        <h1 className = "title">About Me</h1>
                        <span>My name is Ahmad Mujeeb and I am currently a student studying computer science at the University of Ontario Institute of Technology (Ontario Tech University).
                        I am also a graduate from uoft fullstack coding bootcamp. My expertise are building and developing full stack applications using the latest technologies 
                        </span>
                    </div>
                </div>

                <h3>Skill Set</h3>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm">
                                <h5 className = "languages">Languages</h5>
                                <img className = "images" src = {python} width = "50" height = "50"/>
                                <img className = "images" src = {java} width = "50" height = "50"/>
                                <img className = "images" src = {cplusplus} width = "50" height = "50"/>
                                <img className = "images" src = {javascript} width = "50" height = "50"/>
                            </div>
                            <div class="col-sm">
                                <h5>Frameworks and Library</h5>
                                <img src = {jquery} width = "50" height = "50"/>
                                <img src = {node} width = "60" height = "50"/>
                                <img src = {react} width = "60" height = "50"/>
                                <img src = {express} width = "90" height = "70"/>
                            </div>
                            <div class="col-sm">
                                <h5>Databases</h5>
                                <img src = {database} width = "150" height = "100"/>
                            </div>
                        </div>
                    </div>           
            </div>
        </div>


    )
}



export default AboutMePage;
