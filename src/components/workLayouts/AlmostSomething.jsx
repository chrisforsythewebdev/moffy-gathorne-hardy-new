import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../pdfExtracts/Almost_Something_Extracted_Pages.pdf";

const AlmostSomething = () => {
  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <h2 className=""><strong>Title:</strong> Almost Something</h2>

          {/* PDF Embed */}
          <div className="text-center mt-4">
            <iframe
              src={pdf}
              title="Five Dollars Three Minutes PDF"
              width="100%"
              height="600px"
              style={{ border: "none" }}
            ></iframe>
          </div>

          {/* Download Link */}
          <div className="text-center mt-3">
            <a href="/Extracted_Pages_37-49.pdf" download className="btn btn-outline-dark">
              Download PDF
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AlmostSomething;
