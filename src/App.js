import './App.css';
import Body from './Components/Body.js';
import Header from "./Components/Header.js";
import { Provider } from 'react-redux';
import store from "./Utils/store.js"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Body/>
      </div>
    </Provider>
  );
}

export default App;
