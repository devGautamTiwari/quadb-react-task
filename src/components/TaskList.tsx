function TaskList({ children }: { children: React.ReactNode }) {
	return (
		<>
			{/* Add TaskList.Item here */}
			<div className="flex flex-col gap-2">{children}</div>
		</>
	);
}

interface TaskListItemProps {
	id: number;
	name: string;
	onDelete: (id: number) => void;
	onToggle: (id: number) => void;
	isComplete: boolean;
}

TaskList.Item = function TaskListItem({
	id,
	name,
	onDelete,
	onToggle,
	isComplete,
}: TaskListItemProps) {
	return (
		<div className="flex">
			<div
				className={`cursor-pointer select-none flex items-center w-full px-2 py-2  ${
					isComplete ? "line-through bg-rose-100 text-rose-400 opacity-70" : "bg-rose-500 text-rose-50"
				}`}
				onClick={() => onToggle(id)}
			>
				<span>{name}</span>
			</div>
			<button
				type="button"
				onClick={() => onDelete(id)}
				className="button text-rose-900"
			>
				Delete
			</button>
		</div>
	);
};


export default TaskList;
