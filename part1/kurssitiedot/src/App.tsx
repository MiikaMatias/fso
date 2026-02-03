
type TotalProps = {
  amount: number
};
const Total = ({amount}: TotalProps) => {
  return(
    <>
      <p>Number of exercises: {amount}</p>
    </>
  )
}

type Part = {
  name: string;
  exercises: number;
};
type ContentProps = {
  parts: Array<Part>
};
const Content = ({ parts }: ContentProps) => {
  return (
    <>
      <p>
        {parts[0].name} {parts[0].exercises}
      </p>
      <p>
        {parts[1].name} {parts[1].exercises}
      </p>
      <p>
        {parts[2].name} {parts[2].exercises}
      </p>
    </>
  )
}

type HeaderProps = {
  course: string;
};
const Header = (props: HeaderProps) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const App = () => {
  const parts: Array<Part> = [
    {
      name:'Fundamentals of React', 
      exercises:10
    }, 
    {
      name:'Using props to pass data',
      exercises:7
    }, 
    {
      name:'State of a component',
      exercises:14
    }
  ];



  return (
    <div>
      <Header course='Half Stack application development'></Header>
      <Content parts={parts}></Content>
      <Total amount={parts.length}></Total>
    </div>
  )
}

export default App
