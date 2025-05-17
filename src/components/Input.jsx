export default function Input({ label, type = "text", name, value, onChange }) {
  return (
    <label>
      {label}{" "}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}
