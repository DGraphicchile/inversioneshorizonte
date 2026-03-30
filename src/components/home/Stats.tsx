import AnimatedCounter from '../ui/AnimatedCounter';

const stats = [
  { label: 'Recaudados para proyectos de flipping', value: 420, prefix: '$', suffix: 'M+', decimals: 0 },
  { label: 'de rentabilidad anual promedio pagada a nuestros inversionistas', value: 19.1, prefix: '', suffix: '%', decimals: 1 },
  { label: 'de nuestros inversionistas vuelven a invertir con nosotros', value: 78, prefix: '', suffix: '%', decimals: 0 },
];

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-gray-100 relative overflow-hidden">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">
                <span className="bg-gradient-to-r from-brand-500 to-blue-600 bg-clip-text text-transparent">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-snug px-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
