import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [name, setName] = useState('');

    // You will get into an infinite loop. Solution is to the a different hook: useRef
    //const [renderCount, setRenderCount] = useState(0);
    //useEffect( () => { setRenderCount( renderCount => renderCount + 1 ) });

    // Count the actual number of times state of a component changes
    const renderCount = useRef(0);
    useEffect( () => { renderCount.current = renderCount.current + 1 });

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <h2>My name is {name}</h2>
            <h3>Component has been rendered {renderCount.current} times.</h3>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));