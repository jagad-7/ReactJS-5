import React,{useState, useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'


function CallbackHookParentCom() {
    const [age, setAge] = useState(27)
    const [salary, setSalary] = useState(500000)

    const incrementAge = useCallback(() =>{
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() =>{
        setSalary(salary + 1000)
    }, [salary])


  return (
    <div>
        <Title />
        <Count text='Age' count = {age} />
        <Button handClick= {incrementAge}> Increment Age </Button>
        <Count text="Salary" count= {salary} />
        <Button handClick= {incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default CallbackHookParentCom