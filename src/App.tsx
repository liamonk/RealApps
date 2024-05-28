import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Countdown } from "./components/Countdown";
import { PiAndSeek } from "./components/PiAndSeek";


function App() {
  return (
    <>
      <Header />
      <Switch>
        
        <Route path="/countdown" component={Countdown}/>
        <Route path="/piandseek" component={PiAndSeek}/>
        <Redirect to="/countdown"/>
      </Switch>
    </>
  );
}

export default App;
