import ReactDOM from 'react-dom/client';
import './index.css';
import './pages/App.css'
import About from './pages/About';
import {Route, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import nav from './components/nav';

const router =createBrowserRouter([
  {
  path:"/",
  element:<nav/>
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

