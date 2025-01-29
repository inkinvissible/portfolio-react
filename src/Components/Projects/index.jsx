import BentoGrid from "./BentoGrid.jsx";
import toscanaImg from  "../../assets/toscana.png"
import ramayonImg from "../../assets/ramayon.png"
import discorImg from "../../assets/discor.png"

const Projects = () => {
    const titles = ["Ramayon House", "La Toscana", "DisCor: Cerrajería y Accesorios", "Quiz App"]
    const descriptions = ["Un sitio que obtiene los datos de calendario desde un backend y que obtiene tarifas dinámicamente", "La Toscana es un sitio estático con optimización de SEO para un alojamiento en Córdoba", "DisCor: Cerrajería y Accesorios es un sitio web de una autopartista de Córdoba que tiene como objetivo servir de presentación ante los clientes y proveedores", "Quiz App es una aplicación web construida en React que obtiene las preguntas desde una API y construye un quiz interactivo"]
    const imgUrls = [ramayonImg, toscanaImg, discorImg, "https://images.unsplash.com/photo-1631062925717-5c3b2c6f7b1a"]
    const links = ["https://ramayonhouse.com.ar", "https://latoscananono.com.ar", "https://discor.com.ar", "https://github.com/inkinvissible/quiz_proyect"]

    return (
        <div className="bg-[#384f46]">
            <BentoGrid titles={titles} descriptions={descriptions} imgUrls={imgUrls} links={links}/>
        </div>


    )

}
export default Projects