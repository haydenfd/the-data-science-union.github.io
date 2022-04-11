import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Landing from './Pages/Landing';
import Projects from './Pages/Projects';
import Join from './Pages/Join';
import Clients from './Pages/Clients';
function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Join />
      <Projects />
      <Clients />
      <Footer />  
    </div>
  );
}

export default App;
