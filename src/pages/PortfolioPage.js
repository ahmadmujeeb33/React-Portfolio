import '../styles/Portfolio.css';
import cookbook from "../Images/cookbook.PNG"
import chess from "../Images/chess.PNG"
import techBlog from "../Images/TechBlog.PNG"
import Weather from "../Images/weather.PNG"
import connect4 from "../Images/Connect4.PNG"
import Detector from "../Images/detector.PNG"

function PortfolioPage(){
    return (
        <div>
            <div className = "PortfolioContainer">
                <h2 id = "title">My Personal Projects</h2>
                <div class="container">
                    <div class="row mx-0">
                        <div class="col no-gutters px-0">
                            <img width = "370" height = "280" src = {cookbook} />
                        </div>
                        <div class="col no-gutters px-0">
                            <img width = "340" height = "280" src = {chess} />
                        </div>
                        <div class="col no-gutters px-0">
                            <img width = "400" height = "280" src = {techBlog} />
                        </div>
                    </div>
                    <div class="row mx-0">
                        <div class="col px-0">
                            <img width = "370" height = "280" src = {Weather}/>
                        </div>
                        <div class="col px-0">
                            <img width = "340" height = "280" src = {connect4}/>
                        </div>
                        <div class="col px-0">
                            <img width = "400" height = "280" src = {Detector}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default PortfolioPage;