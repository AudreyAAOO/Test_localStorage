import '../App.css';
import React, { useState, useEffect } from 'react';

// import de l'icone mui
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
//! installer dans cet ordre : 
//! yarn add @mui/material @emotion/react @emotion/styled


// export class Credential { constructor(name, password) {  
//         this.name = name;
//         this.password = password; }}

// export class DataLine {constructor(id, credential) {
//         this.id = id;
//         this.credential = credential;}}

//* Dataline contient id (= user + date) ET credential qui contient name + password

const Home = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [dataline, setDataline] = useState([]);
    const [data, setData] = useState([]);    // if (data == null) data = [];
    // id: { id }, credential: { name: { name }, password: { password } } 

    // let data = JSON.parse(localStorage.getItem('data'));

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = 'user' + Date.now(); // const timestamp = Date.now();
        console.log('id : ', id); //ok

        const credential = { name: name, password: password }; // ok
        console.log('credential : ', credential);
        setDataline({ id: id, credential: credential })   // const line = new DataLine(id, cred);// data = [...data, line];
        console.log('dataline : ', dataline);

        setData(dataline);

        // setData((prevState) => [...prevState, {id: id, credential: credential,},]);
        // push ne fonctionne pas

        console.log('data : ', data); //* attention les logs ont 1 temps de retard
        setName("");
        setPassword("");
    };

    //saving data to local storage
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
        localStorage.setItem('dataline', JSON.stringify(dataline));
    }, [data]); // pour enregistrer les données à chaque fois qu'elles sont modifiées

    // lire les données
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('data'));
        if (items) {
            setData(items);
        }
    }, []); //tableau vide car nous ne voulons obtenir les données qu'une seule fois au chargement de la page


    //! efface la dernière clé ds le storage
    const remove = () => {
        localStorage.removeItem('data'); // ne fonctionne plus si les données s'écrasent
    };

    //! efface toutes les clés ds le storage
    const removeAllData = () => {
        localStorage.clear('data'); // ok
    };

    // lire  la clé ds le storage   //! ne fonctionne pas
    const readData = () => {
        localStorage.getItem('data') && (
            <div>
                <p>Name: {JSON.parse(localStorage.getItem('data'))}</p>
            </div>
        )
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
                        <button type="submit">Done</button>
                        <button onClick={remove}>Remove last data
                        </button>
                        <button className="btn_delete" disabled={true} >Remove ALL data
                            <DeleteForeverOutlinedIcon
                                className="note_delete"
                                aria-hidden="true"
                                onClick={removeAllData}
                            ></DeleteForeverOutlinedIcon>
                        </button>
                        <button onClick={readData}>Read data</button>

                    </div>

                    {/* {localStorage.getItem('Password') && (
                        <div>
                            <p>Password: {localStorage.getItem('Password')}</p>
                        </div>
                    )} */}
                </form>

            </main>

        </div>

    </>);
};
export default Home;