'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getGeneratedTestimonial } from '../(ai)/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Quote } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const testimonialFormSchema = z.object({
  clientName: z.string().min(2, 'Client name is required.'),
  clientIndustry: z.string().min(2, 'Client industry is required.'),
  projectDescription: z.string().min(20, 'Project description must be at least 20 characters.'),
  projectResults: z.string().min(10, 'Project results must be at least 10 characters.'),
});

type TestimonialFormValues = z.infer<typeof testimonialFormSchema>;

export default function TestimonialGenerator() {
  const { toast } = useToast();
  const [generatedTestimonial, setGeneratedTestimonial] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialFormSchema),
    defaultValues: {
      clientName: '',
      clientIndustry: '',
      projectDescription: '',
      projectResults: '',
    },
  });

  async function onSubmit(data: TestimonialFormValues) {
    setIsLoading(true);
    setGeneratedTestimonial('');
    try {
      const result = await getGeneratedTestimonial(data);
      if (result) {
        setGeneratedTestimonial(result.testimonial);
        toast({
          title: 'Success!',
          description: 'Testimonial generated successfully.',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to generate testimonial.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
          <CardDescription>
            Enter the information about the completed project.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="clientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Global PetroCorp" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="clientIndustry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Industry</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Oil Exploration" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the project, including goals, challenges, and solutions provided."
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectResults"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Results</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the quantifiable results and benefits the client experienced."
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Testimonial'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Generated Testimonial</CardTitle>
          <CardDescription>
            The AI-generated content will appear below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 rounded-lg p-6 min-h-[300px] flex items-center justify-center">
            {isLoading ? (
                <div className="space-y-2 w-full">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
            ) : generatedTestimonial ? (
              <blockquote className="text-lg italic text-foreground relative">
                <Quote className="absolute -top-4 -left-6 w-8 h-8 text-primary/30" />
                {generatedTestimonial}
              </blockquote>
            ) : (
              <p className="text-muted-foreground text-center">Your generated testimonial will be displayed here.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
