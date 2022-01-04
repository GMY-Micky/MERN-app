
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <>
        <div className='alert'>
            <h1 className='alert-warning'>OOps! Page not found</h1>
        </div>
            <Link to="/" className='btn text-white border text-decoration-none my-4'>Back to Todos</Link>
        
        </>
    )
}

export default Error
