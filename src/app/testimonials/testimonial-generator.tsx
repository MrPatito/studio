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
  clientName: z.string().min(2, 'Se requiere el nombre del cliente.'),
  clientIndustry: z.string().min(2, 'Se requiere la industria del cliente.'),
  projectDescription: z.string().min(20, 'La descripción del proyecto debe tener al menos 20 caracteres.'),
  projectResults: z.string().min(10, 'Los resultados del proyecto deben tener al menos 10 caracteres.'),
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
          title: '¡Éxito!',
          description: 'Testimonio generado con éxito.',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'No se pudo generar el testimonio.',
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
          <CardTitle>Detalles del Proyecto</CardTitle>
          <CardDescription>
            Ingrese la información sobre el proyecto completado.
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
                    <FormLabel>Nombre del Cliente</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: PetroCorp Global" {...field} />
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
                    <FormLabel>Industria del Cliente</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Exploración Petrolera" {...field} />
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
                    <FormLabel>Descripción del Proyecto</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe el proyecto, incluyendo metas, desafíos y soluciones proporcionadas."
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
                    <FormLabel>Resultados del Proyecto</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe los resultados cuantificables y los beneficios que el cliente experimentó."
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
                    Generando...
                  </>
                ) : (
                  'Generar Testimonio'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Testimonio Generado</CardTitle>
          <CardDescription>
            El contenido generado por IA aparecerá a continuación.
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
              <p className="text-muted-foreground text-center">Su testimonio generado se mostrará aquí.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
