import Button from "../components/Button";

function Box({ children, className }) {
  return (
    <section className={`box ${className}`}>
      <Button className={"box-btn"} onClick={onclick}>
        -
      </Button>
      {children}
    </section>
  );
}

export default Box;
