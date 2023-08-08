import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Sign from'.//Pages/Sign/Sign'
import Recover from './Pages/Recover/Recover';
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/sign" element={<Sign />} />
        <Route exact path='/recover' element={<Recover />} />
      </Routes>
    </>
  );
}
export default App