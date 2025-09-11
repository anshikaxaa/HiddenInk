const fetch = require('node-fetch');

async function testSimpleEndpoint() {
  try {
    const response = await fetch('https://hidden-inkk.vercel.app/api/auth/simple-test', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log('Response status:', response.status);
    console.log('Response data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testSimpleEndpoint();
