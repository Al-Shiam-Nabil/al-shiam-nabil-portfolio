import React, { useEffect, useRef, useState } from "react";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import { TiTick } from "react-icons/ti";
import { Element } from "react-scroll";
import MotionAnimation from "../Shared/MotionAnimation";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const modalRef = useRef();

  useEffect(() => {
    try {
      fetch("/projects.json")
        .then((res) => res.json())
        .then((data) => {
          setProjects(data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleModal = (id) => {
    console.log(id);
    modalRef.current.showModal();

    if (projects) {
      const findProject = projects.find((e) => e.id === id);
      setDetails(findProject);
    }
  };

  console.log(details);

  return (
    <Element name="projects">
      <Container>
        <Heading>Projects</Heading>

        {loading ? (
          <div className="w-full h-[500px] grid place-items-center">
            <span className="loading loading-spinner loading-xl text-primary"></span>
          </div>
        ) : (
          <MotionAnimation>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-8 gap-y-8 ">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl bg-info-content shadow-lg overflow-hidden"
                >
                  <img
                    src={project?.image}
                    alt={projects?.name}
                    className="w-full h-[150px] sm:h-[300px] object-cover"
                  />
                  <div className="w-full p-4 sm:p-6 space-y-2 sm:space-y-3 ">
                    <h3 className="text-base truncate sm:text-xl font-semibold capitalize">
                      {project?.name}
                    </h3>
                    <p className="hidden sm:block text-sm font-medium text-base-200 ">
                      {project?.shortDescription.slice(0, 100) + "..."}
                    </p>

                    <div className="flex items-center gap-x-4 gap-y-2   flex-wrap sm:flex-nowrap">
                      <button
                        onClick={() => handleModal(project?.id)}
                        className="relative  w-full inline-flex items-center justify-center px-2 md:px-4 py-1.5 sm:py-2 rounded-full overflow-hidden tracking-tighter text-white bg-primary  group cursor-pointer"
                      >
                        <span className="absolute w-0 h-0 transition-all duration-1000 ease-out bg-accent rounded-full group-hover:w-[500px] group-hover:h-57"></span>

                        <span className="relative text-sm sm:text-base font-semibold ">
                          View Details
                        </span>
                      </button>
                      <button className="relative  w-full inline-flex items-center justify-center px-2 md:px-4 py-1.5 sm:py-2 rounded-full overflow-hidden tracking-tighter text-white bg-accent  group cursor-pointer">
                        <span className="absolute w-0 h-0 transition-all duration-1000 ease-out bg-primary rounded-full group-hover:w-[500px] group-hover:h-57"></span>

                        <span className="relative text-sm sm:text-base font-semibold ">
                          <a href={project?.liveLink} target="_blank">
                            Live Preview
                          </a>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </MotionAnimation>
        )}

        <dialog ref={modalRef} className="modal">
          <div className="modal-box max-h-[500px] w-11/12 max-w-2xl">
            <div className="space-y-4">
              <img
                src={details?.image}
                alt={details?.name}
                className="w-full max-h-[350px] object-contain rounded-xl"
              />

              {/* name */}
              <h2 className="text-xl text-primary-content font-semibold capitalize">
                {details?.name}
              </h2>
              <p className=" text-sm">{details?.description}</p>

              <div className="space-y-2">
                <h3 className="font-bold">Key Features </h3>
                <ul>
                  {details?.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex gap-2 mb-2 text-sm">
                      <TiTick className="text-secondary text-xl shrink-0"></TiTick>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold">Technologies </h3>
                <p className="text-sm">{details?.technologies}</p>
              </div>

              <div className="flex gap-3 items-center flex-wrap">
                <button className="btn btn-primary btn-sm rounded-full shadow-none">
                  <a href={details?.clientGithubLink} target="_blank">
                    Client GitHub
                  </a>
                </button>
                {details?.serverGithubLink && (
                  <button className="btn btn-primary btn-sm rounded-full shadow-none">
                    <a href={details?.serverGithubLink} target="_blank">
                      Server GitHub
                    </a>
                  </button>
                )}
              </div>
            </div>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn btn-sm btn-accent shadow-none rounded-full text-white">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </Container>
    </Element>
  );
};

export default Projects;
