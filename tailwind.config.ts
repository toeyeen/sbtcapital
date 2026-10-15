// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e', // Main base color
          600: '#16a34a', // Hover state color
          700: '#15803d' // Active state color
        }
      }
    }
  }
}
