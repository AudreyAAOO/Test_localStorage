import React, { useState } from 'react';
export class Credential {
    constructor(name, pwd) {
        this.name = name;
        this.pwd = pwd;
    }
}
export class DataLine {
    constructor(id, credential) {
        this.id = id;
        this.credential = credential;
    }
}

const App = () => {

    const timestamp = Date.now();
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    let data = JSON.parse(localStorage.getItem('data'));

    if (data == null)
        data = [];
    console.log('data');

    console.log(data);

    const handle = () => {
        const primaryKey = 'user' + timestamp
        const cred = new Credential(name, pwd);

        const line = new DataLine(primaryKey, cred);

        console.log(line);

        data = [...data, line];
        //tofo: add to data
        localStorage.setItem('data', JSON.stringify(data));
    };
    const remove = () => {
        localStorage.removeItem('data');
    };
    return (
        <div className="App">
            <h1>Name of the user:</h1>
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h1>Password of the user:</h1>
            <input
                type="password"
                placeholder="Password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
            />
            <div>
                <button onClick={handle}>Done</button>
            </div>
            {localStorage.getItem('Name') && (
                <div>
                    Name: <p>{localStorage.getItem('data')}</p>
                </div>
            )}
            {localStorage.getItem('Password') && (
                <div>
                    Password: <p>{localStorage.getItem('Password')}</p>
                </div>
            )}
            <div>
                <button onClick={remove}>Remove</button>
            </div>
        </div>
    );
};
export default App;