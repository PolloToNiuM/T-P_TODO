export type TaskItemProps = {
  id: string;
  title: string;
  completed?: boolean;
};

export function TaskItem({ id, title, completed = false }: TaskItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-md border border-zinc-200 bg-white px-3 py-2">
      <input
        id={id}
        type="checkbox"
        defaultChecked={completed}
        className="size-4 rounded border-zinc-300"
      />
      <label
        htmlFor={id}
        className={completed ? "text-sm text-zinc-400 line-through" : "text-sm"}
      >
        {title}
      </label>
    </li>
  );
}
