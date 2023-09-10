import React from 'react';
import ReactDOM from 'react-dom/client';
import {App}  from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  // const INITIAL_STATE = {
  //   name: '',
  //   number: '',
  // };

  // const [state, setState] = useState(INITIAL_STATE);

  // const onSubmit = event => {
  //   event.preventDefault();
  //   const { name, number } = state;
  //   const id = nanoid();
  //   onAddContact({ id, name, number });
  //   reset();
  // };
  // // const reset = () => {
  // //   setState(INITIAL_STATE);
  // // };

  // const onChange = event => {
  //   const { name, value } = event.target;
  //   setState(prevState => {
  //     return { ...prevState, [name]: value };
  //   });
  // };