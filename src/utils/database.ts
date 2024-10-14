import { createClient } from '@supabase/supabase-js'

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

let supabase;
if (apiKey && apiUrl) {
  supabase = createClient(apiKey, apiUrl);
}

export { supabase };
