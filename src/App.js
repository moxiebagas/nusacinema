import './App.css';
import './style/style.css';
import Navbar from './components/NavigationBar';
import Intro from './components/Intro';

function App() {
  return (
    <>
      <div className='myBg border'>
        <Navbar />
        <Intro />
      </div>
    </>
  );
}

export default App;
