import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import { R1 } from './pages/R1';
import { R2 } from './pages/R2';
function App() {
  return (
    <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/r1">Go to R1</Link></li>
                        <li><Link to="/r2">Go to R2</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/r1" element={<R1 />} />
                    <Route path="/r2" element={<R2 />} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;
