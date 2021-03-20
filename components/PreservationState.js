const states = ["-", "+", "++", "+++", "++++", "+++++"];

const PreservationState = ({value}) => {
  return <span>{states[parseInt(value)]}</span>;
};

export default PreservationState;