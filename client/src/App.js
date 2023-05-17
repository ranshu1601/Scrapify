import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Result from './components/Result';
import Loader from './components/Loader';
import { render } from 'react-dom';

function App() {
  const [product, setProduct] = useState("");
  const [amazonData, setAmazonData] = useState(null);
  const [flipkartData, setFlipkartData] = useState(null);
  const [loader,setLoader] = useState(false);

  useEffect(() => {
    console.log(`/request/getAmazon?search=${product}`)
    if (product === null || product === "") return;
    setLoader(true);
    console.log(loader);
    const fetchAdata = async () => {
      fetch(`/request/getAmazon?search=${product}`).then(res => res.json()).then(data => {
        setAmazonData(data);
        setLoader(false);
        console.log(loader);
      });
    }

    const fetchFdata = async () => { fetch(`/request/getFlipkart?search=${product}`).then(res => res.json()).then(data => setFlipkartData(data)); }

    fetchAdata();
    fetchFdata();
  }, [product]);


  // useEffect(()=>setLoader("false"),[amazonData,flipkartData]);
  

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<div>
              <Home setProduct={setProduct} setAmazonData={setAmazonData} setFlipkartData={setFlipkartData}/>
              <Footer />
            </div>} />
            <Route path='/search' element={<div>
              <Navbar setProduct={setProduct} setAmazonData={setAmazonData} setFlipkartData={setFlipkartData}/>
              {loader && <Loader loader={loader}/>}
              {amazonData && flipkartData && (<Result amazonData={amazonData} flipkartData={flipkartData} product={product} />)}
              <Footer />
            </div>} />
            <Route path='/about' element={<div>
              <Navbar setProduct={setProduct} setAmazonData={setAmazonData} setFlipkartData={setFlipkartData}/>
              <About />
              <Footer />
            </div>} />
            
          </Routes>
        </BrowserRouter>
        

      </div>
      
    </>

  );
}

export default App;
