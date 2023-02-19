const Header = ({ course }) => <h1>{course}</h1>
  
const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => total += part.id, 0)
  return (
    <p><strong>Total of {total} exercises</strong></p>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map((part) => <Part key={part.id} part={part} />)}     
  </>

const Course = ({ course }) => {
    return (
      <>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </>
    )
  }

export default Course
  