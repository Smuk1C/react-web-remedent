import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route,Routes} from "react-router-dom";
import FormRegistration from "./components/FormRegistration/FormRegistration";
import FormEntry from "./components/FormEntry/FormEntry";

function App() {

  const {onToggleButton,tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  })

  return (
      <div className="App">
        <FormRegistration />

      </div>
  );
}

export default App;
