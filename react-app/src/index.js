import React from 'react';
import ReactDOM from 'react-dom';

// babel 會將 JSX 轉換為 React.createElement()
// 也說明了為什麼沒用到 React，還需要 import
const element = <h1>Hello World</h1>;

// log React element
console.log(element);

// ref to public/index.html
ReactDOM.render(element, document.getElementById('root'));
