import ReactDOM from 'react-dom/client';
import './index.css';
import './pages/App.css'
import About from './pages/About';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

const router =createBrowserRouter([

{
  path:"/",
  element:<About/>
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

