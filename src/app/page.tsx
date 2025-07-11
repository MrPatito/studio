import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Hammer, Headset, Factory, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: <Wrench className="w-10 h-10 text-primary" />,
      title: 'Mantenimiento Integral',
      description: 'Mantenimiento completo para flotas pesadas/ligeras y plantas de producción.',
    },
    {
      icon: <Hammer className="w-10 h-10 text-primary" />,
      title: 'Fabricación y Modificaciones',
      description: 'Fabricación y modificaciones personalizadas adaptadas a sus necesidades específicas.',
    },
    {
      icon: <Headset className="w-10 h-10 text-primary" />,
      title: 'Asistencia Técnica In-Situ',
      description: 'Soporte técnico en el lugar para resolver problemas de manera rápida y eficiente.',
    },
    {
      icon: <Factory className="w-10 h-10 text-primary" />,
      title: 'Soluciones Industriales',
      description: 'Soluciones innovadoras en diversas disciplinas de la ingeniería.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-4 font-headline">
            Excelencia en Ingeniería en el Sector Petrolero e Industrial
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            Rima Oil Service proporciona mantenimiento integral, fabricación y soluciones industriales para mantener sus operaciones funcionando al máximo rendimiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/services">Nuestros Servicios <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contáctenos</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestros Servicios Principales</h2>
            <p className="text-muted-foreground mt-2">Ofreciendo calidad y eficiencia en todas las disciplinas.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    {service.icon}
                  </div>
                  <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Equipo de Rima Oil Service"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                data-ai-hint="industrial team"
              />
            </div>
            <div className="prose lg:prose-xl max-w-none text-foreground">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Su Socio de Confianza en Soluciones Industriales</h2>
              <p className="mt-4 text-muted-foreground">
                Con años de experiencia y un compromiso con la excelencia, Rima Oil Service se posiciona como líder en el sector industrial. Combinamos una profunda experiencia con tecnología de vanguardia para ofrecer soluciones que impulsan el progreso y garantizan la fiabilidad.
              </p>
              <p className="mt-4 text-muted-foreground">
                Nuestro equipo es nuestro mayor activo. Compuesto por profesionales dedicados de la ingeniería mecánica, eléctrica, hidráulica y civil, estamos equipados para enfrentar los desafíos más complejos.
              </p>
              <Button asChild className="mt-6" variant="link" size="lg">
                <Link href="/about">Conozca Más Sobre Nosotros <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
