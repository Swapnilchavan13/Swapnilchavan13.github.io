import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Calender from './Components/git-states/Calender';
import States from './Components/git-states/States';
import Nav from './Components/Navbar/Nav';
import Card from './Components/Repos/Card';
import Skills from './Components/skills/Skills';
import Contacts from './Components/Contact/Contacts';


function App() {
  return (
    <div className="App">
     <Nav/>
     <Home/>
     <About/>
     <Skills/>
     <Card/>
     <Calender/>
     <States/>
     <Contacts/>
    </div>
  );
}

export default App;
