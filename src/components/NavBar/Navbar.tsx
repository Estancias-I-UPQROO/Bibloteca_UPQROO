import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const clearTimeout = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const navItemClass = (path: string) =>
    location.pathname === path
      ? "text-orange-500 font-semibold border-b-2 border-orange-500"
      : "hover:text-orange-500";

  const submenuItemClass = (path: string) =>
    location.pathname === path
      ? "text-orange-500 font-semibold bg-gray-100"
      : "hover:text-orange-500 hover:bg-gray-100";

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <div className="h-full flex items-center">
      <Link
        to={to}
        className={`px-4 ${navItemClass(to)} transition-colors duration-150 h-full flex items-center`}
        onClick={() => {
          setIsMobileMenuOpen(false);
          setActiveMenu(null);
        }}
      >
        {label}
      </Link>
    </div>
  );

  const DesktopDropdown = ({
    menu,
    links,
  }: {
    menu: string;
    links: { to: string; label: string }[];
  }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
      clearTimeout();
      setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
      timeoutRef.current = window.setTimeout(() => {
        setActiveMenu(null);
      }, 200);
    };

    return (
      <div
        ref={dropdownRef}
        className="relative h-full flex items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          className={`px-4 ${navItemClass(links[0].to)} flex items-center h-full relative z-10`}
        >
          {menu.toUpperCase()} <span className="ml-1">▾</span>
        </button>

        <AnimatePresence>
          {activeMenu === menu && (
            <motion.ul
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 top-full mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {links.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block py-2 px-5 ${submenuItemClass(to)} transition-colors duration-150`}
                    onClick={() => setActiveMenu(null)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const MobileDropdown = ({
    menu,
    links,
  }: {
    menu: string;
    links: { to: string; label: string }[];
  }) => {
    const [open, setOpen] = useState(false);
    
    return (
      <div className="border-l-2 border-gray-100 pl-2">
        <button
          className="w-full text-left py-2 px-4 font-semibold text-gray-700 hover:text-orange-500 flex justify-between items-center"
          onClick={() => setOpen(!open)}
        >
          <span>{menu.toUpperCase()}</span>
          <span>{open ? "▴" : "▾"}</span>
        </button>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="pl-6 overflow-hidden"
            >
              {links.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="block py-2 text-sm text-gray-600 hover:text-orange-500 transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" ref={menuRef}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center h-full">
          <img
            src="https://upqroo.edu.mx/wp-content/uploads/2025/03/UPQROO-logo.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </Link>

        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-150"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>

        <div className="hidden md:flex items-center h-full space-x-1 text-sm font-medium">
          <NavLink to="/" label="INICIO" />
          <DesktopDropdown
            menu="acerca de nosotros"
            links={[
              { to: "/filosofia", label: "Filosofía" },
              { to: "/alineamientos", label: "Alineamientos" },
            ]}
          />
          <DesktopDropdown
            menu="servicios"
            links={[
              { to: "/prestamo-material", label: "Préstamo de material" },
              { to: "/renovacion", label: "Renovación en línea" },
              { to: "/prestamo-equipo", label: "Préstamo de equipo" },
              { to: "/formacion-usuarios", label: "Formación de usuarios" },
              { to: "/solicitud-compra", label: "Solicitud de material" },
            ]}
          />
          <DesktopDropdown
            menu="recursos electrónicos"
            links={[
              { to: "/bases-datos", label: "Bases de datos" },
              { to: "/bibliotecas-digitales", label: "Bibliotecas digitales" },
              { to: "/revistas", label: "Revistas electrónicas" },
              { to: "/ebooks", label: "E-books" },
              { to: "/diccionarios", label: "Diccionarios" },
              { to: "/normas", label: "Normas y guías" },
              { to: "/formacion-autodidacta", label: "Formación autodidacta" },
            ]}
          />
          <NavLink to="/catalogo" label="CATÁLOGO" />
          <NavLink to="/ayuda" label="AYUDA" />
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200 px-4 pt-2 pb-4 space-y-2 overflow-hidden"
          >
            <NavLink to="/" label="INICIO" />
            <MobileDropdown
              menu="acerca de nosotros"
              links={[
                { to: "/filosofia", label: "Filosofía" },
                { to: "/alineamientos", label: "Alineamientos" },
              ]}
            />
            <MobileDropdown
              menu="servicios"
              links={[
                { to: "/prestamo-material", label: "Préstamo de material" },
                { to: "/renovacion", label: "Renovación en línea" },
                { to: "/prestamo-equipo", label: "Préstamo de equipo" },
                { to: "/formacion-usuarios", label: "Formación de usuarios" },
                { to: "/solicitud-compra", label: "Solicitud de material" },
              ]}
            />
            <MobileDropdown
              menu="recursos electrónicos"
              links={[
                { to: "/bases-datos", label: "Bases de datos" },
                { to: "/bibliotecas-digitales", label: "Bibliotecas digitales" },
                { to: "/revistas", label: "Revistas electrónicas" },
                { to: "/ebooks", label: "E-books" },
                { to: "/diccionarios", label: "Diccionarios" },
                { to: "/normas", label: "Normas y guías" },
                { to: "/formacion-autodidacta", label: "Formación autodidacta" },
              ]}
            />
            <NavLink to="/catalogo" label="CATÁLOGO" />
            <NavLink to="/ayuda" label="AYUDA" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}