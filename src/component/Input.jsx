const Input = ({ value, title, name, color,  hendalSelect }) => {
    return (
      <label className="sidebar-label-container">
        <input type="radio" onClick={hendalSelect} value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    );
  };
  
  export default Input;