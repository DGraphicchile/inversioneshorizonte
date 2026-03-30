import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Layers, DollarSign, Handshake, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Handshake,
    title: 'Coinvertimos junto a nuestros inversionistas',
    description: 'Nosotros también participamos de las grandes oportunidades. Aportamos un 10% del capital requerido en cada proyecto siendo así parte de las utilidades y los riesgos asociados.',
  },
  {
    icon: Shield,
    title: 'Bien raíz de respaldo',
    description: 'A diferencia de las inversiones de otros rubros, nuestros proyectos tiene un bien raíz tangible que lo respalda. Por esto los inversiones inmobiliarias son las de menor riego.',
  },
  {
    icon: DollarSign,
    title: 'Sólo ganamos si el inversionista gana',
    description: 'No cobramos comisiones fijas. Sólo ganamos si el proyecto genera rentabilidad al inversionista. Y nuestra comisión aumenta a medida que la rentabilidad del inversionista aumenta.',
  },
  {
    icon: TrendingUp,
    title: 'No dependemos de la plusvalía',
    description: 'Nuestras proyecciones no consideran el posible alza de valor de las propiedades en el tiempo, por lo que no dependemos de que el mercado suba.',
  },
];

export default function Profitability() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark text-center mb-4">
            ¿Qué hacemos?
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Un modelo simple, basado en <span className="font-semibold text-dark">ejecución</span>—<span className="font-semibold text-dark">de</span>—<span className="font-semibold text-dark">disciplinada</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-brand-200 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300">
              <Layers className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-brand-600 transition-colors">Compra con descuento</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Adquirimos propiedades bajo valor de mercado mediante remates y oportunidades.
            </p>
          </div>
          <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-brand-200 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300">
              <Shield className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-brand-600 transition-colors">Gestión activa</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ejecutamos una gestión eficiente del activo, compra, optimización y venta.
            </p>
          </div>
          <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-brand-200 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300">
              <DollarSign className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-brand-600 transition-colors">Venta en corto plazo</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Buscamos una venta eficiente para rotación rápida.
            </p>
          </div>
          <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-brand-200 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300">
              <TrendingUp className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-brand-600 transition-colors">Rentabilidad real</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Generamos valor real sin depender de la especulación del mercado.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
              ¿Por qué invertir con nosotros?
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              No somos un banco ni una corredora tradicional. Somos una plataforma que nació para que personas comunes puedan acceder a inversiones inmobiliarias que antes estaban reservadas solo para grandes capitales. Y lo hacemos con total transparencia.
            </p>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1 group-hover:text-brand-600 transition-colors">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-green-500/20 to-brand-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 group-hover:border-green-300 transition-all duration-300">
                <p className="text-sm font-medium text-gray-600 mb-2">Rentabilidad anual promedio de nuestros proyectos finalizados</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">13,5</span>
                  <span className="text-2xl font-bold text-gray-600">%</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  Este número no es una promesa, es lo que realmente han ganado nuestros inversionistas en promedio en los proyectos que ya cerramos y pagamos. Resultados reales, no proyecciones.
                </p>
                <Link
                  to="/proyectos?status=Finalizado"
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors"
                >
                  Revisar proyectos ya pagados
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipo de trabajo"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-semibold">Equipo profesional</p>
                <p className="text-xs text-gray-200">Más de 15 años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
