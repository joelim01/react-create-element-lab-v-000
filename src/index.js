import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'An Awesome Person');
const description = React.createElement('p', {}, 'Who is learning React');
const list = React.createElement('ul', {className: 'my-interests'}, '<li>Javascript</li><li>React</li><li>Movies</li><li>Ice Cream</li>')
const meInReact = React.createElement('div', {className: 'me'}, [title, description, list]);

// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact

