import './App.css';
import TaskIn from './components/TaskIn';
import Lists from './components/Lists';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Notes from './components/Notes';

function App() {
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <TaskIn />
      <div>
        <Router>
          <Lists />

          <Route path="/notes">
            <Notes />
          </Route>

        </Router>

      </div>

    </div>
  );
}

export default App;
