import { NextResponse } from "next/server";
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { revalidatePath } from "next/cache";



export const POST = async () => {
    const user = await getUserByClerkID();
    const entry = await prisma.journalEntry.create({
        data: {
            userId: user.id,
            content: "Write about your day here",
        },
    });

    revalidatePath("/journal");

    return NextResponse.json({ data: entry });
}