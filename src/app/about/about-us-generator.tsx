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
  { value: 'Oil & Gas', label: 'Oil & Gas' },
  { value: 'Manufacturing', label: 'Manufacturing' },
  { value: 'Marine', label: 'Marine & Shipping' },
  { value: 'Construction', label: 'Heavy Construction' },
  { value: 'Power Generation', label: 'Power Generation' },
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
              How We Serve Your Industry
            </CardTitle>
            <CardDescription>
              Select your industry to see how Rima Oil Service's expertise can
              be tailored to your specific needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Select onValueChange={setIndustry} value={industry}>
                <SelectTrigger className="flex-grow">
                  <SelectValue placeholder="Select your industry..." />
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
                    Generating...
                  </>
                ) : (
                  'Generate'
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
                  Your personalized "About Us" content will appear here...
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
