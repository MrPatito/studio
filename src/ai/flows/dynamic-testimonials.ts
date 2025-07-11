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
  prompt: `You are a marketing expert specializing in crafting compelling testimonials.
  Given the following project data, generate a testimonial that highlights the benefits and results achieved by the client.
  The testimonial should sound authentic and resonate with potential clients in the same industry.

  Client Name: {{{clientName}}}
  Client Industry: {{{clientIndustry}}}
  Project Description: {{{projectDescription}}}
  Project Results: {{{projectResults}}}

  Testimonial:
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
