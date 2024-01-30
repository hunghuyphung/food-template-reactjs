import Img from "../../assets/hamburger.jpg";

function Intro() {
    return (
        <div className="display-container">
            <img src={Img} alt="" className="width-100 h-image" height="800px"/>
            <div className="display-bottom-left padding-12-24">
                <h1 className="letter-spacing-5 h-opacity">Le Catering</h1>
            </div>
        </div>
    );
}

export default Intro;