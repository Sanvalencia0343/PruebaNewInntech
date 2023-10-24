import axios from 'axios';


export const auth = ({username, password}) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	};
	return axios
		.post('http://localhost:3001/api/users/login', {
			username,
			password
		}, config)
		.catch(error => {
			throw error;
		});
};


export const out = async () => {
	try {
	  const response = await axios.post('http://localhost:3001/api/users/logout', null, {
		headers: {
		  'Authorization': `Bearer ${localStorage.getItem('token')}`
		}
	  });
  
	  if (response.status === 200) {
		localStorage.removeItem('token');
	  }
	} catch (error) {
	  console.error('Error al cerrar la sesión:', error);
	  throw error;
	}
  };
  
  
  
  

