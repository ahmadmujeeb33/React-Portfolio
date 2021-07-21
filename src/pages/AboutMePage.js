import '../styles/AboutMe.css';
import avatar from "../Images/Avatar.PNG"

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
            </div>
        </div>


    )
}



export default AboutMePage;
