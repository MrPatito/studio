'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  email: z.string().email('Por favor, introduce una dirección de correo electrónico válida.'),
  subject: z.string().min(3, 'El asunto debe tener al menos 3 caracteres.'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: '¡Mensaje Enviado!',
      description: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground">Ponte en Contacto</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Estamos aquí para ayudar. Si tienes una pregunta sobre nuestros servicios, necesitas asistencia técnica o quieres discutir un nuevo proyecto, nuestro equipo está listo para responder a todas tus preguntas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <Card className="h-full shadow-lg">
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
              <CardDescription>Encuéntranos en nuestra oficina o contáctanos por teléfono o correo electrónico.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Nuestra Oficina</h3>
                  <p className="text-muted-foreground">123 Avenida Industrial, Houston, TX, 77001, USA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Escríbenos</h3>
                  <p className="text-muted-foreground">info@rimaoil.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Llámanos</h3>
                  <p className="text-muted-foreground">+1 (234) 567-890</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Envíanos un Mensaje</CardTitle>
              <CardDescription>Completa el formulario y nos pondremos en contacto lo antes posible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Juan Pérez" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Electrónico</FormLabel>
                          <FormControl>
                            <Input placeholder="tu@ejemplo.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Asunto</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: Consulta sobre Mantenimiento" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tu Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Por favor, describe tu consulta en detalle..."
                            className="resize-none"
                            rows={6}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full">Enviar Mensaje</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
