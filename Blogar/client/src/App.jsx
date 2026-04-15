import Home from "./pages/Home";
import "./App.css"
import AboutUs from "./pages/AboutUs";
import { Route , Routes} from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Errorpage from "./pages/ErrorPage";
import PostList from "./pages/PostList";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LifeStyle from "./pages/LifeStyle";
import MainPost from "./components/MainPost";
import FeaturedVideo from "./components/FeaturedVideo";
import FeaturedPosts from "./components/FeaturedPosts";

function App() {
  return (
    <>
    {/* <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<AboutUs/>}></Route>
      <Route path="/Contact" element={<ContactUs/>}></Route>
      <Route path="/Errorpage" element={<Errorpage/>}></Route>
      <Route path="/PostList" element={<PostList/>}></Route>
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}></Route>
      <Route path="/LifeStyle" element={<LifeStyle/>}></Route>
    </Routes> */}
    <Home/>
    {/* <AboutUs/> complete */}
    {/* <ContactUs/> complete */}
    {/* <Errorpage/> complete  */}
    {/* <PostList/> */}
    {/* <PrivacyPolicy/> complete */}
    {/* <LifeStyle/> */}
    {/* <FeaturedVideo/> */}
    {/* <div className="max-w-7xl mx-auto">
        <FeaturedPosts />
      </div> */}
    </>
  )
}

export default App;