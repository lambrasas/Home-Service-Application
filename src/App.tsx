import Hero from "./Components/Hero";
import Services from "./Components/Services";
import TopBar from "./Components/TopBar";
import { serviceData } from "./Components/serviceData";
import CategoryPage from "./Pages/CategoryPage";
import styles from "./Styles/Services.module.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <TopBar />
      <MainContent />
    </Router>
  );
};
const MainContent: React.FC = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && (
        <>
          <Hero />
          <b className={styles.text}>Popular businesses</b>
          <Services serviceData={serviceData} />
        </>
      )}

      <Routes>
        <Route path="/search/:categoryName" element={<CategoryPage />} />
      </Routes>
    </>
  );
};
export default App;
