import Select from "react-select";

const Selector = ({value, onChange, options, name, isMulti=false, className="basic-multi-select", defaultValue}) => {
  return (
    <Select
      isMulti={isMulti}
      name={name}
      value={value}
      onChange={onChange}
      options={options}
      className={`${className} w-full`} 
      classNamePrefix="select"
      defaultValue={defaultValue}
    />
  );
};

export default Selector;
