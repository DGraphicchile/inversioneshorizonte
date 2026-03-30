import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, Clock, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const legalLinks = [
  { label: 'Términos de inversión', href: '#' },
  { label: 'Términos de la plataforma', href: '#' },
  { label: 'Política de privacidad', href: '#' },
  { label: 'Términos del marketplace', href: '#' },
  { label: 'Canal de denuncias', href: '#' },
];

const faqLinks = [
  { label: '¿Cómo funciona?', href: '/como-funciona' },
  { label: 'Preguntas frecuentes', href: '/#faq' },
  { label: 'Sin letra chica', href: '/#letra-chica' },
  { label: 'Nosotros', href: '/nosotros' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 sm:mb-6">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
              <span className="text-base sm:text-lg font-bold text-white">Inversiones Horizonte</span>
            </Link>
            <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <a href="mailto:contacto@inversioneshorizonte.cl" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-400 flex-shrink-0" />
                <span className="break-all">contacto@inversioneshorizonte.cl</span>
              </a>
              <a href="tel:+56222222222" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-400 flex-shrink-0" />
                +56 2 2222 2222
              </a>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-400 flex-shrink-0" />
                Lun - Vie: 9:00 - 18:00
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Donde encontrarnos</h4>
            <div className="flex items-start gap-2 text-xs sm:text-sm">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-400 mt-0.5 flex-shrink-0" />
              <p>Av. Apoquindo 4700, Piso 12<br />Las Condes, Santiago<br />Chile</p>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 mt-4 sm:mt-6">
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">¿Necesitas ayuda?</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              {faqLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Documentos legales</h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-6 text-xs text-gray-500">
              <span>Regulado por CMF</span>
              <span>Empresa B Certificada</span>
              <span>CORFO Startup</span>
            </div>
            <p className="text-xs text-gray-500 text-center md:text-right">
              &copy; {new Date().getFullYear()} Inversiones Horizonte. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
