import prisma from '@/app/utils/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';

// To store the new user data to Supabase db
export async function GET() {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (!user || user == null || !user.id)
      throw new Error('something went wrong with authentication' + user);

    let dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          id: user.id,
          firstName: user.given_name ?? '',
          lastName: user.family_name ?? '',
          email: user.email ?? '',
          profileImage:
            user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
        },
      });
    }

    // local
    // return NextResponse.redirect('http://localhost:3000/inventory');

    // remote
    return NextResponse.redirect('https://furnish-3d.vercel.app/inventory');
  } catch (error) {
    console.error('Error in /api/auth/creation:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
