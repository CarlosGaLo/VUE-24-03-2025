# Supabase

## Cómo conectar.

1. Créate la cuenta en supabase.
2. Crea el proyecto y la base de datos en supabase.
3. `npm install @supabase/supabase-js` en el proyecto de VSCode
4. Crea el archivo `supabase.js`.

    ```js
    import { createClient } from '@supabase/supabase-js'

    const supabaseUrl = 'https://TU-PROYECTO.supabase.co'
    const supabaseKey = 'TU_CLAVE_PUBLICA'

    export const supabase = createClient(supabaseUrl, supabaseKey)
    ```

5. Crea la store
6. Crea los componentes
