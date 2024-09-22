import { ReactNode } from 'react';

export default function InventroyLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <main>{children}</main>
    </section>
  );
}
