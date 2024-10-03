import React from 'react';
import Link from 'next/link';
import { CircleUser, Store } from 'lucide-react';
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
import { Furnish3DLogo } from '@/app/components/Furnish3dLogo';

interface Props {}

export default async function Navbar({}: Props) {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  return (
    <header className='sticky top-0 z-[100] w-full overflow-hidden'>
      <div className='flex w-full items-center justify-between py-4'>
        <div className='ml-2 grow-0'>
          <Link href='/'>
            <Furnish3DLogo className='h-10 w-20 text-sky-800' />
          </Link>
        </div>

        <div className='flex items-center'>
          {session ? (
            <div className='flex'>
              <div>
                <div>
                  <Link
                    href='/inventory'
                    className='transition-all hover:text-primary/70'
                  >
                    <div className='flex items-center gap-3 rounded-lg px-3'>
                      {/* <Store className='size-4' /> */}

                      <Button variant='ghost'>
                        <Store className='size-4' />
                        <span className='hidden sm:ml-2 sm:inline'>
                          Inventory
                        </span>
                      </Button>
                    </div>
                  </Link>
                </div>
              </div>
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
