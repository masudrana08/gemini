import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav/MyNav';
import Header from './components/Header/Header';
import How from './components/How/How';
import Calculate from './components/Calculate/Calculate';
import Started from './components/Started/Started';
import Earn from './components/Earn/Earn';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <MyNav />
      <Header />
      <How />
      <Calculate />
      <Started />
      <Earn />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
