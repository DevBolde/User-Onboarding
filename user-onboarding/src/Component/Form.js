import react from 'react'

const Form = (props) =>{
const { change, submit, errors } = props;
const { username, email, password, tos } = props.values;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
    }
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

return (
    <>
        <h1>This is a Form...</h1>
        <p>{errors.username}</p>
        <p>{errors.password}</p>
        <p>{errors.email}</p>
        <p>{errors.tos}</p>

        <form onSubmit={onSubmit}>
            <label>Name:&nbsp;
                <input 
                type="text"
                value={username}
                name='username'
                onChange={onChange}
                />
            </label>&nbsp;
            <label>Email:&nbsp;
                <input 
                type='email'
                value={email}
                name='email'
                onChange={onChange}
                />
            </label>&nbsp;
            <label>Password:&nbsp;
                <input 
                type="password"
                value={password}
                name='password'
                onChange={onChange}
                />
            </label>&nbsp;
            <label>"Agree" to Terms of Service?&nbsp;
                <input 
                type='checkbox'
                name="tos"
                checked={tos}
                onChange={onChange}
                />
            </label>&nbsp;
            <input type="submit" value="Create a Friend!"/>
        </form>
    </>
)    
}
export default Form;