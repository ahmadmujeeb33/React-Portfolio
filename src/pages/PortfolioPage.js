import '../styles/Portfolio.css';
import cookbook from "../Images/cookbook.PNG"
import chess from "../Images/chess.PNG"
import techBlog from "../Images/TechBlog.PNG"
// import Weather from "../Images/weather.PNG"
import SocialMediaBlog from "../Images/SocialMediaBlog.PNG"
import connect4 from "../Images/Connect4.PNG"
import Detector from "../Images/detector.PNG"

function PortfolioPage(){
    return (
        <div>
            <div className = "PortfolioContainer">
                <h2 id = "title">My Personal Projects</h2>
                <div class="container">
                    <div class="row mx-0">
                        <div class="col no-gutters px-0" id = "logo-holder">
                            <img className = "image" width = "370" height = "280" src = {cookbook} />
                            <h3 className = "text">Personal Cookbook</h3>
                            <h6><a className = "Repo" target="_blank" href = "https://github.com/ahmadmujeeb33/Simmer_Cookbook">Repo</a></h6>
                            <h6><a className = "liveApplication" target="_blank" href = "https://simmer-cookbook.herokuapp.com/">Live application</a></h6>
                        </div>
                        <div class="col no-gutters px-0" id = "logo-holder">
                            <img className = "image" width = "340" height = "280" src = {chess} />
                            <h3 className = "text">Multiplayer Chess</h3>
                            <h6><a className = "Repo" target="_blank" href = "https://github.com/ahmadmujeeb33/ChessGame">Repo</a></h6>
                            <h6><a className = "liveApplication" target="_blank" href = "https://ahmadmujeeb33.github.io/ChessGame/">Live application</a></h6>
                        </div>
                        <div class="col no-gutters px-0" id = "logo-holder">
                            <img className = "image" width = "400" height = "280" src = {techBlog} />
                            <h3 className = "text">Tech Blog</h3>
                            <h6><a className = "Repo" target="_blank" href = "https://github.com/ahmadmujeeb33/Tech-Blog">Repo</a></h6>
                            <h6><a className = "liveApplication" target="_blank" href = "https://techblog3246789.herokuapp.com/">Live application</a></h6>
                        </div>
                        <div class="col px-0" id = "logo-holder">
                            <img className = "image" width = "370" height = "280" src = {SocialMediaBlog}/>
                            <h3 className = "text">Social Media Blog</h3>
                            <h6><a className = "Repo" target="_blank" href = "https://github.com/ahmadmujeeb33/Blog">Repo</a></h6>
                            <h6><a className = "liveApplication" target="_blank" href = "https://sheltered-taiga-47353.herokuapp.com/">Live application</a></h6>
                        </div>
                        <div class="col px-0" id = "logo-holder">
                            <img className = "image" width = "340" height = "280" src = {connect4}/>
                            <h3 className = "text">Online Connect4</h3>
                            <h6><a className = "Repo" target="_blank" href = "https://github.com/ahmadmujeeb33/Multithreaded-Connect4">Repo</a></h6>
                            {/* <h6><a className = "liveApplication" href = "#">Live application</a></h6> */}
                        </div>
                        <div class="col px-0" id = "logo-holder">
                            <img className = "image" width = "400" height = "280" src = {Detector}/>
                            <h3 className = "text">Spam Detector</h3>
                            <h6><a className = "Repo" target="_blank" href = "https://github.com/ahmadmujeeb33/Ahmad_assighnment_software">Repo</a></h6>
                            {/* <h6><a className = "liveApplication" href = "#">Live application</a></h6> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default PortfolioPage;