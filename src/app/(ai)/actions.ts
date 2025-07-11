'use server';

import {
  generateTailoredAboutUs,
  type TailoredAboutUsInput,
} from '@/ai/flows/ai-enhanced-about-us';
import {
  generateTestimonial,
  type GenerateTestimonialInput,
} from '@/ai/flows/dynamic-testimonials';
import { chat, type ChatInput } from '@/ai/flows/chatbot';

export async function getTailoredAboutUs(input: TailoredAboutUsInput) {
  return await generateTailoredAboutUs(input);
}

export async function getGeneratedTestimonial(input: GenerateTestimonialInput) {
  return await generateTestimonial(input);
}

export async function getChatbotResponse(input: ChatInput) {
  return await chat(input);
}
