import React, {useState, useEffect, useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [data, setData] = useState([]); //Default value is an empty array

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('Get', 'https://dummyjson.com/products');
        xhr.send();
        xhr.addEventListener('load', () => {setData(xhr.response.products)} );
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