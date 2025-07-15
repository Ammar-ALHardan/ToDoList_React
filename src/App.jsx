import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectState, setprojectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setprojectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function handleAddProject(projectData) {
    setprojectState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    });
  }

  console.log(projectState);

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}/>;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
      onStartAddProject={handleStartAddProject} 
      projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
