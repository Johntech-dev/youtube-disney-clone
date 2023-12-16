import './App.css'
import Header from './Component/Header';
import ProductionHouse from './Component/ProductionHouse';
import Slider from './Component/Slider';
import GenreMovieList from './Component/GenreMovieList';

function App() {

  // const containerStyle = {
  //   backgroundImage: "url('home-background.png')",
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   height: '100vh',
  // };
  return (
    <div>
      <Header />

      <Slider />

      <ProductionHouse />

      <GenreMovieList/>
     </div>
  );
}

export default App;
