// app.config.ts
export default defineAppConfig({
  ui: {
    button: {
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'text-brand-dark bg-brand-coral hover:bg-[#D93B30] active:bg-[#C93329] disabled:bg-brand-coral/50'
        },
        {
          color: 'primary',
          variant: 'outline',
          class: 'ring ring-inset ring-brand-link text-brand-link hover:bg-brand-50'
        }
      ]
    }
  }
})
