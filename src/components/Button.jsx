function Button({ className, onClick, children }) {
  return (
    <button className={`collapsible-toggle ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
