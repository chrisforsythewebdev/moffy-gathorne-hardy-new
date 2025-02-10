import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import works from "../data/worksData";
import ProjectNavigation from "../components/ProjectNavigation";

// Import all work-specific components
import ValleyOfTheDolls from "../components/workLayouts/ValleyOfTheDolls.jsx";
import FiveDollarsThreeMinutes from "../components/workLayouts/FiveDollarsThreeMinutes.jsx";
import AutumnCloud from "../components/workLayouts/AutumnCloud.jsx";
import SoftFurnishing from "../components/workLayouts/SoftFurnishings.jsx";
import AlmostSomething from "../components/workLayouts/AlmostSomething.jsx";
import Morena from "../components/workLayouts/Morena.jsx";

// Map component names to actual components
const workComponents = {
  ValleyOfTheDolls,
  FiveDollarsThreeMinutes,
  AutumnCloud,
  SoftFurnishing,
  AlmostSomething,
  Morena,
};

const WorkDetail = () => {
  const { title } = useParams();
  const work = works.find((work) => work.title === decodeURIComponent(title));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [title]);

  if (!work) {
    return <div className="text-center mt-5">Work not found.</div>;
  }

  const WorkComponent = workComponents[work.component];
  const workIndex = works.indexOf(work);
  const prevWork = workIndex > 0 ? works[workIndex - 1] : null;
  const nextWork = workIndex < works.length - 1 ? works[workIndex + 1] : null;

  return (
    <div className="container d-flex flex-column min-vh-100" style={{ paddingBottom: "80px" }}>
      {/* Work Component */}
      <div className="flex-grow-1">
        {WorkComponent ? <WorkComponent /> : <div>Work layout missing.</div>}
      </div>

      {/* Project Navigation */}
      <div className="mt-auto pb-4">
        <ProjectNavigation prevWork={prevWork} nextWork={nextWork} />
      </div>
    </div>
  );
};

export default WorkDetail;

