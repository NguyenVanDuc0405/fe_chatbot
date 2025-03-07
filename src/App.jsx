import { useEffect, useState } from "react";
import NavBar from "./components/navbar";
import HomePage from "./pages/home";
import ChatBot from "./pages/chatbot";
import FeedBack from "./pages/feedback";
import Project from "./pages/project";
import AboutRoutes from './pages/about/AboutRoutes';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="mt-20"></div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="about">
          {AboutRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            >
              {/* Kiểm tra và render các route con nếu có */}
              {route.children &&
                route.children.map((child) => (
                  <Route
                    key={child.path}
                    path={child.path}
                    element={child.element}
                  />
                ))}
            </Route>
          ))}
        </Route>
        <Route path="chat" element={<ChatBot />} />
        <Route path="project" element={<Project />} />
        <Route path="feedback" element={<FeedBack />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
