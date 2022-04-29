import { useState, useEffect } from 'react';
import { Logo_86, FormRow_86 } from '../components';
import Wrapper from '../assets/wrappers/Register_86';
import { useAppContext } from '../context/appContext_86';
import Alert_86 from '../components/Alert_86';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

const Register_86 = () => {
  const [values, setValues] = useState(initialState);

  const { showAlert, displayAlert } = useAppContext();

  const handleChange = (e) => {
    console.log('e.target', e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log('e.target',e.target);
    const { email, password } = values;
    if (!email || !password) {
      displayAlert();
      return;
    }
  };
  return (
    <Wrapper>
      <form className='form' onSubmit={onSubmit}>
        <Logo_86 />
        <h3>Register</h3>
        {showAlert && <Alert_86 />}
        <FormRow_86
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
          className='form-input'
        />
        <FormRow_86
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          className='form-input'
        />
        <FormRow_86
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          className='form-input'
        />

        <button className='btn btn-block' type='submit'>
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register_86;
