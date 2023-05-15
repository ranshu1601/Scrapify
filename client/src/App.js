import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Result from './components/Result';

function App() {
  const [product, setProduct] = useState("");
  const [amazonData, setAmazonData] = useState(null);
  const [flipkartData, setFlipkartData] = useState(null);

  useEffect(() => {
    console.log(`/request/getAmazon?search=${product}`)
    if(product === null || product ==="") return;
    const fetchAdata = async () => {
      fetch(`/request/getAmazon?search=${product}`).then(res => res.json()).then(data => {
        setAmazonData(data);
        console.log(data)
      });
    }

    const fetchFdata = async () => { fetch(`/request/getFlipkart?search=${product}`).then(res=>res.json()).then(data => setFlipkartData(data)); }

    fetchAdata();
    fetchFdata();
  }, [product])

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<div>
              <Home setProduct={setProduct} />
            </div>} />
            <Route path='/search' element={<div>
              <Navbar setProduct={setProduct} />
              {amazonData && flipkartData && (<Result amazonData={amazonData} flipkartData={flipkartData} product={product} />)}
            </div>} />
            <Route path='/about' element={<div>
              <Navbar setProduct={setProduct} />
              <About />
            </div>} />
          </Routes>
        </BrowserRouter>


      </div>
      <Footer />
    </>

  );
}

export default App;
