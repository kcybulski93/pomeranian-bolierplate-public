import './styles.css';

export const RoundImage = (props) => {
  console.log(props);
  return (
    <div
      className="round-image"
      style={{
        backgroundImage: `url(${props.src})`,
        width: `${props.size}px`,
        height: `${props.size}px`,
      }}
    ></div>
  );
};
