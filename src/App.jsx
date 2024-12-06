import "./App.css";
import Scene from "./components/Scene";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="glitterbg">
        <div id="scene-container" className="bg">
          <Scene />
        </div>
        <div id="form-home-container">
          <Form />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
