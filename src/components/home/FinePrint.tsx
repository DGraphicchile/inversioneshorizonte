import { Link } from 'react-router-dom';
import { TrendingDown, ShieldOff, Clock, ArrowRight } from 'lucide-react';

const warnings = [
  {
    icon: TrendingDown,
    title: 'La rentabilidad puede variar',
    description: 'Los porcentajes que ves en cada proyecto son proyecciones basadas en un analisis serio, pero no son una promesa. El mercado inmobiliario, los costos de construccion y otros factores pueden hacer que el resultado final sea distinto al estimado. Queremos que lo sepas desde el principio.',
  },
  {
    icon: ShieldOff,
    title: 'Tu dinero esta comprometido hasta el cierre',
    description: 'Cuando inviertes, tu dinero se destina a ese proyecto y no puedes retirarlo hasta que termine. Si necesitas liquidez antes de tiempo, puedes intentar vender tu participacion a otro inversionista en nuestro Marketplace, pero depende de que alguien quiera comprarla.',
  },
  {
    icon: Clock,
    title: 'Los plazos son aproximados',
    description: 'Construir o remodelar un inmueble depende de muchas variables: permisos municipales, clima, disponibilidad de materiales y mas. Los plazos que mostramos son estimaciones realistas, pero pueden extenderse. Te mantenemos informado en todo momento si hay cambios.',
  },
];

export default function FinePrint() {
  return (
    <section id="letra-chica" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Degradado asimétrico */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-br from-orange-500/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative container-max section-padding">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-3">
            Aca no hay letra chica
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Preferimos contarte todo tal como es antes de que inviertas. Estas son las cosas que debes
            tener claras para tomar una decision informada y sin sorpresas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {warnings.map((warning, index) => (
            <div
              key={warning.title}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                <warning.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-semibold text-dark mb-2 group-hover:text-orange-600 transition-colors">{warning.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{warning.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/proyectos?status=Finalizado"
            className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors"
          >
            Conocer el Marketplace para vender participaciones
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
