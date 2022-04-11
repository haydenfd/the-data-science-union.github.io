import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Landing from './Pages/Landing';
import Projects from './Pages/Projects';
import Join from './Pages/Join';
import Clients from './Pages/Clients';
import Team from './Pages/Team';
import Accordion from './Components/Accordion';
function App() {
  return (
    <div className="App">
      < Accordion title="What is your return policy?" content="Lorem Ipsum dolor sit amet." />
      < Accordion title="What is your return policy?" content="Lorem Ipsum dolor sit amet." />
      < Accordion title="What is your return policy?" content="Lorem Ipsum dolor sit amet." />
      < Accordion title="What is your return policy?" content="Lorem Ipsum dolor sit amet." />
    </div>
  );
}

export default App;
