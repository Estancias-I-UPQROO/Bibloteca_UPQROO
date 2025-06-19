import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts";
import { AlineamientosPage, BaseDeDatosPage, BibliotecasDigitalesPage, DiccionariosPage, EbooksPage, FilosofiaPage, InicioPage, NormasPage, RevistasElectronicasPage } from "./pages";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />} >
                    <Route index element={<InicioPage />} />
                    <Route path="/filosofia" element={<FilosofiaPage />} />
                    <Route path="/alineamientos" element={<AlineamientosPage />} />
                    <Route path="/base-de-datos" element={<BaseDeDatosPage />} />
                    <Route path="/bibliotecas-digitales" element={<BibliotecasDigitalesPage />} />
                    <Route path="/diccionarios" element={<DiccionariosPage />} />
                    <Route path="/ebooks" element={<EbooksPage />} />
                    <Route path="/normas" element={<NormasPage />} />
                    <Route path="/revistas-electronicas" element={<RevistasElectronicasPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}