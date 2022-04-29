import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import Landing_86 from "./pages/Landing_86";
import styled from 'styled-components';

import { Landing_86, Dashboard_86, Register_86, Error_86 } from './pages';

function App_86() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard_86 />} />
        <Route path='/landing' element={<Landing_86 />} />
        <Route path='/register' element={<Register_86 />} />
        <Route path='*' element={<Error_86 />} />
      </Routes>
      {/* <Landing_86/> */}
    </BrowserRouter>
  );
}

export default App_86;
