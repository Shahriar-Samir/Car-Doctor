import About from "./About";
import Banner from "./Banner";
import Details from "./Detail";
import Service from "./Service";
import { Helmet} from 'react-helmet-async';


const Home = () => {
    return (

        <div>
      
      <Helmet>
        <title>Car Doctor || Home</title>
      </Helmet>
 
            <Banner/>
            <About/>
            <Service/>
            <Details/>
        </div>
    );
};

export default Home;