import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeLogin from "./components/HomeLogin";
import HomeCadastro from "./components/HomeCadastro";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="cadastro" element={<HomeCadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
