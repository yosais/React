import React, {useState, useEffect, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [data, setData] = useState([]); //Default value is an empty array

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((json_obj) => setData(json_obj.products))
            .catch((err) => console.error(err));
    });

    return (
        <div>
            <ul>
                {
                    data.map( item => <li> {item.title} </li> )
                }
            </ul>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));