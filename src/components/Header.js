// import '../App.css';

// à écrire sur les pages où on veut un icone
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {
    return (
        <header className="App_header">
            <h1>gestion des favoris</h1>
            <h2>en localStorage</h2>
            <h3>+ import des icones</h3>
            <span><FontAwesomeIcon icon={["far", "heart"]} /></span>
            <span><FontAwesomeIcon color="#FFCC00" className="starIcon" icon='star' /></span>
            <span><FontAwesomeIcon color="#FFCC00" className="emptyStar" icon="fa-regular fa-star" /></span>
        </header>)
}

export default Header;