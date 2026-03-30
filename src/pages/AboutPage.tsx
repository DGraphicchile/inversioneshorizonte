import { Target, Eye, Heart, Award, Leaf, Building2 } from 'lucide-react';

const team = [
  {
    name: 'Sebastián Arriagada',
    role: 'CEO & Co-Fundador',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Catalina Riquelme',
    role: 'COO & Co-Fundadora',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Matías Gutiérrez',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Francisca Morales',
    role: 'Head de Inversiones',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Diego Herrera',
    role: 'Head Legal',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Valentina Soto',
    role: 'Head de Marketing',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const values = [
  {
    icon: Target,
    title: 'Transparencia total',
    description: 'Creemos que la confianza se construye mostrando todo. Cada numero, cada documento, cada detalle de los proyectos esta disponible para ti. Si algo no queda claro, nos preguntas y te respondemos. Asi de simple.',
  },
  {
    icon: Eye,
    title: 'Innovacion con proposito',
    description: 'Usamos tecnologia para abrir puertas que antes estaban cerradas. Antes solo los grandes capitales podian invertir en inmuebles. Nosotros cambiamos eso para que cualquier persona pueda participar desde montos accesibles.',
  },
  {
    icon: Heart,
    title: 'Impacto real en las comunidades',
    description: 'No nos movemos solo por la rentabilidad. Cada proyecto que financiamos busca aportar algo positivo al barrio, la ciudad o la comunidad donde se desarrolla. Creemos que invertir bien y hacer el bien pueden ir de la mano.',
  },
];

export default function AboutPage() {
  return (
    <section className="py-12 lg:py-20 min-h-screen">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Invertir en inmuebles ya no es solo para millonarios
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Nacimos con una idea clara: que cualquier persona pueda invertir en proyectos inmobiliarios reales,
              sin importar cuanto dinero tenga en el banco. Eliminamos las barreras que siempre existieron
              y creamos una plataforma donde la informacion, la transparencia y la accesibilidad son lo primero.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipo Inversiones Horizonte"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Como empezo todo</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Todo empezo en 2019 cuando un grupo de profesionales del mundo inmobiliario y tecnologico se junto
                  con una pregunta: ¿por que solo las personas con mucho dinero pueden invertir en inmuebles?
                  Nos parecia injusto, asi que decidimos crear una plataforma que cambiara las reglas del juego.
                </p>
                <p>
                  Hoy, despues de mas de 45 proyectos financiados y miles de personas que ya invirtieron con nosotros,
                  podemos decir que lo estamos logrando. Somos Empresa B certificada porque nos importa el impacto social,
                  y estamos regulados por la CMF para que inviertas con la tranquilidad de saber que todo es legal y transparente.
                </p>
              </div>
              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Award className="w-5 h-5 text-brand-500" />
                  Regulados CMF
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Leaf className="w-5 h-5 text-success-500" />
                  Empresa B
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Building2 className="w-5 h-5 text-brand-500" />
                  CORFO
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">Lo que nos mueve cada dia</h2>
            <p className="text-gray-500 text-center mb-10">Estos no son solo palabras bonitas en una pared. Son los principios con los que tomamos cada decision.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-brand-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">Las personas detras de la plataforma</h2>
            <p className="text-gray-500 text-center mb-10">
              Somos un equipo multidisciplinario de profesionales que combinan experiencia en el mundo inmobiliario,
              financiero y tecnologico. Nos apasiona lo que hacemos y nos tomamos muy en serio la confianza que depositas en nosotros.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {team.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{member.name}</h3>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
