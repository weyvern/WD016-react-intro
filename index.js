'use strict';

/* const styles = { backgroundColor: 'green' }; */

// App component: entry point for our whole application
const App = () => {
  return (
    <div /* style={styles} */ /* className='main-container' */>
      <Button title='Sprachniveau A1+' onClick={() => console.log('hi')} />
      <Button onClick={() => console.log('hola')} />
      <Button onClick={() => console.log('hallo')} />
      <Button title='Click!' onClick={() => console.log('hola de nuevo')} />
    </div>
  );
};

/* // Destructuring assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const obj = { a: 1, b: 2, c: 3 };

const { a, b, c } = obj;
console.log(b); */

const myFunc = () => {
  // logic here
  console.log('Hello there');
};

// Button component: reusable component
const Button = ({ title, onClick }) => {
  return <button onClick={onClick}>{title || 'No title'}</button>;
};

// We get a hold of the div with id of app and mount our React app
const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);
