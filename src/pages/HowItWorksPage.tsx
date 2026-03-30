import { Link } from 'react-router-dom';
import { Search, Zap, HardHat, Banknote, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Elige el proyecto que mas te guste',
    description: 'Entra a la plataforma y revisa los proyectos disponibles con calma. Cada uno tiene su ficha completa con fotos, ubicacion, analisis financiero, documentos legales y un simulador para que veas cuanto podrias ganar segun lo que inviertas. No tienes que ser experto, toda la informacion esta explicada de forma clara.',
    detail: 'Tip: usa el simulador de inversion para probar distintos montos y comparar proyectos antes de decidir.',
  },
  {
    icon: Zap,
    number: '02',
    title: 'El proyecto se activa cuando llega a su meta',
    description: 'Cada proyecto necesita juntar un monto minimo para ponerse en marcha. Una vez que entre todos los inversionistas se alcanza esa meta, el proyecto se activa y comienza oficialmente. Te enviamos un correo con todos los detalles y el cronograma de ejecucion para que sepas que esperar.',
    detail: 'Y si la meta no se alcanza dentro del plazo? Tranquilo, se te devuelve el 100% de tu dinero sin ningun cobro.',
  },
  {
    icon: HardHat,
    number: '03',
    title: 'Mientras se ejecuta, te mantenemos al dia',
    description: 'No te dejamos en la oscuridad. Cada mes recibiras un reporte con fotos del avance, actualizacion de costos, estado del cronograma y cualquier novedad importante. Todo disponible desde tu panel de inversionista, donde puedes ver el estado de todos tus proyectos de un vistazo.',
    detail: 'Reportes mensuales con fotos reales, avances de obra, detalles financieros y novedades del proyecto.',
  },
  {
    icon: Banknote,
    number: '04',
    title: 'Se cierra el proyecto y recibes tus ganancias',
    description: 'Cuando el proyecto termina (se vende el inmueble, se completa la remodelacion, etc.), se hace la liquidacion final. Tu inversion inicial mas las ganancias generadas se depositan directamente en la cuenta bancaria que registraste. Asi de simple, sin tramites adicionales.',
    detail: 'El deposito se realiza dentro de los 10 dias habiles siguientes al cierre del proyecto.',
  },
];

export default function HowItWorksPage() {
  return (
    <section className="py-12 lg:py-20 min-h-screen">
      <div className="container-max section-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Invertir en inmuebles nunca fue tan facil
          </h1>
          <p className="text-gray-500 text-lg">
            Te explicamos paso a paso como funciona todo el proceso, desde que eliges un proyecto
            hasta que recibes tus ganancias en tu cuenta. Son solo cuatro pasos y no necesitas
            experiencia previa en inversiones ni en el mundo inmobiliario.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={step.number} className="relative flex gap-8">
                  <div className="hidden lg:flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-brand-500 text-white flex items-center justify-center text-lg font-bold z-10 shadow-lg shadow-brand-500/20">
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="flex-1 w-px bg-gradient-to-b from-brand-200 to-gray-200 mt-2" />
                    )}
                  </div>

                  <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center lg:hidden">
                        <span className="text-brand-500 font-bold">{step.number}</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-brand-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-3">{step.description}</p>
                    <p className="text-sm text-brand-500 font-medium">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center mt-16 bg-gradient-to-br from-brand-500 to-brand-600 rounded-3xl p-10 text-white">
          <h2 className="text-2xl font-bold mb-3">
            ¿Te animas a dar el primer paso?
          </h2>
          <p className="text-brand-100 mb-6">
            Revisa los proyectos que tenemos disponibles, usa el simulador para ver cuanto podrias ganar
            y cuando te sientas listo, haz tu primera inversion. Estamos aca para acompanarte.
          </p>
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Explorar proyectos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
