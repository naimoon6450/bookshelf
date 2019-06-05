import ReactDOM from 'react-dom';
import React from 'react';
import Main from './components/Main.js'

const app = document.getElementById('app')

ReactDOM.render(<Main />, app, () => {
  console.log('DOM Rendered')
})
