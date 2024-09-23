import React from 'react';
import Link from 'next/link';
import { CircleUser, Store } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
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
import { Furnish3DLogo } from '@/app/components/Furnish3dLogo';

interface Props {}

export default async function Header({}: Props) {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  return (
    <header className='fixed top-0 z-50 w-full'>
      <div className='flex py-4'>
        <div className='grow-0'>
          <Link href='/'>
            <Furnish3DLogo className='h-10 w-20 text-sky-800' />
          </Link>
        </div>

        <div className='flex grow flex-row-reverse'>
          {session ? (
            <div className='flex'>
              <div>
                <Link
                  href='/inventory'
                  className='flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary/70'
                >
                  <Store className='size-4' />
                  Inventory
                </Link>
              </div>

              <ThemeToggle />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='secondary'
                    size='icon'
                    className='rounded-full'
                  >
                    <CircleUser className='h-5 w-5' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuItem className='flex'>
                    <Link className='grow' href='/inventory/cart'>
                      Cart
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
              <RegisterLink>
                <Button>Register</Button>
              </RegisterLink>
              <LoginLink>
                <Button>Login</Button>
              </LoginLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
