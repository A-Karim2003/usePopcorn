function Box({ children, className }) {
  return (
    <div className={`box ${className}`}>
      <button className="collapsible-toggle">-</button>
      {children}
    </div>
  );
}

export default Box;
