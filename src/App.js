import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./components/Navibar";
import Carouselc from './components/Carouselc';
import Itemlist from './components/Itemlist';

const App = () => {
    const greetings = <h1>Welcome KodeBrewers in React using JSX!</h1>;
  return (
    <>
    <Navibar/>
    <Carouselc/>
    <Itemlist/>
    <div>
        {greetings}
    </div>
    </>
  );
};

export default App