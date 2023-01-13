import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import Categories from './components/Categories/Categories';
import CountryBased from './components/CountryBased/CountryBased';
import AboutUs from './components/AboutUS/AboutUs';
import NotFound from './components/NotFound/NotFound';
import MealDetails from './components/MealDetails/MealDetails';
import MealCookDetails from './components/MealCookDetails/MealCookDetails';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <div className='mt-a'>
      <Routes>
       <Route path='/' element={<HomePage />}></Route>
       <Route path='/search' element={<Search />}></Route>
       <Route path='/meal/:strMeal' element={<MealDetails />}></Route>
       <Route path='/meal/cook/:strMeal' element={<MealCookDetails/>}></Route>
       <Route path='/categories' element={<Categories />}></Route>
       <Route path='/explore' element={<CountryBased />}></Route>
       <Route path='/aboutus' element={<AboutUs />}></Route>
       <Route path='*' element={<NotFound />} /> 
      </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
