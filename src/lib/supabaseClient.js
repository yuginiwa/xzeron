
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mdzljfhbkaxrhahqhmzz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kemxqZmhia2F4cmhhaHFobXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxOTg2NTIsImV4cCI6MjA3MTc3NDY1Mn0.idddGyQPdgtXCR0FHFNnrmTdTshWQsRz5houilj6HFY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
