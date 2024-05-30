import { Route, Routes } from "react-router-dom";
import './styles/App.css';
import Template from './pages/_TemplatePage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ChampionsPage from './pages/ChampionsPage';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element ={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="champions" element={<ChampionsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
