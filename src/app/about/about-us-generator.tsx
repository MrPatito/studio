'use client';

import { useState, useTransition } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { getTailoredAboutUs } from '../(ai)/actions';
import { Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const industries = [
  { value: 'Petróleo y Gas', label: 'Petróleo y Gas' },
  { value: 'Manufactura', label: 'Manufactura' },
  { value: 'Marítimo y Naval', label: 'Marítimo y Naval' },
  { value: 'Construcción Pesada', label: 'Construcción Pesada' },
  { value: 'Generación de Energía', label: 'Generación de Energía' },
];

export default function AboutUsGenerator() {
  const [industry, setIndustry] = useState('');
  const [content, setContent] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleGenerate = () => {
    if (!industry) return;
    startTransition(async () => {
      const result = await getTailoredAboutUs({ industry });
      if (result) {
        setContent(result.aboutUsContent);
      }
    });
  };

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold font-headline">
              Cómo Servimos a Su Industria
            </CardTitle>
            <CardDescription>
              Seleccione su industria para ver cómo la experiencia de Rima Oil Service puede adaptarse a sus necesidades específicas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Select onValueChange={setIndustry} value={industry}>
                <SelectTrigger className="flex-grow">
                  <SelectValue placeholder="Seleccione su industria..." />
                </SelectTrigger>
                <SelectContent>
                  {industries.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={handleGenerate} disabled={!industry || isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generando...
                  </>
                ) : (
                  'Generar'
                )}
              </Button>
            </div>

            <div className="prose prose-lg max-w-none mt-4 text-foreground rounded-md border bg-muted/30 p-6 min-h-[200px]">
              {isPending ? (
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ) : content ? (
                <p>{content}</p>
              ) : (
                <p className="text-muted-foreground">
                  Su contenido personalizado de "Sobre Nosotros" aparecerá aquí...
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
