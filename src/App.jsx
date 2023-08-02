import { Routes, Route } from 'react-router-dom'
import Login from './Components/Pages/Login/Login'
import Sign from'./Components/Pages/Sign/Sign'
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