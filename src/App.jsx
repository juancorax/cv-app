import { useState } from "react";
import CVForm from "./components/CVForm";
import CVSubmitted from "./components/CVSubmitted";

const newExp = (section) => {
  return section === "educationalExp"
    ? {
        id: crypto.randomUUID(),
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
      }
    : {
        id: crypto.randomUUID(),
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        from: "",
        until: "",
      };
};

const cvInfoInitialState = {
  generalInfo: { name: "", email: "", phone: "" },
  educationalExp: [newExp("educationalExp")],
  practicalExp: [newExp("practicalExp")],
};

function App() {
  const [cvInfo, setCVInfo] = useState(cvInfoInitialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (section, index, e) => {
    const { name, value } = e.target;

    setCVInfo((prevCVInfo) => {
      if (section === null && index === null) {
        return {
          ...prevCVInfo,
          generalInfo: {
            ...prevCVInfo.generalInfo,
            [name]: value,
          },
        };
      }

      const updatedSection = [...prevCVInfo[section]];
      updatedSection[index] = {
        ...updatedSection[index],
        [name]: value,
      };

      return {
        ...prevCVInfo,
        [section]: updatedSection,
      };
    });
  };

  const addExp = (section) => {
    setCVInfo((prevCVInfo) => ({
      ...prevCVInfo,
      [section]: [...prevCVInfo[section], newExp(section)],
    }));
  };

  const removeExp = (section, index) => {
    setCVInfo((prevCVInfo) => {
      const updatedSection = [...prevCVInfo[section]];
      updatedSection.splice(index, 1);

      return {
        ...prevCVInfo,
        [section]: updatedSection,
      };
    });
  };

  const handleSubmit = () => setIsSubmitted(!isSubmitted);

  return (
    <>
      {isSubmitted ? (
        <CVSubmitted cvInfo={cvInfo} handleSubmit={handleSubmit} />
      ) : (
        <CVForm
          cvInfo={cvInfo}
          handleChange={handleChange}
          addExp={addExp}
          removeExp={removeExp}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default App;
