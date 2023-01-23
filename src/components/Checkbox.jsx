const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default Checkbox;

{
  /* <Checkbox
        label="My Value"
        value={checked}
        onChange={handleChange}
      /> */
}
