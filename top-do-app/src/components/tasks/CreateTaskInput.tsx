export function CreateTaskInput() {
  return (
    <form className="flex gap-2">
      <input
        type="text"
        name="title"
        placeholder="Nouvelle tâche"
        className="min-w-0 flex-1 rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400"
      />
      <button className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">
        Ajouter
      </button>
    </form>
  );
}
