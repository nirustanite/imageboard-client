import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <h1>Hello WOrld</h1>
        </div>
      </Provider>
    </div>
  );
}

export default App;
