import { useBooksContext } from "../../pges/OurBooks";

const Input = ({ value, title, name }) => {
  const { handleChange } = useBooksContext();
  return (
    <div className="sidebar-label-container">
      <label className="sidebar-label-container ar">{title}</label>
      <input onChange={handleChange} type="radio" value={value} name={name} />
    </div>
  );
};

export default Input;
