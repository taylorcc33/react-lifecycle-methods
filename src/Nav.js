import { useState } from "react";
import { Menu } from "semantic-ui-react";
import Counter from "./Counter";

export default (props) => {
  const [showCounter, setShowCounter] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  return (
    <>
      <div>
        <Menu>
          <Menu.Item
            name="showCounter"
            active={setActiveItem === "showCounter"}
            onClick={() => setShowCounter(!showCounter)}
          >
            {showCounter ? "Hide Counters" : "Show Counters"}
          </Menu.Item>
        </Menu>
      </div>
      <div>{showCounter && <Counter />}</div>
    </>
  );
};
