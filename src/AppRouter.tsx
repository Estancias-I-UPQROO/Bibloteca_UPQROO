import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts";
import { AlineamientosPage, BaseDeDatosPage, FilosofiaPage, InicioPage } from "./pages";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />} >
                    <Route index element={<InicioPage />} />
                    <Route path="/filosofia" element={<FilosofiaPage />} />
                    <Route path="/alineamientos" element={<AlineamientosPage />} />
                    <Route path="/base-de-datos" element={<BaseDeDatosPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}