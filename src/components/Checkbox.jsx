const Checkbox = ({ label, value, onChange, name }) => {
  return (
    <>
      <input
        name={name}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <label>{label}</label>
    </>
  );
};

export default Checkbox;
