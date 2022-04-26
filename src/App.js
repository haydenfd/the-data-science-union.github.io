import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Landing from './Pages/Landing';
import Projects from './Pages/Projects';
import Join from './Pages/Join';
import Clients from './Pages/Clients';
import Team from './Pages/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Projects />
      <Join />
      <Clients />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
