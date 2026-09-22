const Header = (props) => {
  return <h2>{props.course}</h2>;
};
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};
const Total = (props) => {
  const sum = props.parts.reduce((s, part) => {
    return s + part.exercises;
  }, 0);

  return <b>Total of {sum} exercises</b>;
};
const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.id} part={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
};
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
export default Course;
