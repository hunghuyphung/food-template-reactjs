import './globalStyles.css';
import Header from "./components/Header/Header";
import Catering from "./components/Catering/Catering";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";

function App() {
    return (
        <div>
            <Header></Header>
            <Intro></Intro>
            <div className="margin-auto" style={{maxWidth: '1100px'}}>
                <Catering></Catering>
                <hr/>
                <Menu></Menu>
                <hr/>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;
