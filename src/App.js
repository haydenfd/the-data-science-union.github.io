import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Landing from './Pages/Landing';
import Projects from './Pages/Projects';
function App() {
  return (
    <div className="App">
      <Header/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
