import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-10 shadow-2xl shadow-black/30">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-indigo-400">App de Notas</p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Hola, soy Juansennnn
              </h1>
              <p className="max-w-xl text-zinc-300">
                Mostrar rutas y páginas en Next.js.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/notes" className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
                  Ir a Notas
                </Link>
                <Link href="/projects" className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-indigo-400 hover:text-indigo-300">
                  Ver Proyectos
                </Link>
              </div>
            </div>
            <div className="rounded-3xl bg-zinc-950 p-8 ring-1 ring-white/10 sm:max-w-sm">
              <h2 className="text-xl font-semibold text-white">Qué podés hacer</h2>
              <ul className="mt-6 space-y-4 text-zinc-300">
                <li className="rounded-2xl bg-zinc-900 p-4">
                  <strong className="text-white">CREÁ</strong> notas nuevas o revisa notas ya existentes.
                </li>
                <li className="rounded-2xl bg-zinc-900 p-4">
                  <strong className="text-white">DESCUBRÍ</strong> la nueva sección de proyectos.
                </li>
                <li className="rounded-2xl bg-zinc-900 p-4">
                  <strong className="text-white">NAVEGÁ</strong> mejor y rápido.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="text-2xl font-semibold text-white">Notas</h3>
            <p className="mt-4 text-zinc-400">
              Creá notas nuevas o revisa notas ya existentes.
            </p>
          </article>
          <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="text-2xl font-semibold text-white">Proyectos</h3>
            <p className="mt-4 text-zinc-400">
              Descubrí la nueva sección de proyectos.
            </p>
          </article>
          <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="text-2xl font-semibold text-white">Diseño</h3>
            <p className="mt-4 text-zinc-400">
              Navegación mejorada y enlaces rápidos.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
