import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SingUp';
import Welcome from '../Pages/Welcome/Welcome';
import Documentation from '../Pages/Documentation/Documentation';

import Admin from '../Admin/Admin';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
