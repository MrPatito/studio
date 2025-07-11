import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target } from 'lucide-react';
import AboutUsGenerator from './about-us-generator';

const teamMembers = [
  {
    name: "John Carter",
    role: "CEO & Lead Engineer",
    image: "https://placehold.co/200x200.png?a=1",
    aiHint: "male portrait"
  },
  {
    name: "Maria Garcia",
    role: "Head of Operations",
    image: "https://placehold.co/200x200.png?a=2",
    aiHint: "female portrait"
  },
  {
    name: "David Chen",
    role: "Chief Financial Officer",
    image: "https://placehold.co/200x200.png?a=3",
    aiHint: "male portrait"
  },
  {
    name: "Aisha Mohammed",
    role: "Director of Fabrication",
    image: "https://placehold.co/200x200.png?a=4",
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
            Pioneering Industrial Service and Innovation
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Learn about our journey, our values, and the dedicated team that drives Rima Oil Service forward.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-xl max-w-none text-foreground">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded on the principles of integrity, innovation, and unwavering commitment to quality, Rima Oil Service has grown from a small workshop to a leading provider of industrial solutions. Our journey is one of continuous evolution, driven by the desire to solve complex challenges for our clients in the oil and industrial sectors.
              </p>
              <p className="mt-4 text-muted-foreground">
                We believe in building lasting partnerships, grounded in trust and mutual success. Our multidisciplinary approach allows us to deliver comprehensive services that are not just effective but also efficient and sustainable.
              </p>
            </div>
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Rima Oil Service history"
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
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Values</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">The principles that guide our work and define our character.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline">Mission</h3>
              <p className="text-muted-foreground mt-2">To provide exceptional engineering and maintenance services that empower our clients to achieve maximum efficiency and operational excellence.</p>
            </div>
            <div className="text-center">
              <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline">Quality</h3>
              <p className="text-muted-foreground mt-2">We are committed to the highest standards of quality in every project, ensuring reliability, safety, and long-term value for our clients.</p>
            </div>
             <div className="text-center">
              <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline">Partnership</h3>
              <p className="text-muted-foreground mt-2">We work collaboratively with our clients, building strong relationships to understand their unique needs and deliver tailored solutions.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Team</h2>
            <p className="text-muted-foreground mt-2">The experts leading our company forward.</p>
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
