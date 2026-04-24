export default function ProjectsTeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10">
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-10 shadow-xl shadow-black/30">
          <p className="text-sm uppercase tracking-[0.4em] text-indigo-400">Ruta anidada</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Equipo del proyecto</h1>
          <p className="mt-6 text-zinc-300">
            ruta anidada
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-zinc-950 p-6 ring-1 ring-white/5">
              <h2 className="text-xl font-semibold text-white">Profesor</h2>
              <p className="mt-3 text-zinc-400">Valentino Arballo.</p>
            </div>
            <div className="rounded-3xl bg-zinc-950 p-6 ring-1 ring-white/5">
              <h2 className="text-xl font-semibold text-white">Estudiante</h2>
              <p className="mt-3 text-zinc-400">Juansennnn.</p>
            </div>
            <div className="rounded-3xl bg-zinc-950 p-6 ring-1 ring-white/5">
              <h2 className="text-xl font-semibold text-white">Objetivo</h2>
              <p className="mt-3 text-zinc-400">Mostrar rutas nuevas, anidadas.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
