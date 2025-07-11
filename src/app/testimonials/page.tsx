import TestimonialGenerator from './testimonial-generator';

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
          Generate Client Success Stories
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Use our AI-powered tool to transform project data into compelling client testimonials. Enter the details of a successful project below to generate a draft.
        </p>
      </div>
      <TestimonialGenerator />
    </div>
  );
}
