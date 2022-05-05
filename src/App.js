import BodyHeader  from './components/body/bodyHeader/index';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body from './components/body/MyGrid';

function App() {
  return (
    <div className="App">
      <Header /> 
      {/* <BodyHeader /> */}
      <Body/>
      <Footer />
    </div>
  );
}

export default App;