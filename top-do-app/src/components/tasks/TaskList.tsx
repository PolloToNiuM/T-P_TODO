import { TaskItem, type TaskItemProps } from "./TaskItem";

export type TaskListProps = {
  tasks: TaskItemProps[];
};

export function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="text-sm text-zinc-500">Aucune tâche pour le moment.</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </ul>
  );
}
