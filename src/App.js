import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";

function App() {
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  return (
    <>
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} />
    </>
  );
}

export default App;
