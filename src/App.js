import Footer from "./Footer";
import Form from "./Form";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container m-2">
        <div className="card card-width">
          <div className="card-body pb-0">
            <Form />
            <Forecast />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
