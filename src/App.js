
import { Route } from 'react-router';
import MyNotes from './pages/MyNotes';
import WelcomePage from './pages/WelcomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateNotePage from './pages/CreateNotePage';

function App() {

  
  return (
    <div className="App">
    <ToastContainer/>
      <Route exact path="/"><WelcomePage/></Route>
      <Route exact path="/mynotes"><MyNotes/></Route>
      <Route path="/createnew"><CreateNotePage/></Route>
    </div>
  );
}

export default App;
