export default function AppSelect({ options, value, setValue, initValue }) {
  return (
    <select value={value} onChange={(e) => setValue(e.target.value)}>
      <option value={0}>{initValue}</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}
