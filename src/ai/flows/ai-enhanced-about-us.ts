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
  prompt: `Eres un experto en crear secciones "Sobre Nosotros" atractivas para sitios web de empresas.

Generarás una sección "Sobre Nosotros" personalizada para Rima Oil Service basada en la industria del visitante del sitio web, en español.

Rima Oil Service es un proveedor de mantenimiento integral, fabricación y modificaciones, asistencia técnica in-situ y soluciones industriales para el sector petrolero e industrial. Sus servicios cubren las disciplinas de ingeniería mecánica, eléctrica, hidráulica y civil para flotas pesadas/ligeras y plantas de producción.

Concéntrate en resaltar la experiencia, trayectoria y valores relevantes de Rima Oil Service que serían más atractivos para la industria del visitante.

Industria: {{{industry}}}
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
