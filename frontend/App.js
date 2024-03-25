import logo from './logo.svg';
import './App.css';

// componant
import Navbar from './componant/Navbar';
import Post from './componant/Post';
import ProfieNav from './componant/ProfieNav';
import Login from './componant/login';
import SignUp from './componant/SignUp';
import Profile from './componant/Profile';
function App() {
  return (
  <div className='app_page'>
     <Navbar />
    {/* <div className='pageContent'>
     <Post />
     <Post />
     <Post />
     <Post />
     <Post />
     </div>
     <ProfieNav /> */}
     <Profile />
  {/* <Login />
  <SignUp /> */}
  </div>
  );
}

export default App;
