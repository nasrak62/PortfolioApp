const ShowWhen = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

export default ShowWhen;
