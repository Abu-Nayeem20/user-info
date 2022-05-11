import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Signin from './Pages/Signin/Signin';
import UpdateInfo from './Pages/UpdateInfo/UpdateInfo';

function App() {
  return (
    <div className='app-layout'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/update-info" element={<UpdateInfo />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
