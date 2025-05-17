export default function TextArea({ label, name, value, onChange }) {
  return (
    <label>
      {label}
      <br />
      <textarea name={name} value={value} onChange={onChange} required />
    </label>
  );
}
