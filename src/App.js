import "./styles.css";

export default function App() {
  return <Greeting name="Julian" age={27} />;
}

function Greeting({ name, age }) {
  return (
    <h1>
      Hi my name is {name} and i´m {age} years old.
    </h1>
  );
}
