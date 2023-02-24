import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../components/store/user.action';

const Registration = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleRegistration = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('photo', photo);

    dispatch(signup(formData));
  };

  const handlePhotoUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-2'>Registration</h1>
      <form onSubmit={handleRegistration} className='flex flex-col'>
        <label className='mb-2'>
          First Name:
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='border border-gray-400 p-2 rounded-md'
          />
        </label>
        <label className='mb-2'>
          Last Name:
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='border border-gray-400 p-2 rounded-md'
          />
        </label>
        <label className='mb-2'>
          Email:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-gray-400 p-2 rounded-md'
          />
        </label>
        <label className='mb-2'>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border border-gray-400 p-2 rounded-md'
          />
        </label>
        <label className='mb-2'>
          Photo:
          <input type='file' onChange={handlePhotoUpload} className='border border-gray-400 p-2 rounded-md' />
        </label>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
