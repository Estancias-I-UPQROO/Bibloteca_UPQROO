import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hoverTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const menuAnimation = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.15 }
  };

  const navItemClass = (path: string) =>
    location.pathname === path
      ? "text-orange-500 font-bold border-b-2 border-orange-500"
      : "hover:text-orange-500";

  const submenuItemClass = (path: string) =>
    location.pathname === path
      ? "text-orange-500 font-semibold bg-gray-50"
      : "hover:text-orange-500 hover:bg-gray-100";

  const handleMenuEnter = (menu: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    hoverTimeoutRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const handleSubmenuEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link to={to} className={navItemClass(to)}>
      {label}
    </Link>
  );

  const DropdownMenu = ({ menu, links }: { menu: string; links: { to: string; label: string }[] }) => (
    <li onMouseEnter={() => handleMenuEnter(menu)} className="relative">
      <span className={navItemClass(links[0].to)}>{menu.toUpperCase()} ▾</span>
      <AnimatePresence>
        {activeMenu === menu && (
          <motion.ul
            {...menuAnimation}
            className="absolute top-full left-0 bg-white border mt-2 w-64 shadow-md z-40"
            onMouseEnter={handleSubmenuEnter}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {links.map(({ to, label }) => (
              <li key={to} className="px-4 py-2">
                <Link to={to} className={`block w-full ${submenuItemClass(to)}`}>{label}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );

  const navLinks = (
    <ul className="flex flex-col md:flex-row md:space-x-6 font-semibold text-sm" onMouseLeave={handleMenuLeave}>
      <li><NavLink to="/" label="INICIO" /></li>
      <DropdownMenu
        menu="acerca de nosotros"
        links={[
          { to: "/filosofia", label: "Filosofía" },
          { to: "/alineamientos", label: "Alineamientos" },
          { to: "/historia", label: "Historia" },
          { to: "/directorio", label: "Directorio" }
        ]}
      />
      <DropdownMenu
        menu="servicios"
        links={[
          { to: "/prestamo-material", label: "Préstamo de material bibliográfico" },
          { to: "/renovacion", label: "Renovación en línea" },
          { to: "/prestamo-equipo", label: "Préstamo de equipo de cómputo" },
          { to: "/formacion-usuarios", label: "Formación de usuarios" },
          { to: "/solicitud-compra", label: "Solicitud de material para compra" }
        ]}
      />
      <DropdownMenu
        menu="recursos electrónicos"
        links={[
          { to: "/base-de-datos", label: "Base de datos" },
          { to: "/bibliotecas-digitales", label: "Bibliotecas digitales" },
          { to: "/revistas-electronicas", label: "Revistas electrónicas" },
          { to: "/ebooks", label: "E-books" },
          { to: "/diccionarios", label: "Diccionarios" },
          { to: "/normas", label: "Normas y guías" },
          { to: "/formacion-autodidacta", label: "Formación autodidacta" }
        ]}
      />
      <li><NavLink to="/catalogo" label="CATÁLOGO" /></li>
      <DropdownMenu
        menu="ayuda"
        links={[
          { to: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
          { to: "/tutoriales", label: "Tutoriales" },
          { to: "/contacto", label: "Contacto" }
        ]}
      />
    </ul>
  );

  return (
    <nav className="bg-white shadow px-4 py-4 z-50 sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <img
            src="https://upqroo.edu.mx/wp-content/uploads/2025/03/UPQROO-logo.png"
            alt="Logo UPQROO"
            className="h-12"
          />
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {navLinks}
        </div>
      )}
    </nav>
  );
}