import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target } from 'lucide-react';
import AboutUsGenerator from './about-us-generator';

const teamMembers = [
  {
    name: "Juan Pérez",
    role: "CEO e Ingeniero Principal",
    image: "https://placehold.co/200x200.png",
    aiHint: "male portrait"
  },
  {
    name: "María García",
    role: "Jefa de Operaciones",
    image: "https://placehold.co/200x200.png",
    aiHint: "female portrait"
  },
  {
    name: "David Chen",
    role: "Director Financiero",
    image: "https://placehold.co/200x200.png",
    aiHint: "male portrait"
  },
  {
    name: "Aisha Mohammed",
    role: "Directora de Fabricación",
    image: "https://placehold.co/200x200.png",
    aiHint: "female portrait"
  }
]

export default function AboutPage() {
  return (
    <>
      <section className="relative w-full py-20 md:py-32 bg-card">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-4 font-headline">
            Pioneros en Servicio e Innovación Industrial
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Conozca nuestra trayectoria, nuestros valores y el equipo dedicado que impulsa a Rima Oil Service.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-xl max-w-none text-foreground">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestra Historia</h2>
              <p className="mt-4 text-muted-foreground">
                Fundada sobre los principios de integridad, innovación y un compromiso inquebrantable con la calidad, Rima Oil Service ha crecido de un pequeño taller a un proveedor líder de soluciones industriales. Nuestro viaje es de continua evolución, impulsado por el deseo de resolver desafíos complejos para nuestros clientes en los sectores petrolero e industrial.
              </p>
              <p className="mt-4 text-muted-foreground">
                Creemos en la construcción de alianzas duraderas, basadas en la confianza y el éxito mutuo. Nuestro enfoque multidisciplinario nos permite ofrecer servicios integrales que no solo son efectivos, sino también eficientes y sostenibles.
              </p>
            </div>
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Historia de Rima Oil Service"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                data-ai-hint="industrial blueprint"
              />
            </div>
          </div>
        </div>
      </section>

      <AboutUsGenerator />

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestros Valores Fundamentales</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Los principios que guían nuestro trabajo y definen nuestro carácter.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline">Misión</h3>
              <p className="text-muted-foreground mt-2">Proporcionar servicios excepcionales de ingeniería y mantenimiento que empoderen a nuestros clientes para alcanzar la máxima eficiencia y excelencia operativa.</p>
            </div>
            <div className="text-center">
              <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline">Calidad</h3>
              <p className="text-muted-foreground mt-2">Estamos comprometidos con los más altos estándares de calidad en cada proyecto, garantizando fiabilidad, seguridad y valor a largo plazo para nuestros clientes.</p>
            </div>
             <div className="text-center">
              <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline">Alianza</h3>
              <p className="text-muted-foreground mt-2">Trabajamos en colaboración con nuestros clientes, construyendo relaciones sólidas para comprender sus necesidades únicas y ofrecer soluciones a medida.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Conozca a Nuestro Equipo</h2>
            <p className="text-muted-foreground mt-2">Los expertos que lideran nuestra empresa.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <Card key={member.name} className="text-center border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full w-32 h-32 mx-auto mb-4 shadow-lg"
                    data-ai-hint={member.aiHint}
                  />
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
