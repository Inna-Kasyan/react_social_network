import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import Music from './components/Music/Music';
// import News from './components/News/News';
// import Settings from './components/Settings/Settings';
// import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './Login/Login';


function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar state={props.state} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile" element={<ProfileContainer isMain={true} />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path='/users/*' element={<UsersContainer />} />
            <Route path='/login' element={<LoginPage />} />
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

