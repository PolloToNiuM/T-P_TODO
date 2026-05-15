import { TaskList, type TaskListProps } from "./TaskList";

export type CategoryGroupProps = TaskListProps & {
  title: string;
};

export function CategoryGroup({ title, tasks }: CategoryGroupProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        {title}
      </h2>
      <TaskList tasks={tasks} />
    </section>
  );
}
