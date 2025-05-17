import "../styles/CVSubmitted.css";

export default function CVSubmitted({ cvInfo, handleSubmit }) {
  return (
    <div className="cv-submitted">
      <div className="button-group">
        <button onClick={handleSubmit} className="edit-button">
          Edit
        </button>
        <button onClick={() => window.print()} className="print-button">
          Print
        </button>
      </div>

      <header className="cv-header">
        <h1>{cvInfo.generalInfo.name}</h1>
        <div className="contact-info">
          <p>{cvInfo.generalInfo.email}</p>
          <p>{cvInfo.generalInfo.phone}</p>
        </div>
      </header>

      <section className="cv-section">
        <h2>Educational Experience</h2>
        <hr />
        {cvInfo.educationalExp.map((education) => (
          <div key={education.id} className="cv-entry">
            <h3>{education.schoolName}</h3>
            <p>{education.titleOfStudy}</p>
            <p className="date">{education.dateOfStudy}</p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>Practical Experience</h2>
        <hr />
        {cvInfo.practicalExp.map((job) => (
          <div key={job.id} className="cv-entry">
            <h3>{job.companyName}</h3>
            <p>{job.positionTitle}</p>
            <p className="date">
              {job.from} - {job.until}
            </p>
            <p className="responsibilities">{job.mainResponsibilities}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
