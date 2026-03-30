import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Condominio Parque Almagro - Fachada',
    project: 'Condominio Parque Almagro',
    category: 'Avance de obra',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Condominio Parque Almagro - Interior modelo',
    project: 'Condominio Parque Almagro',
    category: 'Renders',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Oficinas Santiago Business - Exterior',
    project: 'Oficinas Santiago Business',
    category: 'Renders',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/1170686/pexels-photo-1170686.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Oficinas Santiago Business - Lobby',
    project: 'Oficinas Santiago Business',
    category: 'Renders',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Loteo Playa Blanca - Vista aerea',
    project: 'Loteo Playa Blanca',
    category: 'Terreno',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Loteo Playa Blanca - Acceso playa',
    project: 'Loteo Playa Blanca',
    category: 'Terreno',
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Condominio Parque Almagro - Obra gruesa',
    project: 'Condominio Parque Almagro',
    category: 'Avance de obra',
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Oficinas Santiago Business - Terreno',
    project: 'Oficinas Santiago Business',
    category: 'Avance de obra',
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Loteo Playa Blanca - Urbanizacion',
    project: 'Loteo Playa Blanca',
    category: 'Avance de obra',
  },
];

const categories = ['Todas', 'Renders', 'Avance de obra', 'Terreno'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'Todas'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filtered.length - 1 : lightboxIndex - 1);
    }
  };

  const next = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filtered.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Galeria</h1>
        <p className="text-gray-500 mt-1">Imagenes y avances de tus proyectos de inversion</p>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="w-4 h-4 text-gray-400" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? 'bg-brand-500 text-white shadow-sm'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            onClick={() => openLightbox(i)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-sm font-medium text-white">{item.title}</p>
              <p className="text-xs text-gray-300 mt-0.5">{item.category}</p>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-gray-900/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prev}
            className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[80vh] px-16">
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white font-medium">{filtered[lightboxIndex].title}</p>
              <p className="text-gray-400 text-sm mt-1">{filtered[lightboxIndex].project}</p>
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
