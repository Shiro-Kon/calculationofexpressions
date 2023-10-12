import Form1 from "../../Components/Form1/Form1";
import Form2 from "../../Components/Form2/Form2";
import Header from "../Header/Header";
import "./App.scss";
function App() {
  return (
    <div  className="app">
      <Header />
      <div className="center">
        <Form1 />
        <Form2 />
      </div>
      <a className="link-top" href="#top"><div className="up" >↑</div></a>
    </div>
  );
}

export default App;
