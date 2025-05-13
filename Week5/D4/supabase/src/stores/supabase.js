import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://olppfuuosbmkrrtjfwho.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9scHBmdXVvc2Jta3JydGpmd2hvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMTc1ODYsImV4cCI6MjA2MjY5MzU4Nn0.zq_OlG2BumMRlcwJwJXuxlV6oLmqdZJLYsMrHi6RB78'

export const supabase = createClient(supabaseUrl, supabaseKey)
