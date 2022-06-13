import '../styles/Home.module.css'
import "tailwindcss/tailwind.css";
import Vision from '../components/vision';
import Roadmap from '../components/roadmap';
import Action from '../components/action';


const Home = () => {
  return (
    <div>
    <main>
      <Vision />
      <Roadmap />
      <Action />
    </main>
    </div>
  );
};

export default Home;