import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Countdown } from "./components/countdown/Countdown";
import { QuestionGenerator } from "./components/question-generator/QuestionGenerator";
import { Home } from "./components/Home";
import { RandomGroups } from "./components/random-groups/RandomGroups";
import { Ncea } from "./components/Ncea/Ncea";
import {TriangleSolver} from "./components/triangle-solver/TriangleSolver";
import { WorksheetGenerator } from "./components/worksheet-generator/worksheet-generator";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/random-groups" component={RandomGroups} />
        <Route path="/countdown" component={Countdown} />
        <Route path="/question-generator" component={QuestionGenerator} />
        <Route path="/worksheet-generator" component = {WorksheetGenerator} />
        <Route path="/ncea" component={Ncea} />
        <Route path="/triangle-solver" component ={TriangleSolver} />
        <Redirect to="home" />
      </Switch>
    </>
  );
}

export default App;
