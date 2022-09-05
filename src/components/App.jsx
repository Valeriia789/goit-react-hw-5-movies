import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

import Home from './Home/Home'
import Movies from './Movies/Movies'
// import NotFound from "path/to/pages/NotFound";





const App = () => {
  return (
    <div>
      <Home/>
      <Movies/>
      {/* <Routes> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}
      <ToastContainer autoClose={5000} />
    </div>
  );
};


export default App
