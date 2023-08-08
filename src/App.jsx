import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/login'
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </>
  );
}
export default App