// BeneficiosAPA.jsx
import { FaHandsHelping, FaSmile, FaUsers, FaChild, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";

const beneficios = [
  {
    icon: <FaChild size={28} className="text-yellow-600" />,
    title: "Fortalecimiento del vínculo con la Educación de los Hijos",
    items: [
      "Ser parte activa en el proceso formativo y espiritual de los estudiantes.",
      "Conocer de cerca los proyectos y actividades del colegio.",
    ],
  },
  {
    icon: <FaChalkboardTeacher size={28} className="text-yellow-600" />,
    title: "Participación en decisiones y Proyectos",
    items: [
      "Tener voz y voto en iniciativas que impactan la comunidad educativa.",
      "Aportar ideas y soluciones para el bienestar de los estudiantes.",
    ],
  },
  {
    icon: <FaUsers size={28} className="text-yellow-600" />,
    title: "Fomento de la comunidad y la integración familiar",
    items: [
      "Participar en eventos religiosos, sociales y culturales.",
      "Crear lazos con otras familias que comparten los mismos valores.",
    ],
  },
  {
    icon: <FaGraduationCap size={28} className="text-yellow-600" />,
    title: "Impacto positivo en la vida escolar de los hijos",
    items: [
      "Mejorar el ambiente escolar a través del trabajo colaborativo.",
      "Apoyar iniciativas que promuevan el bienestar y la convivencia.",
    ],
  },
  {
    icon: <FaSmile size={28} className="text-yellow-600" />,
    title: "Satisfacción de servir y dejar huella",
    items: [
      "Contribuir activamente a la mejora del colegio.",
      "Ser parte de una comunidad que trabaja con amor, fe y compromiso.",
    ],
  },
  {
    icon: <FaHandsHelping size={28} className="text-yellow-600" />,
    title: "Apoyo a familias en dificultades económicas",
    items: [
      "Asistencia con recursos para familias con necesidades, asegurando su permanencia y bienestar dentro del colegio.",
    ],
  },
];

export default function BeneficiosAPA() {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">Beneficios de Pertenecer a la Asociación</h2>
      <div className="h-1 w-24 bg-yellow-500 mx-auto mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {beneficios.map((beneficio, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2 font-semibold text-gray-700">
              {beneficio.icon}
              <h3 className="text-lg">{beneficio.title}</h3>
            </div>
            <ul className="text-sm text-gray-600 list-disc pl-6">
              {beneficio.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
