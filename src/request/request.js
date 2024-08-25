import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://fasteasy-jvqis72guq-lm.a.run.app/api/endpoint', {
      headers: {
        'Content-Type': 'application/json',
        
      },
      
    });

    console.log(response.data); 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


fetchData();
