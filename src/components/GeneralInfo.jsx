import Input from "./Input.jsx";

export default function GeneralInfo({ generalInfo, onChange }) {
  return (
    <section>
      <Input
        label="Name:"
        name="name"
        value={generalInfo.name}
        onChange={onChange}
      />

      <Input
        label="Email:"
        type="email"
        name="email"
        value={generalInfo.email}
        onChange={onChange}
      />

      <Input
        label="Phone:"
        type="tel"
        name="phone"
        value={generalInfo.phone}
        onChange={onChange}
      />
    </section>
  );
}
