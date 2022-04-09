import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Landing from './Pages/Landing';
function App() {
  return (
    <div className="App">
      <Header/>
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
