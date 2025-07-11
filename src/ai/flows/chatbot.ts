'use server';

/**
 * @fileOverview A chatbot flow that acts as an expert engineer to guide potential clients.
 * 
 * - chat - A function that handles the chatbot conversation.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const MessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string(),
});

const ChatInputSchema = z.object({
  history: z.array(MessageSchema),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string(),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;


export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const prompt = ai.definePrompt({
    name: 'chatbotPrompt',
    input: { schema: ChatInputSchema },
    output: { schema: ChatOutputSchema },
    system: `Eres un asistente de IA de Rima Oil Service, una empresa especializada en mantenimiento integral, fabricación, modificaciones, asistencia técnica in-situ y soluciones industriales para los sectores petrolero e industrial.

Tu rol es actuar como un ingeniero experto y amigable. Tu objetivo es ayudar a los clientes potenciales, que pueden no tener conocimientos técnicos, a articular sus necesidades.

Haz preguntas orientadoras para comprender su situación, los problemas que enfrentan y sus objetivos. Basado en sus respuestas, sugiéreles los servicios más relevantes que ofrece Rima Oil Service (Mantenimiento Integral, Fabricación y Modificaciones, Asistencia Técnica In-Situ, Soluciones Industriales) y anímalos a contactarnos o agendar una cita para una consulta más detallada.

Mantén un tono profesional, servicial y paciente. Sé conciso en tus respuestas. Comienza la conversación con un saludo amigable y preguntando cómo puedes ayudar.`,
    prompt: `{{#each history}}
{{#if (eq role 'user')}}
User: {{{content}}}
{{else}}
Assistant: {{{content}}}
{{/if}}
{{/each}}
Assistant:`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return { response: output!.response };
  }
);
