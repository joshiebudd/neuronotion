export const addSubscriberToList = async (email) => {
    const listId = process.env.MOOSEND_LIST_ID;
    const apiKey = process.env.MOOSEND_API_KEY;
  
    try {
      const response = await fetch(`https://a.moosend.com/api/v3/subscribers/${listId}/subscribe.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Moosend-APIKey': apiKey,
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        console.log('Subscriber added successfully');
      } else {
        console.error('Error adding subscriber');
      }
    } catch (error) {
      console.error('Error adding subscriber:', error);
    }
  };