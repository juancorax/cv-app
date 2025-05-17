import Input from "./Input.jsx";

export default function EducationalExp({ educationalExp, onChange }) {
  return (
    <section>
      <Input
        label="School Name:"
        name="schoolName"
        value={educationalExp.schoolName}
        onChange={onChange}
      />

      <Input
        label="Title of Study:"
        name="titleOfStudy"
        value={educationalExp.titleOfStudy}
        onChange={onChange}
      />

      <Input
        label="Date of Study:"
        type="date"
        name="dateOfStudy"
        value={educationalExp.dateOfStudy}
        onChange={onChange}
      />
    </section>
  );
}
