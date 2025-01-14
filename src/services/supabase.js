import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://uwnnykpgsneuilnaeohw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3bm55a3Bnc25ldWlsbmFlb2h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0ODgzMjIsImV4cCI6MjA1MjA2NDMyMn0.Rz2VxzinPEXryPygn6Q0Kgvu_pqTHRMkiXl2lIUnS6g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

export { supabaseUrl, supabaseKey };
