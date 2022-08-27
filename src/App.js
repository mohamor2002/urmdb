import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Watched from './pages/Watched/Watched'
import Watchlist from './pages/Watchlist/Watchlist'
import Rated from './pages/Rated/Rated';
import {GlobalProvider} from './Context/GlobalContext'
import Movie from './pages/Movie/Movie';

function App() {
  return (

    <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='watchlist' element={<Watchlist/>}/>
            <Route path=':movieId' element={<Movie/>}/>
            <Route path='watched' element={<Watched/>}/>
            <Route path='rated' element={<Rated/>}/>
          </Routes>
        </BrowserRouter>      
    </GlobalProvider>
  );
}

export default App;
