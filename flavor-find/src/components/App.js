
import '../App.css';
import '../index.css'
import Header from './Header';
import RecipeCard from './RecipeCard';
import Body from './Body';
import Cart from '../pages/Cart';
import { Provider } from 'react-redux'
import Favorit from '../pages/Favorit';
import {
  BrowserRouter as Router,
  Switch,
  Route, Routes
} from 'react-router-dom'
import Card_Details from '../pages/Card_Details';

function App() {
  return (

    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Home" element={<Body />} exact>
          </Route>
          <Route path="/Favorit" element={<Favorit />} exact>

          </Route>
          <Route path="/Cart" element={<Cart />} exact>

          </Route>
          <Route path="/Card_Details" element={<Card_Details />} exact>

          </Route>
        </Routes>


      </Router>
    </div >
  );
}

export default App;
