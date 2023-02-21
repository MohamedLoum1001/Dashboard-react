
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import Sidebar from './Components/Sidebar/Sidebar';
import MainDash from './Components/Sidebar/MainDash/MainDash';
import RightSide from './Components/RightSide/RightSide';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
