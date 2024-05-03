import About from "../About/About";
import Banner from "../Banner/Banner";
import Popular from "../Popular/Popular";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Popular></Popular>
        </div>
    );
};

export default Home;