import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import type { Project } from '../../types';
import ProjectCard from '../ui/ProjectCard';

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .in('status', ['Financiando', 'Activo', 'En ejecución'])
        .order('created_at', { ascending: false })
        .limit(3);

      if (data) setProjects(data);
      setLoading(false);
    }
    fetchProjects();
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Imagen de fondo decorativa */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-8 sm:mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mb-2">
              Proyectos en curso
            </h2>
            <p className="text-gray-600">Descubre las mejores oportunidades de inversión</p>
          </div>
          <Link
            to="/proyectos"
            className="hidden md:group inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors"
          >
            Ver todos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-brand-500 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
