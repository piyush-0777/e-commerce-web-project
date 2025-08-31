import "./Category.css";
import Input from "../../component/Input";

function Category({hendalSelect}) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onClick={hendalSelect}  type="radio" value="All" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
         hendalSelect= {hendalSelect}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
         hendalSelect= {hendalSelect}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
         hendalSelect= {hendalSelect}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
         hendalSelect= {hendalSelect}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;