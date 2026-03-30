import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, FolderOpen, Clock, ArrowUpRight, MapPin } from 'lucide-react';

const stats = [
  { label: 'Total invertido', value: '$2.450.000', icon: DollarSign, color: 'bg-brand-50 text-brand-600' },
  { label: 'Rentabilidad acumulada', value: '+$312.000', icon: TrendingUp, color: 'bg-success-50 text-success-600' },
  { label: 'Proyectos activos', value: '3', icon: FolderOpen, color: 'bg-blue-50 text-blue-600' },
  { label: 'Proximo retorno', value: '15 Mar 2026', icon: Clock, color: 'bg-amber-50 text-amber-600' },
];

const myProjects = [
  {
    id: '1',
    title: 'Condominio Parque Almagro',
    category: 'Residencial',
    status: 'En ejecucion',
    invested: '$850.000',
    returnEstimate: '12.5%',
    progress: 65,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Santiago Centro',
  },
  {
    id: '2',
    title: 'Oficinas Santiago Business',
    category: 'Comercial',
    status: 'Financiando',
    invested: '$1.200.000',
    returnEstimate: '14.2%',
    progress: 82,
    image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Las Condes',
  },
  {
    id: '3',
    title: 'Loteo Playa Blanca',
    category: 'Terrenos',
    status: 'Activo',
    invested: '$400.000',
    returnEstimate: '10.8%',
    progress: 45,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Valparaiso',
  },
];

const statusColors: Record<string, string> = {
  'Financiando': 'bg-brand-100 text-brand-700',
  'Activo': 'bg-success-100 text-success-700',
  'En ejecucion': 'bg-amber-100 text-amber-700',
};

const recentActivity = [
  { action: 'Inversion confirmada', project: 'Oficinas Santiago Business', amount: '$1.200.000', date: 'Hace 2 dias' },
  { action: 'Retorno recibido', project: 'Condominio Parque Almagro', amount: '+$45.000', date: 'Hace 1 semana' },
  { action: 'Inversion confirmada', project: 'Loteo Playa Blanca', amount: '$400.000', date: 'Hace 3 semanas' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm sm:text-base text-gray-500 mt-1">Resumen de tus inversiones y actividad reciente</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Mis Proyectos</h2>
          <Link
            to="/proyectos"
            className="text-sm text-brand-500 hover:text-brand-600 font-medium flex items-center gap-1 transition-colors"
          >
            Ver todos
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {myProjects.map((project) => (
            <Link
              key={project.id}
              to={`/cuenta/proyectos/${project.id}`}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status] || 'bg-gray-100 text-gray-600'}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-brand-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1 mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
                  <span>Progreso</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-brand-500 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Invertido</p>
                    <p className="text-sm font-semibold text-gray-900">{project.invested}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Rentabilidad est.</p>
                    <p className="text-sm font-semibold text-success-600">{project.returnEstimate}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-900">Actividad reciente</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {recentActivity.map((activity, i) => (
            <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div>
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-xs text-gray-500 mt-0.5">{activity.project}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-semibold ${activity.amount.startsWith('+') ? 'text-success-600' : 'text-gray-900'}`}>
                  {activity.amount}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
