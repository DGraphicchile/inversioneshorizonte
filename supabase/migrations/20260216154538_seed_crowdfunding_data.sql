/*
  # Seed Initial Data

  1. Data Inserted
    - 6 sample projects across different categories and statuses
    - 6 testimonials from satisfied investors
    - 8 frequently asked questions

  2. Notes
    - Images use Pexels stock photos
    - All monetary values in CLP (Chilean Pesos)
    - Return percentages are illustrative
*/

INSERT INTO projects (title, slug, description, short_description, category, status, image_url, target_amount, raised_amount, min_investment, estimated_return_min, estimated_return_max, annual_return, duration_months, deadline, location) VALUES
(
  'Edificio Aurora - Ñuñoa',
  'edificio-aurora-nunoa',
  'Proyecto de remodelación integral de un edificio de 12 departamentos en el corazón de Ñuñoa. Incluye modernización de fachada, áreas comunes y espacios interiores. La ubicación privilegiada y el crecimiento del sector garantizan una alta demanda tanto para arriendo como para venta.',
  'Remodelación integral de edificio en Ñuñoa con 12 departamentos modernizados.',
  'Remodelación',
  'Financiando',
  'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  250000000,
  187500000,
  100000,
  10.5,
  14.2,
  12.8,
  18,
  '2026-04-15T23:59:59Z',
  'Ñuñoa, Santiago'
),
(
  'Condominio Los Robles',
  'condominio-los-robles',
  'Desarrollo de un exclusivo condominio de 8 casas en Lo Barnechea. Proyecto enfocado en familias que buscan espacios amplios con acceso a naturaleza y cercanía a colegios de primer nivel. Diseño sustentable con paneles solares y eficiencia energética.',
  'Condominio de 8 casas sustentables en Lo Barnechea.',
  'Desarrollo',
  'Activo',
  'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  500000000,
  500000000,
  250000,
  12.0,
  16.5,
  14.2,
  24,
  NULL,
  'Lo Barnechea, Santiago'
),
(
  'Plaza Comercial Valparaíso',
  'plaza-comercial-valparaiso',
  'Transformación de un edificio patrimonial en el cerro Alegre de Valparaíso en una plaza comercial con tiendas boutique, restaurantes y espacios culturales. El proyecto preserva la arquitectura original mientras incorpora amenidades modernas.',
  'Transformación de edificio patrimonial en plaza comercial en cerro Alegre.',
  'Desarrollo',
  'En ejecución',
  'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=800',
  380000000,
  380000000,
  150000,
  9.8,
  13.0,
  11.5,
  20,
  NULL,
  'Valparaíso'
),
(
  'Hogar Comunitario San Miguel',
  'hogar-comunitario-san-miguel',
  'Campaña solidaria para la construcción de un centro comunitario en San Miguel que brindará talleres de capacitación, guardería y espacios de recreación para familias del sector. El proyecto cuenta con el apoyo del municipio y ONGs locales.',
  'Centro comunitario con talleres y guardería para familias de San Miguel.',
  'Campaña solidaria',
  'Financiando',
  'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  120000000,
  48000000,
  50000,
  5.0,
  8.0,
  6.5,
  12,
  '2026-05-30T23:59:59Z',
  'San Miguel, Santiago'
),
(
  'Lofts Industriales Providencia',
  'lofts-industriales-providencia',
  'Reconversión de una antigua fábrica textil en 20 modernos lofts industriales en Providencia. El diseño conserva elementos originales como vigas de acero y ladrillo a la vista, combinados con acabados premium y tecnología de hogar inteligente.',
  'Reconversión de fábrica en 20 lofts industriales premium en Providencia.',
  'Remodelación',
  'Finalizado',
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  420000000,
  420000000,
  200000,
  11.0,
  15.8,
  13.5,
  16,
  NULL,
  'Providencia, Santiago'
),
(
  'Cabañas Lago Villarrica',
  'cabanas-lago-villarrica',
  'Construcción de 6 cabañas turísticas premium a orillas del Lago Villarrica. Cada cabaña contará con jacuzzi, terraza con vista al volcán y acceso directo al lago. Operación mediante plataformas de arriendo turístico con alta demanda estacional.',
  'Cabañas turísticas premium con vista al volcán y acceso al lago.',
  'Desarrollo',
  'Financiando',
  'https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=800',
  300000000,
  210000000,
  100000,
  13.0,
  18.5,
  15.8,
  22,
  '2026-06-20T23:59:59Z',
  'Pucón, Araucanía'
);

INSERT INTO testimonials (name, rating, quote, project_name) VALUES
('Carolina Méndez', 5, 'Llevo más de 2 años invirtiendo en Lares y la experiencia ha sido excelente. La transparencia con que manejan cada proyecto me da total confianza. Ya recuperé mi inversión inicial y sigo reinvirtiendo.', 'Lofts Industriales Providencia'),
('Andrés Fuentes', 5, 'Como ingeniero civil, analicé los números a fondo antes de invertir y los márgenes son reales. El equipo es muy profesional y la comunicación es constante. Totalmente recomendado.', 'Condominio Los Robles'),
('Patricia Lagos', 4, 'Me gustó la posibilidad de invertir montos pequeños para empezar. Partí con $200.000 y hoy tengo participación en tres proyectos. La plataforma es muy fácil de usar.', 'Edificio Aurora - Ñuñoa'),
('Rodrigo Villanueva', 5, 'La rentabilidad que he obtenido supera con creces cualquier instrumento financiero tradicional. Además, me encanta saber exactamente en qué se invierte mi dinero.', 'Cabañas Lago Villarrica'),
('María José Contreras', 4, 'Lo que más valoro es que no prometen lo que no pueden cumplir. Las proyecciones han sido bastante precisas y los plazos se han respetado. Una forma inteligente de invertir.', 'Plaza Comercial Valparaíso'),
('Fernando Escobar', 5, 'Descubrí Lares por la recomendación de un amigo y no me arrepiento. La atención al cliente es impecable y los reportes mensuales te mantienen informado de todo. Una alternativa real al mercado financiero tradicional.', 'Hogar Comunitario San Miguel');

INSERT INTO faqs (question, answer, sort_order) VALUES
('¿Están regulados por la CMF?', 'Sí, operamos bajo la regulación de la Comisión para el Mercado Financiero (CMF) de Chile. Cumplimos con todas las normativas vigentes para plataformas de financiamiento colectivo, lo que garantiza transparencia y seguridad en cada operación.', 1),
('¿Cuáles son los requisitos para invertir?', 'Para invertir necesitas ser mayor de 18 años, tener RUT chileno o extranjero con residencia, una cuenta bancaria a tu nombre y completar el proceso de registro en nuestra plataforma. El monto mínimo de inversión varía según el proyecto, partiendo desde $50.000 CLP.', 2),
('¿Cuál es el riesgo al invertir?', 'Como toda inversión, existe un nivel de riesgo. Los principales riesgos incluyen retrasos en la ejecución del proyecto, variaciones en la rentabilidad estimada y, en casos extremos, pérdida parcial del capital. Mitigamos estos riesgos con una exhaustiva evaluación de cada proyecto y garantías reales.', 3),
('¿Qué garantías existen?', 'Cada proyecto cuenta con garantías reales como hipotecas sobre los inmuebles, boletas de garantía y seguros. Además, realizamos una due diligence exhaustiva que incluye análisis financiero, legal y técnico antes de publicar cualquier proyecto en la plataforma.', 4),
('¿Qué pasa si el proyecto no se financia?', 'Si un proyecto no alcanza su meta de financiamiento dentro del plazo establecido, el 100% del dinero invertido es devuelto a cada inversionista sin ningún descuento ni comisión. El proceso de devolución se realiza automáticamente en un plazo de 5 a 10 días hábiles.', 5),
('¿Cómo y cuándo recibo mis retornos?', 'Los retornos se distribuyen según el calendario establecido para cada proyecto. Generalmente, al finalizar el proyecto y concretarse la venta o arriendo, se reparten las utilidades proporcionalmente a cada inversionista. Recibirás los fondos directamente en tu cuenta bancaria registrada.', 6),
('¿Puedo vender mi participación antes de que termine el proyecto?', 'Sí, a través de nuestro Marketplace puedes ofrecer tu participación a otros inversionistas de la plataforma. El precio de venta es libre, sujeto a la oferta y demanda del mercado secundario.', 7),
('¿Cuánto cobra Lares por sus servicios?', 'Nuestra comisión está alineada con el éxito del proyecto. Cobramos un porcentaje sobre las utilidades generadas, lo que significa que solo ganamos cuando tú ganas. No cobramos comisiones de entrada, mantención ni retiro. Los detalles específicos se detallan en cada proyecto.', 8);