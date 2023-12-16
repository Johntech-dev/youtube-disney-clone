import './App.css'
import Header from './Component/Header';
import ProductionHouse from './Component/ProductionHouse';
import Slider from './Component/Slider';

function App() {
  const containerStyle = {
    backgroundImage: "url('home-background.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };
  return (
    <div style={containerStyle}>
      <Header />
      <Slider />
      <ProductionHouse />
     </div>
  );
}

export default App;
