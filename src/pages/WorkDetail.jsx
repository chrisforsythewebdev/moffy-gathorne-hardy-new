// import React from "react";
// import { useParams } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import img1 from "../images/testimg.avif";
// import img2 from "../images/test2jpg.jpg";
// import img3 from "../images/test3.webp";
// import img4 from "../images/testimg.avif";
// import ProjectNavigation from "../components/ProjectNavigation.jsx";

// const works = [
//   { title: "Project One", image: img1, description: "Description of Project One." },
//   { title: "Project Two", image: img2, description: "Description of Project Two." },
//   { title: "Project Three", image: img3, description: "Description of Project Three." },
//   { title: "Project Four", image: img4, description: "Description of Project Four." },
// ];

// const WorkDetail = () => {
//   const { title } = useParams();
//   const decodedTitle = decodeURIComponent(title);
//   const workIndex = works.findIndex((work) => work.title === decodedTitle);
//   const work = works[workIndex];

//   const prevWork = workIndex > 0 ? works[workIndex - 1] : null;
//   const nextWork = workIndex < works.length - 1 ? works[workIndex + 1] : null;

//   if (!work) {
//     return <div className="text-center mt-5">Work not found.</div>;
//   }

//   return (
//     <div className="container d-flex flex-column min-vh-100 pb-5 mt-5 mt-md-2">
//       {/* Main Content */}
//       <div className="text-center mt-5 flex-grow-1">
//         <h2 className="">{work.title}</h2>
        
//         <div className="d-flex justify-content-center">
//           <img
//             src={work.image}
//             alt={work.title}
//             className="img-fluid mt-3"
//             style={{
//               maxWidth: "65vw", // Keep the image within a good size on desktop
//               maxHeight: "60vh",
//               height: "auto",
//               objectFit: "contain",
//             }}
//           />
//         </div>
        
//         <p className="mt-3">{work.description}</p>
//       </div>

//       <div className="mb-5 pb-5">
//         <ProjectNavigation prevWork={prevWork} nextWork={nextWork} />
//       </div>
//     </div>
//   );
// };

// export default WorkDetail;



import React from "react";
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

  if (!work) {
    return <div className="text-center mt-5">Work not found.</div>;
  }

  const WorkComponent = workComponents[work.component];

  return (
    <div className="container">
      {WorkComponent ? <WorkComponent /> : <div>Work layout missing.</div>}
      <ProjectNavigation
        prevWork={works[works.indexOf(work) - 1]}
        nextWork={works[works.indexOf(work) + 1]}
      />
    </div>
  );
};

export default WorkDetail;
