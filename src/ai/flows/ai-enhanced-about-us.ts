// src/ai/flows/ai-enhanced-about-us.ts
'use server';
/**
 * @fileOverview Generates a tailored 'About Us' section for website visitors based on their industry.
 *
 * - generateTailoredAboutUs - A function that generates the 'About Us' content.
 * - TailoredAboutUsInput - The input type for the generateTailoredAboutUs function.
 * - TailoredAboutUsOutput - The return type for the generateTailoredAboutUs function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailoredAboutUsInputSchema = z.object({
  industry: z.string().describe('The industry of the website visitor.'),
});
export type TailoredAboutUsInput = z.infer<typeof TailoredAboutUsInputSchema>;

const TailoredAboutUsOutputSchema = z.object({
  aboutUsContent: z.string().describe('The tailored About Us content for the visitor.'),
});
export type TailoredAboutUsOutput = z.infer<typeof TailoredAboutUsOutputSchema>;

export async function generateTailoredAboutUs(input: TailoredAboutUsInput): Promise<TailoredAboutUsOutput> {
  return generateTailoredAboutUsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tailoredAboutUsPrompt',
  input: {schema: TailoredAboutUsInputSchema},
  output: {schema: TailoredAboutUsOutputSchema},
  prompt: `You are an expert in crafting compelling "About Us" sections for company websites.

You will generate a tailored "About Us" section for Rima Oil Service based on the industry of the website visitor.

Rima Oil Service is a provider of integral maintenance, fabrication and modifications, in-situ technical assistance, and industrial solutions for the oil and industrial sector. Their services cover mechanical, electrical, hydraulic, and civil engineering disciplines for heavy/light fleets and production plants.

Focus on highlighting Rima Oil Service's relevant expertise, experience, and values that would be most appealing to the visitor's industry.

Industry: {{{industry}}}
`,
});

const generateTailoredAboutUsFlow = ai.defineFlow(
  {
    name: 'generateTailoredAboutUsFlow',
    inputSchema: TailoredAboutUsInputSchema,
    outputSchema: TailoredAboutUsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
