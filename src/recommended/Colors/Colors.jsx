import "./Colors.css";
import Input from "../../component/Input";

const Colors = ({hendalSelect}) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onClick={hendalSelect} type="radio" value="All" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          hendalSelect= {hendalSelect}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
         hendalSelect= {hendalSelect}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          hendalSelect= {hendalSelect}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          hendalSelect= {hendalSelect}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="sidebar-label-container">
          <input
          hendalSelect= {hendalSelect}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;