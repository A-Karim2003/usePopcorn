import Button from "../components/Button";

function Box({ children, className, onToggleBtn }) {
  return (
    <section className={`box ${className}`}>
      <Button className={"box-btn"} onClick={onToggleBtn}>
        -
      </Button>
      {children}
    </section>
  );
}

export default Box;
