const ByCondition = ({ condition, ifTrue, ifFalse }) => {
  return condition ? { ...ifTrue } : { ...ifFalse };
};

export default ByCondition;
