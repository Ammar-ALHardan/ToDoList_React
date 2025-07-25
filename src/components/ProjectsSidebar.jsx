import Button from "./Button";

export default function ProjectsSidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}) {
    return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-slate-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
        <ul>
            {projects.map((project) => {

                let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
                if (project.id === selectedProjectId) {
                    cssClasses += " bg-stone-800 text-stone-200";
                } else {
                    cssClasses += " bg-stone-400";  
                }
                return (
                    <li key={project.id} className="mt-8">
                    <button 
                    className={cssClasses}
                    onClick={() => onSelectProject(project.id)}
                    >
                        {project.title}
                    </button>
                </li>
                );
            }
            )}
            {projects.length === 0 && (
                <li className="text-stone-400 mt-8">No projects available</li>
            )}
        </ul>   
    </aside>
    );
}