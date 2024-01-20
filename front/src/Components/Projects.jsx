
import nikeImage from '../assets/nike-landing.png'; // Ajusta la ruta según la ubicación real de tus imágenes

const Projects = () => {
  const projects = [
    {
      id: 'nike-project',
      name: 'Nike Web Clone',
      imageUrl: nikeImage, // Usar la imagen importada
      pageUrl: 'https://nike-web-clone-rendjscv7-davidalanalmeida-gmailcom.vercel.app/', // Agrega la dirección de la página
      alt: 'nike-web-app',
    },
    // Agrega más proyectos según sea necesario
  ];

  const redirectToExternalUrl = (url) => {
    window.location.href = url;
  };

  return (
    <div id="Projects" className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20 cursor-pointer">
        {projects.map((project) => (
          <img
            key={project.id}
            height={300}
            width={300}
            data-aos="fade-up"
            className="text-[26px] flex items-center justify-center border-2 rounded-3xl border-fuchsia-800 b_glow"
            src={project.imageUrl}
            alt={project.alt}
            onClick={() => redirectToExternalUrl(project.pageUrl)}
          />
        ))}
        {/* Agrega más imágenes de proyectos según sea necesario */}
      </div>
    </div>
  );
};

export default Projects;



