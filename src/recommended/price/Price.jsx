import Input from "../../component/Input";
import "./Price.css";

const Price = ( {hendalSelect}) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label >
          <input onClick={hendalSelect} type="radio" value="All" name="test2" />

          <span className="checkmark"></span>All
        </label>

        <Input
         hendalSelect= {hendalSelect}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
         hendalSelect= {hendalSelect}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
         hendalSelect= {hendalSelect}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
         hendalSelect= {hendalSelect}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;