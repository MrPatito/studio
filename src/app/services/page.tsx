import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Hammer, Headset, Factory, CheckCircle } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: "Mantenimiento Integral",
    description: "Ofrecemos soluciones integrales de mantenimiento para flotas pesadas y ligeras, así como para plantas de producción, asegurando un rendimiento óptimo y la longevidad de sus activos.",
    benefits: ["Reducción del Tiempo de Inactividad", "Aumento de la Vida Útil del Equipo", "Detección Proactiva de Problemas"],
    image: "https://placehold.co/600x400.png?a=1",
    aiHint: "industrial maintenance",
  },
  {
    icon: <Hammer className="w-8 h-8 text-primary" />,
    title: "Fabricación y Modificaciones",
    description: "Nuestro equipo se especializa en fabricación y modificaciones a medida, entregando soluciones personalizadas que cumplen con los requisitos únicos de sus proyectos y necesidades operativas.",
    benefits: ["Soluciones a Medida", "Funcionalidad Mejorada", "Materiales de Alta Calidad"],
    image: "https://placehold.co/600x400.png?a=2",
    aiHint: "metal fabrication"
  },
  {
    icon: <Headset className="w-8 h-8 text-primary" />,
    title: "Asistencia Técnica In-Situ",
    description: "Ofrecemos asistencia técnica en el lugar para diagnosticar y resolver problemas rápidamente. Nuestros expertos brindan soporte práctico para minimizar las interrupciones operativas.",
    benefits: ["Soporte Rápido en Sitio", "Solución de Problemas por Expertos", "Interrupciones Mínimas"],
    image: "https://placehold.co/600x400.png?a=3",
    aiHint: "engineer worksite"
  },
  {
    icon: <Factory className="w-8 h-8 text-primary" />,
    title: "Soluciones Industriales",
    description: "Aprovechando nuestra experiencia multidisciplinaria, ofrecemos una amplia gama de soluciones industriales que cubren las disciplinas de ingeniería mecánica, eléctrica, hidráulica и civil.",
    benefits: ["Gestión Holística de Proyectos", "Experiencia Interdisciplinaria", "Resolución Innovadora de Problemas"],
    image: "https://placehold.co/600x400.png?a=4",
    aiHint: "oil refinery"
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Nuestros Servicios</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Ofrecemos un espectro completo de servicios diseñados para apoyar a los sectores petrolero e industrial. Nuestro compromiso es ofrecer calidad, eficiencia y fiabilidad en cada proyecto que emprendemos.
        </p>
      </div>

      <div className="space-y-16">
        {services.map((service, index) => (
          <Card key={service.title} className="overflow-hidden shadow-lg">
            <div className={`grid md:grid-cols-2 items-center gap-8 ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`p-8 md:p-12 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">{service.icon}</div>
                  <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground">{service.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="font-medium text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full h-64 md:h-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  data-ai-hint={service.aiHint}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
