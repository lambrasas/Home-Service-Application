import TopBar from "./Components/TopBar";
import MainContent from "./Components/MainContent";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <TopBar />
      <MainContent />
    </Router>
  );
};

export default App;
