'use client';

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const appointmentFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  company: z.string().optional(),
  email: z.string().email('Por favor, introduce una dirección de correo electrónico válida.'),
  phone: z.string().optional(),
  service: z.string({ required_error: 'Por favor, selecciona un servicio.' }),
  preferredDate: z.date({ required_error: 'Se requiere una fecha de preferencia.' }),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

type AppointmentFormValues = z.infer<typeof appointmentFormSchema>;

export default function AppointmentsPage() {
  const { toast } = useToast();
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(data: AppointmentFormValues) {
    console.log(data);
    toast({
      title: '¡Solicitud de Cita Enviada!',
      description: 'Gracias. Hemos recibido tu solicitud y te contactaremos en breve para confirmar.',
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <Card className="overflow-hidden shadow-lg">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Agendar una Cita</CardTitle>
              <CardDescription className="text-lg mt-2">
                Solicita una sesión de diagnóstico o asesoramiento con nuestros expertos. Completa el formulario a continuación y nos pondremos en contacto contigo para coordinar un horario conveniente.
              </CardDescription>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
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
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu Empresa S.A." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
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
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono (Opcional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Servicio de Interés</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un servicio" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="integral-maintenance">Mantenimiento Integral</SelectItem>
                            <SelectItem value="fabrication-modifications">Fabricación y Modificaciones</SelectItem>
                            <SelectItem value="technical-assistance">Asistencia Técnica In-Situ</SelectItem>
                            <SelectItem value="industrial-solutions">Soluciones Industriales</SelectItem>
                            <SelectItem value="other">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Fecha de Preferencia</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={'outline'}
                                className={cn(
                                  'w-full pl-3 text-left font-normal',
                                  !field.value && 'text-muted-foreground'
                                )}
                              >
                                {field.value ? format(field.value, 'PPP') : <span>Elige una fecha</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date() || date < new Date('1900-01-01')}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Información Adicional</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Cuéntanos un poco más sobre tus necesidades..."
                          className="resize-none"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full">Solicitar Cita</Button>
              </form>
            </Form>
          </div>
          <div className="hidden md:block">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Técnico agendando"
              width={600}
              height={800}
              className="object-cover w-full h-full"
              data-ai-hint="technician appointment"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
