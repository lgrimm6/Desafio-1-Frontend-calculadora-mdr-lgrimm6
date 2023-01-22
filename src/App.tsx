import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import { Toaster } from "react-hot-toast";

function App() {
  const [resultDays, setResultDays] = useState({
    1: "0,00",
    15: "0,00",
    30: "0,00",
    90: "0,00",
  } as any);
  return (
    <div className="App">
      <Toaster />
      <main className="Container">
        <div className="Container-Left">
          <h1>Simule sua Antecipação</h1>

          <Form setResultDays={setResultDays}></Form>
        </div>
        <div className="Container-Right">
          <h2>VOCÊ RECEBERÁ</h2>
          <div>
            {Object.keys(resultDays).map((day: string) => (
              <p key={uuidv4()}>
                {day === "1"
                  ? `Amanhã: ${resultDays[day]}`
                  : `Em ${day} dias: R$ ${resultDays[day]}`}
              </p>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
