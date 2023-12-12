import './App.css'
import Header from './Component/Header';

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
     </div>
  );
}

export default App;
