import './App.css';
import './style/style.css';
import Navbar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';

function App() {
  return (
    <>
      <div className='myBg border'>
        <Navbar />
        <Intro />
      </div>

      <div className='trending'>
        <Trending />
      </div>
    </>
  );
}

export default App;
