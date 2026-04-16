import React from 'react'

export default function page() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Sobre mí
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Soy Juansennnn. Esta es la página de info de la tarea, hecha con Next.js. No sé mucho todavía, pero ya pude crear varias rutas y un footer.
          </p>
        </div>

        {/* Seccion que muestre mis notas */}
        <section className='w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-zinc-800 text-white justify-between'>
          <div>
            <h1 className='font-semibold text-lg'>¿Qué hay acá?</h1>
            <p className='mt-2 text-sm text-zinc-300'>Acá conté que hice la app para la tarea y que estoy aprendiendo. Es simple, pero funciona.</p>
          </div>
        </section>

      </main>
    </div>
  )
}
