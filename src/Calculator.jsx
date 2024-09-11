import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculate , reset } from './redux/slice'

function Calculator() {

    const res = useSelector((state)=>(state.counterReducer.cal))

    const dispatch = useDispatch()

    const [exp,setExp] = useState(null)

    const [input, setInput] = useState('')

    const handleCalculate = () =>{
      const val = eval(input)

      setExp(val)

      dispatch(calculate(exp))
    }

    const handleReset = () =>{
      setInput('')
      setExp(null)
      dispatch(reset())
    }

  return (
    <>
        <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
            <div className='w-75 border shadow p-5'>
                <h3 className='text-center mb-5'>CALCULATOR</h3>
                <input type="text" value={input}   className='form-control my-3' placeholder='Enter an expression' onChange={(e)=>{setInput(e.target.value)}}/>
               <div className='d-flex justify-content-center mb-3'>
                    <button className='btn btn-success me-3' onClick={handleCalculate}>Calulate</button>
                    <button className='btn btn-danger' onClick={handleReset}>Clear</button>
               </div>
               <h1 className='text-center'>{res}</h1>
            </div>
        </div>
    </>
  )
}

export default Calculator