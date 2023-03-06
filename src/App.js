// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import des components
import Header from './components/Header';
import Footer from './components/Footer';

// import des pages
import Home from './pages/Home';
import Favoris from "./pages/Favoris"

// // à écrire sur les pages où on veut un icone
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//! doc https://apollo.lereacteur.io/course/624eddf4c4a94d0018380f7c/63ad87cee9d56300182ff752
// installer les packages de https://fontawesome.com/
//* yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

// import des icones 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faStar as faEmptyStar } from '@fortawesome/free-regular-svg-icons';
library.add(faHeart, faStar, faEmptyStar);


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}
export default App;
