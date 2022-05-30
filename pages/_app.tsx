import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import Footer from '../components/footer';
import Header from '../components/header';
import Vision from '../components/vision';
import Roadmap from '../components/roadmap';
import Action from '../components/action';


const App = () => (
  <>
  <header>
    <Header />
  </header>
  <main>
    <Vision />
    <Roadmap />
    <Action />
  </main>
  <footer>
    <Footer />
  </footer>
  </>
);

export default App;