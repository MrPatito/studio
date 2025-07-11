'use server';

import {
  generateTailoredAboutUs,
  type TailoredAboutUsInput,
} from '@/ai/flows/ai-enhanced-about-us';
import {
  generateTestimonial,
  type GenerateTestimonialInput,
} from '@/ai/flows/dynamic-testimonials';

export async function getTailoredAboutUs(input: TailoredAboutUsInput) {
  return await generateTailoredAboutUs(input);
}

export async function getGeneratedTestimonial(input: GenerateTestimonialInput) {
  return await generateTestimonial(input);
}
