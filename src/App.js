import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/exploreinsidepage" element={<Exploreinsidepage />} />
          <Route path="/collectionsstate" element={<Collectionsstate />} />
          <Route
            path="/resourceshelpcenter"
            element={<ResourcesHelpCenter />}
          />
          <Route
            path="/resourcesnewsletter"
            element={<ResourcesNewsletter />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mycollections" element={<MyCollections />} />
          <Route path="/profilesetting" element={<ProfileSetting />} />
          <Route path="/notifications" element={<Notificationspage />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/featureditems" element={<Featureditems />} />
          <Route path="/accountsupport" element={<AccountSupport />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/collectioninsidepage" element={<Collectioninsidepage/>}/>
        </Routes>
      </Router>
      {/*   <Navbar />
      <Home/>
      <Footer/> */}
    </div>
  );
}

export default App;
