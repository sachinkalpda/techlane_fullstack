
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Models from './components/Models';
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path='/' element={<Layout />}>
                  <Route index element={<Dashboard />} />
                  <Route path='models' element={<Models />} />
              </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
