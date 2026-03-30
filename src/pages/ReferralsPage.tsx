import { Link } from 'react-router-dom';
import { UserPlus, Share2, Gift, ArrowRight, Copy } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Crea tu cuenta gratis',
    description: 'Registrarte en Inversiones Horizonte no tiene costo y toma menos de 2 minutos. Una vez dentro, en tu panel de inversionista vas a encontrar un enlace de referido unico que es solo tuyo.',
  },
  {
    icon: Share2,
    title: 'Compartelo con quien quieras',
    description: 'Envia tu enlace a amigos, familiares, companeros de trabajo o a quien creas que le podria interesar invertir en proyectos inmobiliarios. Puedes compartirlo por WhatsApp, redes sociales, email o como prefieras.',
  },
  {
    icon: Gift,
    title: 'Gana el 1% de cada inversion que hagan',
    description: 'Cada vez que alguien se registre con tu enlace e invierta en un proyecto, tu recibes automaticamente el 1% del monto invertido como bonificacion. Y lo mejor: esto aplica para todas sus inversiones, no solo la primera.',
  },
];

export default function ReferralsPage() {
  return (
    <section className="py-12 lg:py-20 min-h-screen">
      <div className="container-max section-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success-50 text-success-700 text-sm font-medium mb-6">
            <Gift className="w-4 h-4" />
            Programa de referidos
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Invita a tus cercanos y gana dinero por cada inversion que hagan
          </h1>
          <p className="text-gray-500 text-lg">
            El programa de referidos es nuestra forma de agradecerte por recomendar Inversiones Horizonte.
            Por cada persona que inviertas a traves de tu enlace, tu recibes el 1% del monto como bonificacion.
            Sin limite de personas referidas, sin tope de ganancias y sin fecha de expiracion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-500 text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-5">
                <step.icon className="w-7 h-7 text-brand-500" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8 text-center mb-16">
          <h3 className="font-bold text-gray-900 text-lg mb-2">Tu enlace personal de referido</h3>
          <p className="text-sm text-gray-500 mb-5">
            Inicia sesion para ver tu enlace unico. Copialo y compartelo con quien quieras.
          </p>
          <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 p-3">
            <span className="flex-1 text-sm text-gray-400 text-left truncate">
              https://inversioneshorizonte.cl/referido/tu-codigo-unico
            </span>
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg text-sm font-medium hover:bg-brand-600 transition-colors">
              <Copy className="w-4 h-4" />
              Copiar
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <h3 className="font-bold text-gray-900 text-xl mb-4">Veamoslo con un ejemplo concreto</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-500 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                <p>Le mandas tu enlace a un amigo y el decide invertir $1.000.000 CLP en un proyecto</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-500 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                <p>Automaticamente se te acreditan $10.000 CLP (el 1%) como bonificacion en tu cuenta</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-500 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                <p>Esa plata se va acumulando y tu decides si la retiras a tu banco o la reinviertes en otro proyecto</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-8 text-white">
            <h3 className="font-bold text-xl mb-4">Lo mejor: no tiene limites</h3>
            <ul className="space-y-3 text-sm text-brand-100">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-200" />
                Puedes referir a todas las personas que quieras
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-200" />
                No hay tope en las ganancias que puedes acumular
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-200" />
                Ganas por cada inversion de tu referido, no solo la primera
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-200" />
                Funciona con todos los proyectos de la plataforma
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-200" />
                Tu decides si retiras la bonificacion o la reinviertes
              </li>
            </ul>
            <Link
              to="/entrar"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-brand-600 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Crear cuenta
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
