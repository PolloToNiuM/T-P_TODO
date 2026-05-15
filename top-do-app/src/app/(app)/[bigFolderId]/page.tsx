export default async function BigFolderPage({
  params,
}: {
  params: Promise<{ bigFolderId: string }>;
}) {
  const { bigFolderId } = await params;

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Dossier {bigFolderId}</h1>
      <p className="text-sm text-zinc-600">
        Les tâches de ce dossier apparaîtront ici.
      </p>
    </section>
  );
}
