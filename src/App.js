import NavBar from "./components/NavBar";
import Home from './components/Home';
import PlayEasy from './components/PlayEasy';
import PlayMedium from './components/PlayMedium';
import PlayHard from './components/PlayHard';
import Help from './components/Help';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";




function App() {

  return (
    <div className="App">
                
                <Router>
                  <NavBar />
                <Routes>
                
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path={"/home"} element={<Home />}/>
                    <Route path={"/play/easy"} element={<PlayEasy />}/>
                    <Route path={"/play/medium"} element={<PlayMedium />}/>
                    <Route path={"/play/hard"} element={<PlayHard />}/>
                    <Route path={"/help"} element={<Help />}/>
                </Routes>
                </Router>
    </div>
  );
}

export default App