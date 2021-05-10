
import './App.css';
import react,{Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ShowData from './components/ShowData/ShowData'
import tachyons from "tachyons"


class App extends Component {
  constructor(){
    super();
    this.state = {
      entereddata : '',
    }
  }
  onChange =(event) =>{
    
  }
  render(){
    return (
      <div className="App">
        <Navbar />
        <Hero/>
        <ShowData onchange = {this.onChange}/>
      </div>
    );
  }
 
}

export default App;
