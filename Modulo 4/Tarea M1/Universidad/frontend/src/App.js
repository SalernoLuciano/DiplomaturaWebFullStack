import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactoPage from "./pages/contactoPage";
import HomePage from "./pages/homePage";
import NovedadesPage from "./pages/novedadesPage";
import ServiciosPage from "./pages/serviciosPage";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component = {HomePage}/>
          <Route path="/servicios" exact component = {ServiciosPage}/>
          <Route path="/novedades" exact component = {NovedadesPage}/>
          <Route path="/contacto" exact component = {ContactoPage}/>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
