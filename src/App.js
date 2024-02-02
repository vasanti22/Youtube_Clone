import './App.css';
import Body from './Components/Body.js';
import Header from "./Components/Header.js";
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import store from "./Utils/store.js"
import MainContainer from './Components/MainContainer.js';
import WatchPage from './Components/WatchPage.js';


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element:<MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    }
  ]
}]);


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
