import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../Actions'

export default function AB ()  {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            {isLogged ? <h3>things shouldn't see </h3> : ''}
        </div>
    )
}