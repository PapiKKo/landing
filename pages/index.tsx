import '../styles/Home.module.css'
import "tailwindcss/tailwind.css";
import Footer from '../components/footer';
import Header from '../components/header';
import Vision from '../components/vision';
import Roadmap from '../components/roadmap';
import Action from '../components/action';


const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;