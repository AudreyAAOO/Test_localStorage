// 🦁 Rajoute un paramètre générique `<T> à notre `useState`
// 🤫 Il faudra remplacer les string
function useState(initialValue: string): [string, (value: string) => void] {
    let value = initialValue;
    const setValue = (newValue: string) => {
      value = newValue;
    };
    return [value, setValue];
  }
  
  const [myName, setMyName] = useState('Melvyn');
  
  // Erreur 🤯 useState n'accepte que des strings 😶
  const [height, setHeight] = useState("100");
  