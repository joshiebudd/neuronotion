export const addSubscriberToList = async (firstName, email) => {
  const listId = process.env.REACT_APP_MOOSEND_LIST_ID;
  const apiKey = process.env.REACT_APP_MOOSEND_API_KEY;

  try {
    const response = await fetch(`https://a.moosend.com/api/v3/subscribers/${listId}/subscribe.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Moosend-APIKey': apiKey,
      },
      body: JSON.stringify({ 
        Email: email,
        Name: firstName
      }),
    });

    return response;
  } catch (error) {
    console.error('Error adding subscriber:', error);
    throw error;
  }
};
