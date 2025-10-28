import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "../layout/public/PublicLayout";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />} />
        
      </Routes>
    </BrowserRouter>
  );
};


