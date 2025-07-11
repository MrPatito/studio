import TestimonialGenerator from './testimonial-generator';

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
          Genere Historias de Éxito de Clientes
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Utilice nuestra herramienta impulsada por IA para transformar los datos del proyecto en testimonios de clientes convincentes. Ingrese los detalles de un proyecto exitoso a continuación para generar un borrador.
        </p>
      </div>
      <TestimonialGenerator />
    </div>
  );
}
