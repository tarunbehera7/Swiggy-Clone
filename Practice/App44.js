
import logo from "../logo/Screenshot (76).png";
import Body66 from "./src/Body66";

const Header = () => {
    return (
        <>
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </div>
        </>
    );
};

// JS obj
const styleCard = {
    backgroundColor : "#FFF";
}

const ResCard = () => {
    return (
        <div className="res-card" style={styleCard}>

        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <ResCard66/>
            <ResCard66/>
            <ResCard66/>
            <ResCard66/>
            <ResCard66/>
            <ResCard66/>
            <ResCard66/>
            <ResCard66/>
            <ResCard66/>
        </div>
    );
};


const App = () => {
    return (
        <div className="app">
            <Header/>
            <Body66/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);