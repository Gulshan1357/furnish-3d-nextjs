'use server';

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/app/utils/db";

export async function CreateSavedItemAction(formData: FormData) {
    const { getUser } = getKindeServerSession()

    const user = await getUser();

    if (!user) {
        return redirect('api/auth/login');
    }

    const response = await prisma.savedItem.create({
        data: {
            owner: {
                connect: { id: user.id }
            },
            name: formData.get("name") as string,
            modifier: formData.get("modifier") as string,
            quantity: Number(formData.get('quantity')),

            // Todo: add local path of image
        },
    });

    return redirect('/inventory');
}