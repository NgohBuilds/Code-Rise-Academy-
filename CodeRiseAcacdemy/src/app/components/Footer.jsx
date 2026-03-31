import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/codeRiseAcademyLogo.jpeg"
export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
            <div >
              <img src={logo} width={40} height={40}  className="object-cover  rounded-full" alt="codeRiseLogo" />
            </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">CodeRise</span>
                <span className="text-xs text-blue-400">Academy</span>
              </div>
            </div>
            <p className="text-sm mb-6">
              Construire de vraies compétences pour l'avenir. Apprentissage par projet avec 40% de théorie et 60% de pratique.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Accueil</Link></li>
              <li><Link to="/programs" className="hover:text-blue-400 transition-colors">Programmes</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">À Propos</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos Programmes</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Développement Web</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Programmation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Compétences Numériques</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Gestion de Projet</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Développement Personnel</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contactez-Nous</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Cameroun, Afrique Centrale</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span>+237 687 56 79 81</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span>coderiseacademy04@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2026 CodeRise Academy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
