import './App.css';
import { Route} from "react-router-dom";
import NavBar from  './views/Navbar/navBar.jsx'
import Stateless from './views/Func_Props/statelessPage.jsx'
import Card from './views/Func_Props/cardPage.jsx'
import Data from './views/Func_Props/data.json'
import Stateful from './views/Class_Props/statefulPage.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>

      {/* componente pasandole props en un archivo json*/}
      <Route exact path="/"> 
      <Stateless nameSquad={Data[0].squadName} Town={Data[0].homeTown} Date={Data[0].formed}/>
      {
        Data[0].members.map(res => {
          return <Card nameHero={res.name} age={res.age} Identity={res.secretIdentity} powers={res.powers}/>
        })
      }
      </Route>

      {/*componente con estado*/}
      <Route path="/State"> 
      <Stateful/>
      </Route>
    </div>
  );
}

export default App;
