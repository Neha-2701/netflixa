// import logo from './logo.svg';
import { movies } from './Components/getMovies';
import Navbar from './Components/Navbar';
import Banner  from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import {Switch ,Router,Route, BrowserRouter} from 'react-router-dom';
// import {Routes} from 'react-router-dom';
// import {BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route path='/netflixa' exact render={(props)=>(
        <>
          <Banner {...props}/>
          <Movies {...props}/>
        </>

      )} />
      <Route path="/favourite" component={Favourite} />
      
      </Switch>
    </BrowserRouter>
      
    </>

  );
}

export default App;
