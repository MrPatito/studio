import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="text-muted-foreground text-sm">
              Su socio de confianza para soluciones industriales y del sector petrolero.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Inicio</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Servicios</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">Sobre Nosotros</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contáctenos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@rimaoil.com</li>
              <li>+1 (234) 567-890</li>
              <li>123 Avenida Industrial, Houston, TX</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Rima Oil Services. Todos los Derechos Reservados.</p>
        </div>
      </div>
    </footer>
  );
}
