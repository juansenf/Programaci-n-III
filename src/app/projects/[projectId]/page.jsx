import Link from "next/link";

export default function ProjectDetailPage({ params }) {
  const { projectId } = params;

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <main className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10">
        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/95 p-10 shadow-xl shadow-black/30">
          <p className="text-sm uppercase tracking-[0.4em] text-indigo-400">Ruta dinámica</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Proyecto: {projectId}</h1>
          <p className="mt-6 text-zinc-300">
            Esta página usa un parámetro dinámico desde la URL. El identificador que pongas acá se muestra en la página.
          </p>

          <div className="mt-10 rounded-3xl bg-zinc-950 p-6 ring-1 ring-white/5">
            <h2 className="text-2xl font-semibold text-white">Detalles del proyecto</h2>
            <p className="mt-4 text-zinc-400">
              El nombre que pongas en la ruta <code className="rounded bg-zinc-800 px-2 py-1 text-sm">/projects/[projectId]</code> aparece acá.
            </p>
            <p className="mt-4 text-zinc-400">
              Por ejemplo: <strong>/projects/alpha</strong> o <strong>/projects/beta</strong>. Yo solo lo uso para mostrar que funciona.
            </p>
          </div>

          <div className="mt-10">
            <Link href="/projects" className="inline-flex rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
              Volver a Proyectos
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
