
import './App.css';
import Home from './components/Home'
import Data from './components/Data'
import {Switch,Route} from 'react-router-dom'

const  App=()=> (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/data" component={Data} />
    </Switch>
  )


export default App;
