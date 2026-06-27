import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env.NEXT_PUBLIC_SUPABASE_URL!;

if (!connectionString) {
  throw new Error('SUPABASE_URL environment variable is not set');
}

const client = postgres(connectionString);

export const db = drizzle(client);