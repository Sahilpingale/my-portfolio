import { createClient } from '@supabase/supabase-js'
console.log(process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL,"ennv")
export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );