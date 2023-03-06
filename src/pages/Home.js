import '../App.css';
import React, { useState, useEffect } from 'react';

// import de l'icone mui
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
//! installer dans cet ordre : 
//! yarn add @mui/material @emotion/react @emotion/styled

// export class Credential { constructor(name, password) {  
//         this.name = name;
//         this.password = password; }}

//* Dataline contient id (= user + date) + credential qui contient name + password
// export class DataLine {constructor(id, credential) {
//         this.id = id;
//         this.credential = credential;}}


const Home = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);    // if (data == null) data = [];
    const [read, setRead] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const id = 'user' + Date.now(); // const timestamp = Date.now();

        // pertinent que credential soit un objet (= une ligne d'infos sur l'utilisateur)
        const credential = { id: id, name: name, password: password };
        console.log('credential : ', credential);

        //? pertinent que le state data soit un tableau, qui contiendra plusieurs objet credential
        //! on change la valeur du state pour pouvoir l'afficher et l'utiliser ailleurs
        const copy = [...data];  // data = [...data, line];
        copy.push(credential); // on push sur la copie du tableau data pour ajouter une entrée
        console.log("copy: ", copy);
        setData(copy)   // const line = new DataLine(id, cred);

        /* stocker exactement ce qu'on stocke ds data/ = ici ce qu'on stocke ds le state, 
        car le temps que le setData se mette à jour le storage sera déjà fait, l'un ne devrait pas dépendre de l'autre*/
        localStorage.setItem('data', JSON.stringify(copy));

        // console.log('data : ', data); //* attention les logs ont 1 temps de retard
        setName("");
        setPassword("");
        setErrorMsg(""); // Je fais disparaitre le message d'erreur et les input du form
    };

    // Récupérer les données dans le but de les afficher par exemple
    useEffect(() => {
        const items = localStorage.getItem('data');  // let data = JSON.parse(localStorage.getItem('data'));
        if (items) {  // vérifier qu'il existe des datas avat de parser sinon erreur
            setData(JSON.parse(items));
        }
    }, []); //* tableau vide car nous ne voulons obtenir les données qu'une seule fois au chargement de la page

    // //! efface la dernière clé ds le storage
    // const remove = () => {
    //     localStorage.removeItem('data');
    // };

    //! efface toutes les clés ds le storage
    const removeAllData = () => {
        localStorage.clear(); // ok
        setData("");
        setRead(false); //! ne pas oublier de remettre read sur false
    };

    // lire  la clé ds le storage   //! ne fonctionne pas
    const readData = () => {
        if (data) {
            localStorage.getItem('data') && (
                // attention vérifier qu'il existe des datas avat de parser sinon erreur
                JSON.parse(localStorage.getItem('data'))
            )
            setRead(true);  // condition pour afficher les données
        } else {
            setErrorMsg("il n'y a rien à afficher, veuillez entrer une donnée");
            console.log(errorMsg);
        }
    }




    return (<>
        <div className="App">
            <main>
                <form className="form" onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="userName">Name :
                        <input
                            placeholder="Name"
                            id="userName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        /></label>
                    <label htmlFor="userPassword">Password :
                        <input
                            type="password"
                            id="userPassword"
                            placeholder="Password"
                            autoComplete='off'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /></label>
                    <div className='button'>

                        {/* //! par défaut un button est de type submit */}
                        <button type="submit">Done</button>

                        {/* <button type="button" onClick={remove}>Remove last data </button>*/}
                        {/* //! si on ne veut pas qu'il redéclenche la fonction liée au onSubmit, il faut les passer en type=button */}
                        <button type="button" className="btn_delete" disabled={true} >Remove ALL data
                            <DeleteForeverOutlinedIcon
                                className="note_delete"
                                aria-hidden="true"
                                onClick={removeAllData}
                            ></DeleteForeverOutlinedIcon>
                        </button>

                        <button type="button" onClick={readData}>Read data</button>
                        {/* data.length > 0 */}
             {read ? (
                        data.map((elem) => {
                            // console.log(elem);
                            return <div key={elem.id}>
                                <span>Bonjour {`${elem.name.charAt(0).toUpperCase() + elem.name.slice(1)}`}</span>
                            </div>
                        })
                    ) : (
                            <p className={errorMsg && "error_msg"}>{errorMsg}</p>
                        )}
                    </div>
                </form>
            </main>
        </div>
    </>);
};
export default Home;