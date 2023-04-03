import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [name, setName] = useState('');
    
    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <h2>My name is {name}</h2>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));