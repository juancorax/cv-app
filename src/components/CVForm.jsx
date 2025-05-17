import GeneralInfo from "./GeneralInfo.jsx";
import EducationalExp from "./EducationalExp.jsx";
import PracticalExp from "./PracticalExp.jsx";
import "../styles/CVForm.css";

export default function CVForm({
  cvInfo,
  handleChange,
  addExp,
  removeExp,
  handleSubmit,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h1>CV App</h1>

      <h2>General Information:</h2>
      <GeneralInfo
        generalInfo={cvInfo.generalInfo}
        onChange={(e) => handleChange(null, null, e)}
      />

      <h2>Educational Experience</h2>
      {cvInfo.educationalExp.map((education, index) => (
        <div key={education.id}>
          <EducationalExp
            educationalExp={education}
            onChange={(e) => handleChange("educationalExp", index, e)}
          />

          {cvInfo.educationalExp.length > 1 && (
            <button
              className="removeButton"
              onClick={(e) => {
                e.preventDefault();
                removeExp("educationalExp", index);
              }}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        className="addButton"
        onClick={(e) => {
          e.preventDefault();
          addExp("educationalExp");
        }}
      >
        Add Education
      </button>

      <h2>Practical Experience</h2>
      {cvInfo.practicalExp.map((job, index) => (
        <div key={job.id}>
          <PracticalExp
            practicalExp={job}
            onChange={(e) => handleChange("practicalExp", index, e)}
          />

          {cvInfo.practicalExp.length > 1 && (
            <button
              className="removeButton"
              onClick={(e) => {
                e.preventDefault();
                removeExp("practicalExp", index);
              }}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        className="addButton"
        onClick={(e) => {
          e.preventDefault();
          addExp("practicalExp");
        }}
      >
        Add Job
      </button>

      <div className="submitButtonContainer">
        <button className="submitButton">Submit</button>
      </div>
    </form>
  );
}
