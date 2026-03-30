import { Link } from 'react-router-dom';
import { MapPin, TrendingUp, Clock, Filter } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: '1',
    title: 'Condominio Parque Almagro',
    category: 'Residencial',
    status: 'En ejecucion',
    invested: '$850.000',
    returnEstimate: '12.5%',
    progress: 65,
    daysLeft: 120,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Santiago Centro',
    investDate: '15 Ene 2026',
  },
  {
    id: '2',
    title: 'Oficinas Santiago Business',
    category: 'Comercial',
    status: 'Financiando',
    invested: '$1.200.000',
    returnEstimate: '14.2%',
    progress: 82,
    daysLeft: 45,
    image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Las Condes',
    investDate: '02 Feb 2026',
  },
  {
    id: '3',
    title: 'Loteo Playa Blanca',
    category: 'Terrenos',
    status: 'Activo',
    invested: '$400.000',
    returnEstimate: '10.8%',
    progress: 45,
    daysLeft: 200,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Valparaiso',
    investDate: '20 Dic 2025',
  },
];

const statusColors: Record<string, string> = {
  'Financiando': 'bg-brand-100 text-brand-700',
  'Activo': 'bg-success-100 text-success-700',
  'En ejecucion': 'bg-amber-100 text-amber-700',
};

const filters = ['Todos', 'Financiando', 'Activo', 'En ejecucion'];

export default function MyProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered = activeFilter === 'Todos'
    ? projects
    : projects.filter((p) => p.status === activeFilter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Mis Proyectos</h1>
        <p className="text-gray-500 mt-1">Todos los proyectos en los que has invertido</p>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="w-4 h-4 text-gray-400" />
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === f
                ? 'bg-brand-500 text-white shadow-sm'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((project) => (
          <Link
            key={project.id}
            to={`/cuenta/proyectos/${project.id}`}
            className="group flex flex-col sm:flex-row bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300"
          >
            <div className="sm:w-56 aspect-video sm:aspect-auto overflow-hidden flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex-1 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status] || 'bg-gray-100 text-gray-600'}`}>
                    {project.status}
                  </span>
                  <span className="text-xs text-gray-400">{project.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-6 flex-wrap">
                <div>
                  <p className="text-xs text-gray-500">Invertido</p>
                  <p className="text-sm font-semibold text-gray-900">{project.invested}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Rentabilidad est.</p>
                  <p className="text-sm font-semibold text-success-600 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {project.returnEstimate}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Dias restantes</p>
                  <p className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    {project.daysLeft}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Fecha inversion</p>
                  <p className="text-sm font-medium text-gray-700">{project.investDate}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
