"use client";
import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav/Nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initAnimations, cleanupAnimations } from "@/utils/anime";
import projectsData from "./project-data";
import "./project.css";

gsap.registerPlugin(ScrollTrigger);

const ProjectPage = () => {
  const params = useParams();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const snapshotsInitialized = useRef(false);

  const projectId = params.id;
  const project = projectsData[projectId];

  // Redirect if project not found
  useEffect(() => {
    if (mounted && !project) {
      router.push("/case-studies");
    }
  }, [mounted, project, router]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Reset snapshots when project changes
    snapshotsInitialized.current = false;

    initAnimations();

    if (!snapshotsInitialized.current) {
      setTimeout(() => {
        initSnapshotsScroll();
        snapshotsInitialized.current = true;
      }, 100);
    }

    // Cleanup function
    return () => {
      // Kill all ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      
      // Cleanup SplitText instances from animations
      cleanupAnimations();
      
      // Kill GSAP tweens for project page elements only
      const projectElements = document.querySelectorAll('.project-header, .project-info, .project-banner-img, .project-snapshots, .project-review');
      projectElements.forEach(el => gsap.killTweensOf(el));
    };
  }, [mounted, projectId]);

  const initSnapshotsScroll = () => {
    const wrapper = document.querySelector(".project-snapshots-wrapper");
    const snapshotsSection = document.querySelector(".project-snapshots");
    const progressBar = document.querySelector(".progress-bar");

    if (!wrapper || !snapshotsSection || !progressBar) return;

    ScrollTrigger.refresh();

    const calculateDimensions = () => {
      const wrapperWidth = wrapper.offsetWidth;
      const viewportWidth = window.innerWidth;
      return -(wrapperWidth - viewportWidth);
    };

    let moveDistance = calculateDimensions();

    const isSafari = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    );
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    ScrollTrigger.create({
      trigger: ".project-snapshots",
      start: "top top",
      end: () => `+=${window.innerHeight * 5}px`,
      pin: true,
      pinSpacing: true,
      scrub: isSafari && isIOS ? 0.5 : 1,
      invalidateOnRefresh: true,
      onRefresh: () => {
        moveDistance = calculateDimensions();
      },
      onUpdate: (self) => {
        const progress = self.progress;
        const currentTranslateX = progress * moveDistance;

        gsap.set(wrapper, {
          x: currentTranslateX,
          force3D: true,
          transformOrigin: "left center",
        });

        if (progressBar) {
          gsap.set(progressBar, {
            width: `${progress * 100}%`,
          });
        }
      },
    });

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        moveDistance = calculateDimensions();
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", () => {
      setTimeout(handleResize, 500);
    });

    if (isIOS) {
      const setViewportHeight = () => {
        document.documentElement.style.setProperty(
          "--vh",
          `${window.innerHeight * 0.01}px`
        );
      };

      setViewportHeight();
      window.addEventListener("resize", setViewportHeight);
      window.addEventListener("orientationchange", () => {
        setTimeout(setViewportHeight, 500);
      });
    }
  };

  if (!mounted || !project) return null;

  return (
    <div key={`project-${projectId}-wrapper`}>
      <Nav />

      <section className="project-header">
        <div className="container">
          <div className="project-title">
            <h3 data-animate-type="reveal" data-animate-delay="0.25">
              {project.title}
            </h3>
          </div>
          <div className="project-header-divider"></div>
          <div className="project-meta">
            <div className="project-meta-col">
              <p data-animate-type="line-reveal" data-animate-delay="0.25">
                {project.url}
              </p>
              <p data-animate-type="line-reveal" data-animate-delay="0.3">
                {project.type}
              </p>
            </div>
            <div className="project-meta-col">
              <div className="project-meta-sub-col">
                <p data-animate-type="line-reveal" data-animate-delay="0.25">
                  {project.date}
                </p>
                <p data-animate-type="line-reveal" data-animate-delay="0.3">
                  {project.category}
                </p>
              </div>
              <div className="project-meta-sub-col">
                <p data-animate-type="line-reveal" data-animate-delay="0.25">
                  Client
                </p>
                <p data-animate-type="line-reveal" data-animate-delay="0.3">
                  {project.client}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-banner-img">
        <div className="container">
          <img src={project.bannerImg} alt={project.title} />
        </div>
      </section>

      <section className="project-overview">
        <div className="container">
          <div className="project-overview-col"></div>
          <div className="project-overview-col">
            <div className="project-stack">
              <p
                className="mono"
                data-animate-type="scramble"
                data-animate-delay="0.2"
                data-animate-on-scroll="true"
              >
                <span>&#9654;</span> Stack
              </p>
              <br />
              {project.stack.map((tech, index) => (
                <p
                  key={index}
                  data-animate-type="line-reveal"
                  data-animate-delay={0.3 + index * 0.1}
                  data-animate-on-scroll="true"
                >
                  {tech}
                </p>
              ))}
            </div>
            <div className="project-overview-copy">
              <p
                className="mono"
                data-animate-type="scramble"
                data-animate-delay="0.9"
                data-animate-on-scroll="true"
              >
                <span>&#9654;</span> Background
              </p>
              <br />
              <p
                data-animate-type="line-reveal"
                data-animate-delay="1"
                data-animate-on-scroll="true"
              >
                {project.background}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-snapshots">
        <div className="home-spotlight-top-bar">
          <div className="container">
            <div className="symbols-container">
              <div className="symbol">
                <img src="/logos/Rajsera-icon-light.svg" alt="Symbol" />
              </div>
            </div>
            <div className="symbols-container">
              <div className="symbol">
                <img src="/logos/Rajsera-icon-light.svg" alt="Symbol" />
              </div>
            </div>
          </div>
        </div>
        <div className="home-spotlight-bottom-bar">
          <div className="container">
            <p
              className="mono"
              data-animate-type="scramble"
              data-animate-delay="0.2"
              data-animate-on-scroll="true"
            >
              <span>&#9654;</span> Interface Study
            </p>
            <p
              className="mono"
              data-animate-type="scramble"
              data-animate-delay="0.25"
              data-animate-on-scroll="true"
            >
              / Design Showcase
            </p>
          </div>
        </div>
        <div className="project-snapshots-wrapper">
          <div className="project-snapshot">
            <img src="/project-images/project-img-1.jpg" alt="" />
          </div>
          <div className="project-snapshot">
            <img src="/project-images/project-img-2.jpg" alt="" />
          </div>
          <div className="project-snapshot">
            <img src="/project-images/project-img-3.jpg" alt="" />
          </div>
          <div className="project-snapshot">
            <img src="/project-images/project-img-4.jpg" alt="" />
          </div>
          <div className="project-snapshot">
            <img src="/project-images/project-img-1.jpg" alt="" />
          </div>
        </div>
        <div className="snapshots-progress-bar">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="progress-indicator"></div>
          ))}
          <div className="progress-bar"></div>
        </div>
      </section>

      <section className="project-info">
        <div className="container">
          <div className="project-info-col"></div>
          <div className="project-info-col">
            <div className="project-info-copy">
              <p
                className="mono"
                data-animate-type="scramble"
                data-animate-delay="0.2"
                data-animate-on-scroll="true"
              >
                <span>&#9654;</span> Client Review
              </p>
              <br />
              <p
                data-animate-type="line-reveal"
                data-animate-delay="0.25"
                data-animate-on-scroll="true"
              >
                {project.clientReview[0]}
              </p>
              <br />
              <p
                data-animate-type="line-reveal"
                data-animate-delay="0.7"
                data-animate-on-scroll="true"
              >
                {project.clientReview[1]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Link href={`/case-studies/${project.nextProject.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <section className="next-project" style={{ cursor: 'pointer' }}>
          <div className="home-spotlight-top-bar">
            <div className="container">
              <div className="symbols-container">
                <div className="symbol">
                  <img src="/logos/Rajsera-icon-light.svg" alt="Symbol" />
                </div>
              </div>
              <div className="symbols-container">
                <div className="symbol">
                  <img src="/logos/Rajsera-icon-light.svg" alt="Symbol" />
                </div>
              </div>
            </div>
          </div>
          <div className="container next-project-data">
            <div className="next-project-title">
              <h3>{project.nextProject.title}</h3>
            </div>
            <div className="next-project-header-divider"></div>
            <div className="next-project-meta">
              <div className="next-project-meta-col">
                <p>{project.nextProject.url}</p>
                <p>{project.nextProject.type}</p>
              </div>
              <div className="next-project-meta-col">
                <div className="next-project-meta-sub-col">
                  <p>{project.nextProject.date}</p>
                  <p>{project.nextProject.category}</p>
                </div>
                <div className="next-project-meta-sub-col">
                  <p>Client</p>
                  <p>{project.nextProject.client}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home-spotlight-bottom-bar">
            <div className="container">
              <p className="mono">
                <span>&#9654;</span> Next Case Study
              </p>
              <p className="mono">/ Portfolio Showcase</p>
            </div>
          </div>
        </section>
      </Link>
    </div>
  );
};

export default ProjectPage;

