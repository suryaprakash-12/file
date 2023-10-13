import ReactDOM from 'react-dom/client';
import './index.css';
import './pages/App.css'
import About from './pages/About';
import {Route, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Header from './components/Header';


const router =createBrowserRouter([
  {
  path:"/",
  element:<Header/>
},
{
path:"about", 
element:<About/>
},
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
)

