import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navi from './navigation/Navi';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navi />
      </BrowserRouter>
    </>
  );
}

export default App;