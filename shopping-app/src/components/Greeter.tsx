import react from "react";

interface GreeterProps {
  person: string;
}

function Greeter({ person }: GreeterProps): JSX.Element {
  return <h1>Hello!, ${person}</h1>;
}

// better
// function Greeter(props: { person: string }): JSX.Element {
//   return <h1>Hello!, ${props.person}</h1>;
// }

// const Greeter: React.FC = () => {
//   return <h1>Hello!</h1>;
// };

export default Greeter;
