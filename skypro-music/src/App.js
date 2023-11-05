import { NavMenu } from "./components/NavMenu";
import { Sidebar } from "./components/Sidebar";
import { AudioPlayer } from "./components/AudioPlayer";
import { Tracklist } from "./components/Tracklist";

function App() {
  return (
    <div className="container">
      <main className="main">
        <NavMenu />
        <Tracklist />
        <Sidebar />
      </main>
      <AudioPlayer />
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
