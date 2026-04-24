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
            Soy Juansennnn.
          </p>
        </div>

        {/* Seccion que muestre mis notas */}
        <section className='w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-zinc-800 text-white justify-between'>
          <div>
            <h1 className='font-semibold text-lg'>Esta es la página de info de la tarea, hecha con Next.js.</h1>
            <p className='mt-2 text-sm text-zinc-300'>Esta es la página de info de la tarea, hecha con Next.js.</p>
          </div>
        </section>

      </main>
    </div>
  )
}
