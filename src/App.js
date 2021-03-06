import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Profile from './Pages/Profile/Profile';
import Signup from './Pages/Signup/Signup';
import UpdateInfo from './Pages/UpdateInfo/UpdateInfo';

function App() {
  return (
    <div className='app-layout'>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/update-info" element={<PrivateRoute>
          <UpdateInfo />
        </PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute>
          <Profile />
        </PrivateRoute>} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
