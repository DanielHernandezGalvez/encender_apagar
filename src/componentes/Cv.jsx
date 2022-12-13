import React from "react";
import styled from "styled-components";
import CV from "../curriculum/curriculum.pdf";

const CvContainer = styled.object`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
`;

const Cv = () => {
  return (
    <div>
      <h2>Curriculim Vitae</h2>

      <CvContainer
        src={CV}
        type="application/pdf"
        frameborder="0"
        width="900"
        height="800"
      ></CvContainer>
    </div>
  );
};

export default Cv;
