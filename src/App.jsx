import "./App.css";
import events from "./data/upcoming-events.json";
import { PageBoard } from "./components/PageBoard";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>24th Core Worlds Coalition Conference</h1>
      <PageBoard events={events} />
    </>
  );
}

export default App;
