const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <div className="sidebar-label-container">
      <label className="sidebar-label-container ar">{title}</label>
      <input onChange={handleChange} type="radio" value={value} name={name} />
    </div>
  );
};

export default Input;
