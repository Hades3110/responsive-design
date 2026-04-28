import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary flex flex-col items-center justify-center gap-16 p-8">
      <section className="flex flex-col items-center gap-6">
        <h2 className="text-text-muted text-xs font-semibold uppercase tracking-widest">
          Variants
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6">
        <h2 className="text-text-muted text-xs font-semibold uppercase tracking-widest">
          Sizes
        </h2>
        <div className="flex flex-wrap items-end justify-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6">
        <h2 className="text-text-muted text-xs font-semibold uppercase tracking-widest">
          Disabled
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="outline" disabled>Outline</Button>
        </div>
      </section>
    </main>
  );
}
