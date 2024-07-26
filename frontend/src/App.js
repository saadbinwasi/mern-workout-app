import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Notfound404 from "./pages/Notfound404";

function App() {
  return (
    <div className="App">
   <BrowserRouter>

   <div className="pages">
   <Routes>

    <Route path='/' element={<Home/>} ></Route>
    <Route path='*' element={<Notfound404/>} ></Route>

   </Routes>






   </div>
   
   
   </BrowserRouter>
    </div>
  );
}

export default App;
