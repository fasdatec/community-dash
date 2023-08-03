import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Sign from'.//Pages/Sign/Sign'
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/sign" element={<Sign />} />
      </Routes>
    </>
  );
}
export default App