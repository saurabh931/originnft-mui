import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import Main from "./Components/Pages/Main";
import Explore from "./Components/Explore";
import Exploreinsidepage from "./Components/Exploreinsidepage";
import Collectionsstate from "./Components/Collectionsstate";
import ResourcesHelpCenter from "./Components/ResourcesHelpCenter";
import ResourcesNewsletter from "./Components/ResourcesNewsletter";
import Profile from "./Components/Profile/Profile";
import MyCollections from "./Components/Mycollections/MyCollections";
import ProfileSetting from "./Components/Profilesettingpage/ProfileSetting";
import Notificationspage from "./Components/Profilesettingpage/Notificationspage";
import Offers from "./Components/Profilesettingpage/Offers";
import Featureditems from "./Components/Profilesettingpage/Featureditems";
import AccountSupport from "./Components/Profilesettingpage/AccountSupport";
import Earnings from "./Components/Profilesettingpage/Earnings";
import Collectioninsidepage from "./Components/Explore/Collectioninsidepage";
import Navbarnft from "./Components/Navbars/Navbarnft";

function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };




  return (
    <div className="App">
      <Router>
      <Navbarnft />
        <Routes>

          <Route exact path="/" element={<Main />} />
          <Route path="/explore" element={<Explore mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/exploreinsidepage" element={<Exploreinsidepage mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/collectionsstate" element={<Collectionsstate mode={mode} toggleMode={toggleMode}/>} />
          <Route
            path="/resourceshelpcenter"
            element={<ResourcesHelpCenter mode={mode} toggleMode={toggleMode}/>}
          />
          <Route
            path="/resourcesnewsletter"
            element={<ResourcesNewsletter mode={mode} toggleMode={toggleMode}/>}
          />
          <Route path="/profile" element={<Profile mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/mycollections" element={<MyCollections mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/profilesetting" element={<ProfileSetting mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/notifications" element={<Notificationspage mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/featureditems" element={<Featureditems mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/accountsupport" element={<AccountSupport mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/earnings" element={<Earnings mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/collectioninsidepage" element={<Collectioninsidepage mode={mode} toggleMode={toggleMode}/>}/>
        </Routes>
      </Router>
      {/*   <Navbar />
      <Home/>
      <Footer/> */}
    </div>
  );
}

export default App;
