import { useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState<string | null>(null);

  const menuAnimation = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2 },
  };

  const navItemClass = (path: string) =>
    location.pathname === path
      ? "text-orange-500 font-bold border-b-2 border-orange-500"
      : "hover:text-orange-500";

  return (
    <nav className="flex items-center justify-between bg-white shadow px-8 py-4 z-50 relative">
      <div className="flex items-center space-x-8">
        <img src="/logo-upqroo.png" alt="Logo" className="h-12" />
        <ul className="flex space-x-6 font-semibold text-sm relative z-50">
          <li>
            <a className={navItemClass("/")} href="/">INICIO</a>
          </li>

          {/* ACERCA DE NOSOTROS */}
          <li
            onMouseEnter={() => setHovered("acerca")}
            onMouseLeave={() => setHovered(null)}
            className="relative cursor-pointer"
          >
            <span className={navItemClass("/acerca")}>
              ACERCA DE NOSOTROS ▾
            </span>
            <div className="absolute left-0 top-full w-64 h-3 z-30" />
            <AnimatePresence>
              {hovered === "acerca" && (
                <motion.ul
                  {...menuAnimation}
                  className="absolute top-full left-0 bg-white border mt-2 w-64 shadow-md z-40 text-black text-sm rounded"
                >
                  {/* submenu items... */}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* RECURSOS ELECTRÓNICOS */}
          <li
            onMouseEnter={() => setHovered("recursos")}
            onMouseLeave={() => setHovered(null)}
            className="relative cursor-pointer"
          >
            <span className={navItemClass("/recursos")}>
              RECURSOS ELECTRÓNICOS ▾
            </span>
            <div className="absolute left-0 top-full w-64 h-3 z-30" />
            <AnimatePresence>
              {hovered === "recursos" && (
                <motion.ul
                  {...menuAnimation}
                  className="absolute top-full left-0 bg-white border mt-2 w-64 shadow-md z-40 text-black text-sm rounded"
                >
                  {/* submenu items... */}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li>
            <a className={navItemClass("/catalogo")} href="/catalogo">CATÁLOGO</a>
          </li>
          <li>
            <a className={navItemClass("/renovacion")} href="/renovacion">RENOVACIÓN</a>
          </li>
          <li>
            <a className={navItemClass("/ayuda")} href="/ayuda">+ AYUDA</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
