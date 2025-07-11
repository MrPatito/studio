import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Hammer, Headset, Factory, CheckCircle } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    title: "Integral Maintenance",
    description: "We provide comprehensive maintenance solutions for both heavy and light fleets, as well as production plants, ensuring optimal performance and longevity of your assets.",
    benefits: ["Reduced Downtime", "Increased Equipment Lifespan", "Proactive Issue Detection"],
    image: "https://placehold.co/600x400.png?a=1",
    aiHint: "industrial maintenance",
  },
  {
    icon: <Hammer className="w-8 h-8 text-primary" />,
    title: "Fabrication and Modifications",
    description: "Our team specializes in custom fabrication and modifications, delivering tailored solutions that meet the unique requirements of your projects and operational needs.",
    benefits: ["Custom-Built Solutions", "Enhanced Functionality", "High-Quality Materials"],
    image: "https://placehold.co/600x400.png?a=2",
    aiHint: "metal fabrication"
  },
  {
    icon: <Headset className="w-8 h-8 text-primary" />,
    title: "In-Situ Technical Assistance",
    description: "We offer on-site technical assistance to diagnose and resolve issues swiftly. Our experts provide hands-on support to minimize operational disruptions.",
    benefits: ["Rapid On-Site Support", "Expert Troubleshooting", "Minimized Disruptions"],
    image: "https://placehold.co/600x400.png?a=3",
    aiHint: "engineer worksite"
  },
  {
    icon: <Factory className="w-8 h-8 text-primary" />,
    title: "Industrial Solutions",
    description: "Leveraging our multidisciplinary expertise, we deliver a wide range of industrial solutions covering mechanical, electrical, hydraulic, and civil engineering disciplines.",
    benefits: ["Holistic Project Management", "Cross-Disciplinary Expertise", "Innovative Problem-Solving"],
    image: "https://placehold.co/600x400.png?a=4",
    aiHint: "oil refinery"
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We offer a full spectrum of services designed to support the oil and industrial sectors. Our commitment is to deliver quality, efficiency, and reliability in every project we undertake.
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
