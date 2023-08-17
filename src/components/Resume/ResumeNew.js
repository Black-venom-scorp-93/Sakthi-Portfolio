import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Sakthi Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;




const PDF_FILE_URL = 'https://drive.google.com/file/d/1fBJvaBTm-d3lOssngQ7cJxaYOXF2TJ_l/view?usp=drive_link';
function ResumeNew() {
  const [width, setWidth] = useState(1200);

  const downloadFileAtURL=(url)=>{
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href=url;
    aTag.setAttribute('download',fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
 }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.5} />
            {/* <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} /> */}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
