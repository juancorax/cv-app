import Input from "./Input.jsx";
import TextArea from "./TextArea.jsx";

export default function PracticalExp({ practicalExp, onChange }) {
  return (
    <section>
      <Input
        label="Company Name:"
        name="companyName"
        value={practicalExp.companyName}
        onChange={onChange}
      />

      <Input
        label="Position Title:"
        name="positionTitle"
        value={practicalExp.positionTitle}
        onChange={onChange}
      />

      <TextArea
        label="Main Responsibilities:"
        name="mainResponsibilities"
        value={practicalExp.mainResponsibilities}
        onChange={onChange}
      />

      <Input
        label="From:"
        type="date"
        name="from"
        value={practicalExp.from}
        onChange={onChange}
      />

      <Input
        label="Until:"
        type="date"
        name="until"
        value={practicalExp.until}
        onChange={onChange}
      />
    </section>
  );
}
