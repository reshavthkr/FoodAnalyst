
import './App.css';
import react,{Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ShowData from './components/ShowData/ShowData'
import tachyons from "tachyons"
import Footer from './components/Footer/Footer'

class App extends Component {
  constructor(){
    super();
    this.state = {
      entereddata : '',
    }
  }
  render(){
    return (
      <div className="App">
        <Navbar />
        <Hero/>
        <ShowData/>
        <Footer/>
      </div>
    );
  }
 
}

export default App;
