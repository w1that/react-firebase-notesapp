
import { Route } from 'react-router';
import WelcomePage from './pages/WelcomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateNotePage from './pages/CreateNotePage';
import Notes from './pages/Notes';
import MyNotes from './pages/MyNotes';
import BottomMenuMobile from './components/BottomMenuMobile';

function App() {

  
  return (
    <div className="App">
    <ToastContainer/>
      <Route exact path="/"><WelcomePage/></Route>
      <Route exact path="/notes"><Notes/></Route>
      <Route path="/createnew"><CreateNotePage/></Route>
      <Route path="/mynotes"><MyNotes/></Route>
      <Route path={["/notes", "/createnew", ["/mynotes"]]}><div className="sm:hidden"><BottomMenuMobile/></div></Route>
    </div>
  );
}

export default App;
