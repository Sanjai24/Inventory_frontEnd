import { BrowserRouter } from 'react-router-dom';
import Homepage from './components/Home';
import './components/component.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Homepage />
      </BrowserRouter>
    </div>
  );
}

export default App;
