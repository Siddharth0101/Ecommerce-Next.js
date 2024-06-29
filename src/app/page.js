import CountDown from "./components/header/CountDown";
import { Home1 } from "./components/home/Home1";
import Home2 from "./components/home/Home2";
import Home3 from "./components/home/Home3";
import Home4 from "./components/home/Home4";
import Home5 from "./components/home/Home5";

export default function Home() {
  return (
    <div>
      <CountDown />
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
    </div>
  );
}
