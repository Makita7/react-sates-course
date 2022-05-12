import './App.css';
import ChangePassword from './components/ChangePassword';
import DeclerativeStates from './components/DeclerativeStates';
import ImperativeStates from './components/ImperativeStates';

function App() {
  return (
    <div>
      <ImperativeStates/>
      <ChangePassword/>
      <br/><br/>
      <DeclerativeStates/>
    </div>
  );
}

export default App;
