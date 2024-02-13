import './App.css';
import Image from './components/LikeImage';
import Post from './components/LikePost';

function App() {
  return (
    <div>
      <h1>Some Blog</h1>
      <div className='buttons'>
        <Post/>
        <Image/>
      </div>
    </div>
  );
}

export default App;