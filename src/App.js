import './App.css';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import store from "./Utils/store.js"
import MainContainer from './Components/MainContainer.js';
import WatchPage from './Components/WatchPage.js';
import Body from './Components/Body.js';
import Header from "./Components/Header.js";
import SearchVideo from "./Components/SearchVideo.js";


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
    },
    {
      path: "results",
      element: <SearchVideo />
    }
  ]
}]);


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      
        <RouterProvider router={appRouter}>
          <Header />

          <Body />
          
        </RouterProvider>

      </div>
    </Provider>
  );
}

export default App;
