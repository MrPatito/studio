import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Hammer, Headset, Factory, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: <Wrench className="w-10 h-10 text-primary" />,
      title: 'Integral Maintenance',
      description: 'Comprehensive maintenance for heavy/light fleets and production plants.',
    },
    {
      icon: <Hammer className="w-10 h-10 text-primary" />,
      title: 'Fabrication & Modifications',
      description: 'Custom fabrication and modifications tailored to your specific needs.',
    },
    {
      icon: <Headset className="w-10 h-10 text-primary" />,
      title: 'In-Situ Technical Assistance',
      description: 'On-site technical support to resolve issues quickly and efficiently.',
    },
    {
      icon: <Factory className="w-10 h-10 text-primary" />,
      title: 'Industrial Solutions',
      description: 'Innovative solutions across various engineering disciplines.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-4 font-headline">
            Engineering Excellence in the Oil & Industrial Sector
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            Rima Oil Service provides integral maintenance, fabrication, and industrial solutions to keep your operations running at peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/services">Our Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Services</h2>
            <p className="text-muted-foreground mt-2">Delivering quality and efficiency across disciplines.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Rima Oil Service Team"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                data-ai-hint="industrial team"
              />
            </div>
            <div className="prose lg:prose-xl max-w-none text-foreground">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Your Trusted Partner in Industrial Solutions</h2>
              <p className="mt-4 text-muted-foreground">
                With years of experience and a commitment to excellence, Rima Oil Service stands as a leader in the industrial sector. We combine deep expertise with cutting-edge technology to deliver solutions that drive progress and ensure reliability.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our team is our greatest asset. Comprised of dedicated professionals from mechanical, electrical, hydraulic, and civil engineering, we are equipped to tackle the most complex challenges.
              </p>
              <Button asChild className="mt-6" variant="link" size="lg">
                <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
