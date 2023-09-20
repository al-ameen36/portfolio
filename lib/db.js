const { createClient } = require("@supabase/supabase-js");
const { configDotenv } = require("dotenv");

configDotenv();
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export async function getBio() {
  return await supabase.from("bio").select().single();
}

export async function getRoles() {
  return await supabase.from("roles").select();
}

export async function getLinks() {
  return await supabase.from("links").select();
}
