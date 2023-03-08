import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// à écrire sur les pages où on veut un icone
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import des photos
import molang1 from "../assets/molang1.gif";
import molang2 from "../assets/molang2.gif";
import molang3 from "../assets/molang3.png";
import molang4 from "../assets/molang4.gif";
import pusheen1 from "../assets/pusheen1.png";
import pusheen2 from "../assets/pusheen2.png";
import pusheen3 from "../assets/pusheen3.png";
import pusheen4 from "../assets/pusheen4.png";
import chat1 from "../assets/chat1.jpg";
import chat2 from "../assets/chat2.gif";

const Favoris = () => {

    const [favCard, setFavCard] = useState([]);
    const [read2, setRead2] = useState(false);
    const [errorMsg2, setErrorMsg2] = useState("");



    const handleLike = (e) => {
        let id = 'like' + Date.now();
        let favoriteDataLine = { id: (id) };
        let copy = [...favCard];
        copy.push(favoriteDataLine);
        console.log("myFavorite + id : ", id, copy);
        setFavCard(copy);
        localStorage.setItem('favoriteCard', JSON.stringify(copy));
    }

    useEffect(() => {
        //! test pr afficher les favs 
        const card = localStorage.getItem('favoriteCard');
        if (card) {
            setFavCard(JSON.parse(card));
        }
    }, []); //* tableau vide car nous ne voulons obtenir les données qu'une seule fois au chargement de la page


    const readCard = () => {
        //! test pr afficher les cards
        if (favCard.length > 0) {
            localStorage.getItem('favoriteCard') && (
                // attention vérifier qu'il existe des datas avat de parser sinon erreur
                JSON.parse(localStorage.getItem('favoriteCard'))
            )
            setRead2(true);  // condition pour afficher les données
        }
        else {
            setErrorMsg2("il n'y a rien à afficher");
        }
    }

    return (<>
        <div className="App">

            <main className="displayFavorisPage">
                <div><Link to="/">vers Home</Link></div>
                <section className='displayCard'>
                    <div>
                        <span>
                            <img src={molang1} alt="molang" />
                            <FontAwesomeIcon
                                onClick={handleLike}
                                className="heartIconCharacters" icon={["far", "heart"]} />
                        </span>
                        <span>
                            <img src={molang2} alt="molang" />
                            <FontAwesomeIcon
                                onClick={handleLike}
                                className="heartIconCharacters"
                                icon={["far", "heart"]} />
                        </span>

                        <span><img src={molang3} alt="molang" /><FontAwesomeIcon onClick={handleLike} className="heartIconCharacters" icon={["far", "heart"]} /></span>
                        <span><img src={molang4} alt="molang" /><FontAwesomeIcon onClick={handleLike} className="heartIconCharacters" icon={["far", "heart"]} /></span>
                        <span><img src={pusheen1} alt="pusheen" /><FontAwesomeIcon onClick={handleLike} className="heartIconCharacters" icon={["far", "heart"]} /></span>
                        <span><img src={pusheen2} alt="pusheen" /><FontAwesomeIcon onClick={handleLike} className="heartIconCharacters" icon={["far", "heart"]} /></span>
                        <span><img src={pusheen3} alt="pusheen" /><FontAwesomeIcon onClick={handleLike} className="heartIconCharacters" icon={["far", "heart"]} /></span>
                        <span><img src={pusheen4} alt="pusheen" /><FontAwesomeIcon onClick={handleLike} className="heartIconCharacters" icon={["far", "heart"]} /></span>
                        <span><img src={chat1} alt="chat" /><FontAwesomeIcon onClick={handleLike} className="heartIconCharacters" icon={["far", "heart"]} /></span>
                        <span><img src={chat2} alt="chat" /><FontAwesomeIcon onClick={handleLike} className="heartIconCharacters" icon={["far", "heart"]} /></span>
                    </div>

                    <button type="button" onClick={readCard}>Read data</button>

                </section>

                {read2 ? (<>

                    {favCard.map((element, i) => {
                        console.log(element);
                        return <div key={i}>
                            <span>-{element.id}</span>
                        </div>
                    })}
                </>) : (
                    <p className={errorMsg2 && "error_msg"}>{errorMsg2}</p>
                )}
            </main>
        </div>

    </>)
}

export default Favoris;