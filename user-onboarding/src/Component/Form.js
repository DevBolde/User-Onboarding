import react from 'react'

const Form = (props) =>{
const { change, submit, errors } = props;
const { username, email, password, tos } = props.values;

const paragraphStyle = {
    color: 'red',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '1.5',
  };

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
        <p style={paragraphStyle}>{errors.username}</p>
        <p style={paragraphStyle}>{errors.password}</p>
        <p style={paragraphStyle}>{errors.email}</p>
        <p style={paragraphStyle}>{errors.tos}</p>

        <form onSubmit={onSubmit}>
            <label>Username:&nbsp;
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
            <input type="submit" value="Create a Friend!" name="submitBtn"/>
        </form>
    </>
)    
}
export default Form;