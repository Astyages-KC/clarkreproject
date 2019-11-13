import React, { useContext } from "react";
import Auth from "./components/Auth.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import AgentPage from "./components/AgentPage.js";
import AboutUs from "./components/AboutUs.js";
import ForRent from "./components/ForRent.js";
import ForSale from "./components/ForSale.js";
import PropertyForm from "./components/PropertyForm.js";
import EditForm from "./components/EditForm.js";
import ProtectedRoute from "./shared/ProtectedRoute.js";
import { Route, Switch, Redirect } from "react-router-dom";
import { UserContext } from "./context/UserProvider.js";
import './styles/agentpage.css';
import './styles/authform.css';
import './styles/home.css';
import './styles/navbar.css';
import './styles/property.css';
import './styles/aboutUs.css';
import './styles/style.css';

function App() {
  const { token, logout } = useContext(UserContext);
  return (
    <div>
      <Navbar token={token} logout={logout}/>
      <Switch>
      <Route exact path="/" render={rProps => <Home/>}/>
      <Route path="/forsale" render={rProps => <ForSale/>}/>
      <Route path="/forrent" render={rProps => <ForRent/>}/>
      <Route path="/aboutus" render={rProps => <AboutUs/>}/>

      <Route path='/auth' render={rProps => token ? <Redirect to="/agentpage/"/> : <Auth {...rProps} />} />

      <Route path='/propertyform' render={rProps => !token ? <Redirect to="/auth" /> : <PropertyForm />} />

      <Route path='/editform/:_id' render={rProps => !token ? <Redirect to="/auth" /> : <EditForm />} />

        <ProtectedRoute
          path="/agentpage"
          component={AgentPage}
          redirectTo="/"
        /> 

        {/* <ProtectedRoute
        path="/propertyform"
        component={PropertyForm}
        redirectTo="/"
        /> */}
 
        {/* <ProtectedRoute 
        path="/aboutus" 
        component={AboutUs} 
        redirectTo="/" 
        />  */}
      </Switch>
    </div>
  );
}

export default App;
