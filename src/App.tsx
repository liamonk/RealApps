import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Countdown } from "./components/Countdown";
import { QuestionGenerator } from "./components/QuestionGenerator";


function App() {
  return (
    <>
      <Header />
      <Switch>
        
        <Route path="/countdown" component={Countdown}/>
        <Route path="/question-generator" component={QuestionGenerator}/>
        <Redirect to="/countdown"/>
      </Switch>
    </>
  );
}

export default App;
