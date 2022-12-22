import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import Music from './components/Music/Music';
// import News from './components/News/News';
// import Settings from './components/Settings/Settings';
// import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path='/profile/*' element={<Profile />} />
            <Route path='/users/*' element={<UsersContainer />} />
            {/* <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} /> */}
          </Routes>


          {/* <Profile/> */}
        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;

