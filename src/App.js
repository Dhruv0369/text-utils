
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <TextForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
