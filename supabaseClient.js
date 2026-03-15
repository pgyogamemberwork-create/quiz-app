import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://hlkmffnbilhchimxyilh.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_8NegZvRtaKWRKIEIZlQdYA_D-C1zfr8'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
