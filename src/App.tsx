import Login from './pages/login';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
// import {languages} from './data'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
