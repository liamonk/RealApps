import {Game} from "./countdown/Game";
import {CountdownHeader} from "./countdown/CountdownHeader";
import {Footer} from "./countdown/Footer";

export const Countdown =()=> {
  return (
    <>
      <CountdownHeader />
      <Game />
      <Footer />
    </>
  );
}


