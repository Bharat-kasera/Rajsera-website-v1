import "./projects.css";
import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Projects & Portfolio | Rajsera Labs",
  description: "Explore our portfolio of successful web and mobile app projects. From creative agencies to crypto platforms, see how we've helped businesses create exceptional digital experiences.",
  openGraph: {
    title: "Projects & Portfolio | Rajsera Labs",
    description: "Explore our portfolio of successful web and mobile app projects including creative agencies, real estate platforms, crypto trading apps, and more.",
    type: "website",
  },
};

const ProjectsPage = () => {
  return (
    <div key="projects-page-wrapper">
      <ProjectsClient />
    </div>
  );
};

export default ProjectsPage;
