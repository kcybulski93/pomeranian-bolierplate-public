import './styles.css';

export const SingleQuestion = ({ question, answer }) => {
  return (
    <div>
      <div className="wrapper">
        <h1 className="title">{question}</h1>
        <div className="line" />
        <p className="content">{answer}</p>
      </div>
    </div>
  );
};
