
interface TaskInputProps {
    onAdd: (task: string) => void;
}

function TaskInput({ onAdd }: TaskInputProps) {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const input = form.elements.namedItem("new-task") as HTMLInputElement;
        if (!input.value.trim()) return;
        onAdd(input.value.trim());
        input.value = "";
    }
    return (
        <div className="">
            <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-2">
                <div className="flex flex-col flex-1">
                    <label htmlFor="new-task" className="text-sm opacity-80  pb-1">Task name</label>
                    <input type="text" id="new-task" name="new-task" className="px-1 py-1 border-2 text-green-900 border-green-100 rounded hover:border-green-200 focus:outline-none focus:border-green-400" placeholder="walk the dog"/>
                </div>
                <button type="submit" className="button rounded bg-green-700 text-green-50 tracking-wider">Add Task</button>
            </form>
        </div>
    );
}

export default TaskInput;