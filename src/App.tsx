import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLogin from "./components/HomeLogin";
import HomeCadastro from "./components/HomeCadastro";
import EsqueciSenha from "./components/EsqueciSenha";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="cadastro" element={<HomeCadastro />} />
        <Route path="esqueci-senha" element={<EsqueciSenha />} />
      </Routes>
    </BrowserRouter>
  );
}
