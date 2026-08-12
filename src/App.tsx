import VideoBanner from './components/VideoBanner';
import Advantages from './components/Advantages';
import PassengerRights from './components/PassengerRights';
import ProcessHow from './components/ProcessHow';
import ProcessService from './components/ProcessService';
import About from './components/About';
import Inquire from './components/Inquire';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <div className="site">
        <VideoBanner />
        <Advantages />
        <ProcessService />
        <PassengerRights />
        <ProcessHow />
        <About />
        <Inquire />
        <Footer />
      </div>
    </>
  );
}
