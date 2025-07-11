'use server';

/**
 * @fileOverview An AI agent for generating dynamic testimonials from project data.
 *
 * - generateTestimonial - A function that generates a testimonial based on project data.
 * - GenerateTestimonialInput - The input type for the generateTestimonial function.
 * - GenerateTestimonialOutput - The return type for the generateTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTestimonialInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('Detailed description of the project including goals, challenges, and solutions.'),
  clientName: z.string().describe('The name of the client.'),
  clientIndustry: z.string().describe('The industry of the client.'),
  projectResults: z
    .string()
    .describe('Quantifiable results and benefits the client experienced as a result of the project.'),
});
export type GenerateTestimonialInput = z.infer<typeof GenerateTestimonialInputSchema>;

const GenerateTestimonialOutputSchema = z.object({
  testimonial: z.string().describe('A compelling testimonial generated from the project data.'),
});
export type GenerateTestimonialOutput = z.infer<typeof GenerateTestimonialOutputSchema>;

export async function generateTestimonial(
  input: GenerateTestimonialInput
): Promise<GenerateTestimonialOutput> {
  return generateTestimonialFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTestimonialPrompt',
  input: {schema: GenerateTestimonialInputSchema},
  output: {schema: GenerateTestimonialOutputSchema},
  prompt: `Eres un experto en marketing especializado en crear testimonios convincentes.
  Dados los siguientes datos del proyecto, genera un testimonio en español que resalte los beneficios y resultados obtenidos por el cliente.
  El testimonio debe sonar auténtico y resonar con clientes potenciales de la misma industria.

  Nombre del Cliente: {{{clientName}}}
  Industria del Cliente: {{{clientIndustry}}}
  Descripción del Proyecto: {{{projectDescription}}}
  Resultados del Proyecto: {{{projectResults}}}

  Testimonio:
  `,
});

const generateTestimonialFlow = ai.defineFlow(
  {
    name: 'generateTestimonialFlow',
    inputSchema: GenerateTestimonialInputSchema,
    outputSchema: GenerateTestimonialOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
