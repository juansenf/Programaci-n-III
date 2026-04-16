export default function ProjectsTeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10">
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-10 shadow-xl shadow-black/30">
          <p className="text-sm uppercase tracking-[0.4em] text-indigo-400">Ruta anidada</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Equipo del proyecto</h1>
          <p className="mt-6 text-zinc-300">
            Esta ruta anidada te muestra como organizar contenido dentro de subcarpetas de la aplicación. Acá podés incluir información del equipo, roles y objetivos del proyecto.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl bg-zinc-950 p-6 ring-1 ring-white/5">
              <h2 className="text-xl font-semibold text-white">Profesor</h2>
              <p className="mt-3 text-zinc-400">Profesor de la materia que nos pide hacer una app sencilla.</p>
            </div>
            <div className="rounded-3xl bg-zinc-950 p-6 ring-1 ring-white/5">
              <h2 className="text-xl font-semibold text-white">Estudiante</h2>
              <p className="mt-3 text-zinc-400">Juansennnn haciendo la tarea. Aprendo y voy probando.</p>
            </div>
            <div className="rounded-3xl bg-zinc-950 p-6 ring-1 ring-white/5">
              <h2 className="text-xl font-semibold text-white">Objetivo</h2>
              <p className="mt-3 text-zinc-400">Mostrar rutas nuevas, anidadas y dinámicas sin mucho misterio.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
