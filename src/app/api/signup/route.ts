import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { users } from '@/lib/schema';
import bcrypt from 'bcryptjs';

const signupSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  agency: z.string().optional(),
  clients: z.number().int().positive().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedData = signupSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json({ error: parsedData.error.flatten().fieldErrors }, { status: 400 });
    }

    const { name, email, password, agency, clients } = parsedData.data;

    const existingUser = await db.select().from(users).where(eq(users.email, email));

    if (existingUser.length > 0) {
      return NextResponse.json({ error: 'User with this email already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.insert(users).values({
      name,
      email,
      password: hashedPassword,
      agency,
      clients,
    });

    return NextResponse.json({ success: true, message: 'Signup successful!' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
