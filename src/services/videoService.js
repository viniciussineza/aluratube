import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://vaqznevwkffmsnmkgdey.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhcXpuZXZ3a2ZmbXNubWtnZGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzODMzNTQsImV4cCI6MTk4Mzk1OTM1NH0.azAJl5yUVnfv7VKQm0-RiqfPIG4UNWxd-2ZSOlkUCHw";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*")
    },
  };
}
