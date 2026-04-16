import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-10 shadow-xl shadow-black/30">
          <p className="text-sm uppercase tracking-[0.4em] text-indigo-400">Ruta nueva</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Página de Proyectos</h1>
          <p className="mt-6 text-zinc-300">
            Esta es una página nueva. Desde acá podés ir a la ruta anidada del equipo o a la ruta dinámica de proyecto.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/projects/team" className="inline-flex rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
              Ver equipo
            </Link>
            <Link href="/projects/alpha" className="inline-flex rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-indigo-400 hover:text-indigo-300">
              Ver proyecto dinámico
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
