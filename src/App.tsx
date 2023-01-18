import "./App.css";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <main className="Container">
        <div className="Container-Left">
          <h1>Simule sua Antecipação</h1>
          <Form></Form>
        </div>
        <div className="Container-Right">
          <h2>VOCÊ RECEBERÁ</h2>
          <div>
            <p>Amanhã: R$</p>
            <p>Em 15 dias: R$</p>
            <p>Em 30 dias: R$</p>
            <p>Em 90 dias: R$</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
