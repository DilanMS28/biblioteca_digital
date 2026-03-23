import Accordeon from "@/components/ui/Accordeon";
import EntradaBlog from "@/components/ui/EntradaBlog";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* header */}
      <section className="bg-gray-100 px-6 py-12 lg:py-20">
        <div className="max-w-[1800px] mx-auto">

          <div className="flex justify-between items-center gap-6 p-8">
            <div>
              <div className="inline-flex items-center justify-center rounded-4xl bg-blue-400/15 px-6 py-3 mb-4">
                <p className="font-bold text-lg text-blue-400">Bienvenido</p>
              </div>
              <h1 className="lg:text-7xl text-6xl font-bold text-slate-900 mb-4" >Tu Puerta de Entrada al <span className="text-blue-400 text-primary">Dominio Digital</span> </h1>

              <p className="text-slate-600 text-lg max-w-2xl leading-relaxed wrap-break-word">
                Descubre un universo de conocimientos a tu alcance: explora libros digitales, sumérgete en recursos interactivos y desbloquea todo tu potencial.<br />
                ¡Aprende sin límites, donde y cuando quieras!
              </p>

              <div className="flex flex-col lg:flex-row gap-4 mt-8">
                <button className="text-white font-bold bg-blue-400 hover:bg-blue-500 px-6 py-3 rounded-4xl cursor-pointer shadow-lg">Comenzar Lectura</button>
                <button className=" text-slate-900 font-bold border-2 border-gray-300 px-6 py-3 rounded-4xl cursor-pointer">Ver Catálogo</button>
              </div>

            </div>

            <div className=" relative rounded-4xl overflow-hidden w-[900px] h-[600px]">
              <Image
                src="/imagen_header2.jpg"
                alt="Imagen Entrada"
                layout="fill"
                objectFit="cover"
                priority
                className="rounded-4xl"
              />
              <div className="absolute inset-0 pointer-events-none rounded-4xl" style={{ background: "linear-gradient(to top, rgba(96, 165, 250, 0.7), rgba(168, 85, 247, 0.6))" }}></div>
            </div>
          </div>

        </div>
      </section>

      {/* featured books */}
      <section>
        <div className="max-w-[1800px] mx-auto p-8">
          <h2 className="text-4xl font-bold mb-2 text-slate-900">Descubre <span className="text-blue-400"> Libros Destacados</span></h2>
          <p className="text-lg text-slate-600 mb-6">
            Sumérgete en nuestra selección de lecturas recomendadas y deja que la curiosidad guíe tu próximo descubrimiento. ¡Atrévete a explorar nuevos mundos y ampliar tus horizontes con cada página!
          </p>
        </div>
      </section>

      {/* call to action */}
      <section className="bg-gray-100">
        <div className="max-w-[1900px] mx-auto p-8">
          <div
            className="flex flex-col items-center justify-center min-h-[300px] md:min-h-[380px] rounded-4xl shadow-xl px-4 md:px-16 py-12 md:py-16 relative overflow-hidden"
            style={{
              background: "radial-gradient(100% 100% at 50% 0%, #143150 0%, #092237 100%)"
            }}
          >
            <h3 className="font-bold text-center text-white text-3xl md:text-5xl lg:text-7xl mb-2 drop-shadow">¡Tu próxima aventura<br />comienza aquí! </h3>
            <p className="text-center text-[#b6cee2] text-base md:text-lg mb-8 mt-2 max-w-2xl">
              Únete a miles de estudiantes y descubre un mundo de conocimiento sin límites.<br />
              Millones de libros te esperan.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 justify-center relative z-10 mt-2">
              <button className="bg-blue-400 hover:bg-blue-500 cursor-pointer text-white font-semibold rounded-4xl px-6 py-3 drop-shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">Explorar Biblioteca</button>
              <button className="bg-[#223044] hover:bg-slate-900/90 text-slate-300 font-semibold rounded-4xl px-6 py-3 transition-colors duration-200 focus:outline-none cursor-pointer">Saber más</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FQA */}
      <section>
        <div className="max-w-[1800px] mx-auto p-8">
          <h2 className="text-4xl font-bold mb-2 text-slate-900">Preguntas <span className="text-blue-400">Frecuentes</span></h2>
          <p className="text-lg text-slate-600 mb-6">
            Todo lo que necesitas saber para empezar tu aventura de lectura en nuesta plataforma digital.
          </p>

          <Accordeon
            icon="bi-file-earmark-pdf-fill"
            title="¿Cómo puedo leer un PDF?"
            text="Puedes acceder a nuesta bilioteca digital desde cualquier dispositivo. Solo selecciona el libro
            que deseas y haz clic en Leer ahora para abrir nuestro visor optimizado sin descargas pesadas"
          />

          <Accordeon
            icon="bi-pc-display"
            title="¿Puedo leer en mi celular o tablet?"
            text="Puedes acceder a nuesta bilioteca digital desde cualquier dispositivo. Solo selecciona el libro
            que deseas y haz clic en Leer ahora para abrir nuestro visor optimizado sin descargas pesadas"
          />

          <Accordeon
            icon="bi-shield-lock-fill"
            title="¿Cómo recupero mi contraseña?"
            text="Puedes acceder a nuesta bilioteca digital desde cualquier dispositivo. Solo selecciona el libro
            que deseas y haz clic en Leer ahora para abrir nuestro visor optimizado sin descargas pesadas"
          />
          <Accordeon
            icon="bi-pc-display"
            title="¿Puedo leer en mi celular o tablet?"
            text="Puedes acceder a nuesta bilioteca digital desde cualquier dispositivo. Solo selecciona el libro
            que deseas y haz clic en Leer ahora para abrir nuestro visor optimizado sin descargas pesadas"
          />

        </div>
      </section>

      {/* blog */}
      <section>
        <div className="max-w-[1800px] mx-auto p-8">
          <h2 className="text-4xl font-bold mb-2 text-slate-900">Nuestro <span className="text-blue-400">Blog de Lectura</span></h2>
          <p className="text-lg text-slate-600 mb-6">
            Explora consejos prácticos, guías de estudio y la magia de los libros. Un espacio diseñado para inspirar a jóvenes estudiantes en su camino hacia el conocimiento
          </p>

          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <EntradaBlog
              title="La importancia de la lectura diaria"
              description="Descubre por qué dedicar solo 20 minutos al día a la lectura puede transformar radicalmente tu futuro académico y personal."
              image="/imagen_blog1.jpg"
              url="#"
              readTime={5}
            />
            <EntradaBlog
              title="Técnicas de estudio efectivas para el éxito"
              description="Descubre por qué dedicar solo 20 minutos al día a la lectura puede transformar radicalmente tu futuro académico y personal."
              image="/imagen_blog2.jpg"
              url="#"
              readTime={10}
            />
            <EntradaBlog
              title="Bienestar mental y el hábito lector"
              description="Descubre por qué dedicar solo 20 minutos al día a la lectura puede transformar radicalmente tu futuro académico y personal."
              image="/imagen_blog3.jpg"
              url="#"
              readTime={8}
            />
          </div>
        </div>
      </section>
    </>
  );
}
