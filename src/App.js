import React, { useEffect, useState } from 'react'
import './App.css';
import Product from './components/Product';
import { BrowserRouter as Router,Routes, Route,Navigate} from "react-router-dom";
import About from './components/about/About';
import axios from 'axios';

function App() {

  const [data, setData] = useState([])

  if(localStorage.getItem('basket') === null) {
    localStorage.setItem('basket',JSON.stringify([]))
  }

  useEffect(() => {
      axios.get("./api/product.json")
          .then(resp => setData(resp.data))
          .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to="/product"/>}></Route>
        <Route path='/product' element={<Product data={data}/>}/>
        <Route path='/about/:id' element={<About data={data}/>}/>
      </Routes>
    </Router>

    </div>
  );  
}

export default App;
