import "./App.css"
import Home from './pages/Home';
import Login from  './pages/Login';
import Signup from './pages/Signup';
import Chessboard from './components/Chessboard/Chessboard';
import Dashboard from './pages/Dashboard';

//styledcomponents
import {StyledContainer} from './components/Styles';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>

      <StyledContainer>
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="signup/*" element={<Signup />} />
          <Route path="login/*" element={<Login />} />
          
        </Routes>
      </StyledContainer>
    </Router>
  );
}


export default App;