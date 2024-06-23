import logo from './logo.svg';
import './App.css';
import SpeakerProfile from './SpeakerProfile';

function App() {
  const name = 'John Wilson'
  return (
    <div style={{ backgroundColor: 'gray', margin: 20, color: 'white' }}>
        <SpeakerProfile />
    </div>
  );
}

export default App;
