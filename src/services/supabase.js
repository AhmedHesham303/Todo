import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gmvgakntvxqobliwxxir.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdtdmdha250dnhxb2JsaXd4eGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2OTU1NTQsImV4cCI6MjA3MDI3MTU1NH0.ANVo7MrhIVi1y8WZ1xr1Mx_F31iEVXCrT6akxqmcjdI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
