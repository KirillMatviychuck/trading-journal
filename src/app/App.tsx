import { Route, Routes } from 'react-router-dom';
import Navbar from '../widgets/Navbar/ui/Navbar';
import './styles/index.css';
import { Dashboard } from '../pages/Dashboard';

function App() {

  return (
    <div className={`app dark`}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
