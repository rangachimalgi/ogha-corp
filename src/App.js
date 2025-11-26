import {useEffect,  Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from './components/NavScrollTop';
const HomeOne = lazy(() => import("./pages/HomeOne"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const BlogGrid = lazy(() => import("./pages/BlogGrid"));
const Contact = lazy(() => import("./pages/Contact"));


function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: 'ease',
    });
    AOS.refresh();
    
  }, [])
  return (
      <Router>
        <NavScrollTop>
          <Suspense fallback={<div />}>
                <Routes>
                  <Route path={`${process.env.PUBLIC_URL + "/"}`} element={<HomeOne/>}/>
                  <Route path={`${process.env.PUBLIC_URL + "/about"}`} element={<About/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/service"}`} element={<Service/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/blog-grid"}`} element={<BlogGrid/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/contact"}`} element={<Contact/>} />
                </Routes>
            </Suspense>
        </NavScrollTop>
      </Router>
  );
}

export default App;
