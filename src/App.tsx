import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Countdown } from "./components/countdown/Countdown";
import { QuestionGenerator } from "./components/question-generator/QuestionGenerator";
import { Home } from "./components/Home";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/countdown" component={Countdown}/>
        <Route path="/question-generator" component={QuestionGenerator}/>
        <Redirect to="countdown"/>
      </Switch>
    </>
  );
}

export default App;
