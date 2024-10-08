import React from 'react';
import Link from 'next/link';
import { CircleUser, ShoppingBagIcon, Store } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import logo from '@/../public/logo/LogoBrown.svg';
import Image from 'next/image';
import { Furnish3DLogo } from './Furnish3dLogo';

interface Props {}

export default async function Navbar({}: Props) {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  return (
    <header className='sticky top-0 z-[100] w-full overflow-hidden border-b bg-card opacity-80 shadow-2xl'>
      <div className='flex w-full items-center justify-between py-4'>
        <div className='ml-2 grow-0'>
          <Link href='/'>
            <Furnish3DLogo />
          </Link>
        </div>

        <div className='flex items-center'>
          {session ? (
            <div className='flex'>
              <Link
                href='/cart'
                className='transition-all hover:text-primary/70'
              >
                <div className='flex items-center gap-3 rounded-lg'>
                  <Button variant='ghost'>
                    <ShoppingBagIcon className='size-4' />
                    <span className='hidden sm:ml-2 sm:inline'>Wishlist</span>
                  </Button>
                </div>
              </Link>
              <Link
                href='/inventory'
                className='transition-all hover:text-primary/70'
              >
                <div className='flex items-center gap-3 rounded-lg'>
                  <Button variant='ghost'>
                    <Store className='size-4' />
                    <span className='hidden sm:ml-2 sm:inline'>Inventory</span>
                  </Button>
                </div>
              </Link>
              <div className='sm:mx-2'>
                <ThemeToggle />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='icon' className='rounded-full'>
                    <CircleUser className='size-5' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuItem className='flex'>
                    <Link className='grow' href='/cart'>
                      Wishlist
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='flex'>
                    <LogoutLink className='grow'>Logout</LogoutLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className='flex'>
              <div>
                <ThemeToggle />
              </div>

              <LoginLink className='mx-2'>
                <Button variant='secondary'>Login</Button>
              </LoginLink>
              <RegisterLink className='mr-2'>
                <Button>Register</Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
