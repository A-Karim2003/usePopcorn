import Button from "../components/Button";
import { useState } from "react";

function Box({ children, className }) {
  // state to show/hide search results & watched results

  const [toggled, setToggled] = useState(false);

  return (
    <section className={`box ${className}`}>
      <Button
        className={"box-btn"}
        onClick={() => setToggled((isToggled) => !isToggled)}
      >
        {toggled ? "+" : "-"}
      </Button>

      {!toggled && children}
    </section>
  );
}

export default Box;
