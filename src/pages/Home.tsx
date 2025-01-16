import React, { useState } from 'react';
import Banner from '../components/Banner';
import CategorySection from '../components/CategorySection';
import Modal from '../components/Modal';
import { COLORS } from '../styles/colors';

// Sample data with video URLs and thumbnails
const initialVideos = {
  frontend: [
    {
      id: '1',
      title: 'Cuándo usar let, var y const?',
      category: 'frontend',
      videoUrl: 'https://www.youtube.com/watch?v=PztCEdIJITY&t=406s',
      description: '¿A veces cuando estás programando sientes dificultades en saber en qué momento utilizar let, var o const para declarar una variable?',
    },
    {
      id: '2',
      title: '¿Qué es JavaScript?',
      category: 'frontend',
      videoUrl: 'https://www.youtube.com/watch?v=GJfOSoaXk4s&t=119s',
      description: 'JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo?',
    },
    {
      id: '3',
      title: 'Equipo Frontend',
      category: 'frontend',
      videoUrl: 'https://www.youtube.com/watch?v=rpvrLaBQwgg',
      description: '¿Estás empezando tus estudios de Programación? ¿Te interesa todo lo que es la creación de Páginas Web Desarrollo de Softwares?',
    },
  ],
  backend: [
    {
      id: '4',
      title: 'Spring Framework',
      category: 'backend',
      videoUrl: 'https://www.youtube.com/watch?v=t-iqt1b2qqk&t=1s',
      description: '¿Busca un framework para utilizar en sus proyectos? ¿Conoce Spring Framework?',
    },
    {
      id: '5',
      title: '¿QUÉ ES EL SQL Y NOSQL',
      category: 'backend',
      videoUrl: 'https://www.youtube.com/watch?v=cLLKVd5CNLc',
      description: '¿Cuáles son las diferencias entre una estructura de datos relacional (SQL) y una no relacional (NoSQL)?',
    },
    {
      id: '6',
      title: 'Simplificando tu código en Java: Conoce los enum',
      category: 'backend',
      videoUrl: 'https://www.youtube.com/watch?v=EoPvlE85XAQ',
      description: '¿Escribir muchas variables del tipo constantes en Java te parece un proceso tedioso y que genera muchas líneas de código?',
    },
  ],
  innovation: [
    {
      id: '7',
      title: '¿QUÉ SON LAS SOFTSKILLS?',
      category: 'innovation',
      videoUrl: 'https://www.youtube.com/watch?v=vhwspfvI52k&t=279s',
      description: '¿Qué son las Softskills y por qué es tan importante desarrollarlas para posicionarse en el mercado laboral?',
    },
    {
      id: '8',
      title: 'LAS 7 SOFTSKILLS MÁS DESEADAS',
      category: 'innovation',
      videoUrl: 'https://www.youtube.com/watch?v=YhR7Zp8NUzE',
      description: 'Seguro que ya escuchaste hablar sobre las Soft Skills, pero ¿sabes cuáles son las 7 más buscadas por las empresas?',
    },
    {
      id: '9',
      title: 'METODOLOGIAS AGILES',
      category: 'innovation',
      videoUrl: 'https://www.youtube.com/watch?v=6N3OkLCfK-0',
      description: 'En este video nuestra invitada, Andyara, nos explicará qué son las muy conocidas hoy en día metodologías ágiles.',
    },
  ],
};

export default function Home() {
  const [videos, setVideos] = useState(initialVideos);
  const [editingVideo, setEditingVideo] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Referencias para cada categoría
  const frontendRef = React.createRef<HTMLDivElement>();
  const backendRef = React.createRef<HTMLDivElement>();
  const innovationRef = React.createRef<HTMLDivElement>();

  const handleEditVideo = (id: string) => {
    const video = Object.values(videos)
      .flat()
      .find((v) => v.id === id);
    setEditingVideo(video);
    setIsModalOpen(true);
  };

  const handleDeleteVideo = (id: string) => {
    const updatedVideos = Object.fromEntries(
      Object.entries(videos).map(([category, categoryVideos]) => [
        category,
        categoryVideos.filter(video => video.id !== id)
      ])
    );
    setVideos(updatedVideos);
  };

  // Función para hacer scroll a la sección correspondiente
  const scrollToCategory = (category: string) => {
    switch (category) {
      case 'frontend':
        frontendRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'backend':
        backendRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'innovation':
        innovationRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Banner />
      
      {/* Botones para las categorías debajo del Banner */}
      <div className="flex justify-center space-x-4 mt-8 mb-4">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          onClick={() => scrollToCategory('frontend')}
        >
          Frontend
        </button>
        <button
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          onClick={() => scrollToCategory('backend')}
        >
          Backend
        </button>
        <button
          className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
          onClick={() => scrollToCategory('innovation')}
        >
          Innovation
        </button>
      </div>

      {/* Sección Frontend */}
      <div ref={frontendRef}>
        <CategorySection
          title="Frontend"
          color={COLORS.FRONTEND}
          videos={videos.frontend}
          onEditVideo={handleEditVideo}
          onDeleteVideo={handleDeleteVideo}
          category="frontend"
        />
      </div>

      {/* Sección Backend */}
      <div ref={backendRef}>
        <CategorySection
          title="Backend"
          color={COLORS.BACKEND}
          videos={videos.backend}
          onEditVideo={handleEditVideo}
          onDeleteVideo={handleDeleteVideo}
          category="backend"
        />
      </div>

      {/* Sección Innovation */}
      <div ref={innovationRef}>
        <CategorySection
          title="Innovation"
          color={COLORS.INNOVATION}
          videos={videos.innovation}
          onEditVideo={handleEditVideo}
          onDeleteVideo={handleDeleteVideo}
          category="innovation"
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoData={editingVideo}
        onSave={() => {}}
      />
    </div>
  );
}
