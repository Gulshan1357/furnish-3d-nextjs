import Link from 'next/link';
import { ReactNode } from 'react';
import { InventoryComponents } from '../components/inventory/InventoryComponents';
import { CircleUser, Settings, ShoppingCart, Store } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

export const navLinks = [
  {
    name: 'Inventory',
    href: '/inventory',
    icon: Store,
  },
  {
    name: 'Cart',
    href: '/inventory/cart',
    icon: ShoppingCart,
  },
  {
    name: 'Configurator',
    href: '/configurator',
    icon: Settings,
  },
];

export default function InventroyLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      {/* topbar? */}
      <header>
        <div className='bg-slate-400'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <h3>Furnish3D</h3>
          </Link>
        </div>
        <div className='bg-slate-300'>
          {/* Navbar ? */}
          <InventoryComponents />
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='secondary' size='icon' className='rounded-full'>
                <CircleUser className='h-5 w-5' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem>
                <LogoutLink>Logout</LogoutLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main>{children}</main>
    </section>
  );
}
