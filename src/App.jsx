import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Forget from './Pages/Forget/Forget'
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/registro" element={<Register />}/>
        <Route exact path="/recuperar" element={<Forget />} />
      </Routes>
    </>
  );
}
export default App