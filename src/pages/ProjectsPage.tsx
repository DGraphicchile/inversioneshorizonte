import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader2, Search } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Project } from '../types';
import ProjectCard from '../components/ui/ProjectCard';

const filters = ['Todos', 'Financiando', 'Activo', 'En ejecución', 'Finalizado'];

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const activeFilter = searchParams.get('status') || 'Todos';

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      let query = supabase.from('projects').select('*').order('created_at', { ascending: false });

      if (activeFilter !== 'Todos') {
        query = query.eq('status', activeFilter);
      }

      const { data } = await query;
      if (data) setProjects(data);
      setLoading(false);
    }
    fetchProjects();
  }, [activeFilter]);

  const filtered = search
    ? projects.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      )
    : projects;

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-gray-50 min-h-screen">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Marketplace de proyectos
          </h1>
          <p className="text-gray-500 text-sm sm:text-base lg:text-lg">
            Explora todos los proyectos disponibles en nuestra plataforma. Desde oportunidades de inversión activas hasta proyectos en construcción y propiedades finalizadas.
          </p>
        </div>


        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-brand-500 animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 px-4">
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg">No encontramos proyectos con esos criterios. Prueba cambiando los filtros o la busqueda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
