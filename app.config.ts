// app.config.ts
export default defineAppConfig({
  ui: {
    button: {
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'text-white bg-brand-700 hover:bg-brand-800 active:bg-brand-900 disabled:bg-brand-500'
        },
        {
          color: 'primary',
          variant: 'outline',
          class: 'ring ring-inset ring-brand-700 text-brand-800 hover:bg-brand-50'
        }
      ]
    }
  }
})
