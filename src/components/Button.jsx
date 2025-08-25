function Button({ className, onClick, children }) {
  return (
    <button className={`collapsible-toggle ${className}`}>{children}</button>
  );
}

export default Button;
