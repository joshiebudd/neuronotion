import { Moosend } from 'moosend-api-wrapper';

const moosend = new Moosend({
  apiKey: process.env.MOOSEND_API_KEY,
});

export const addSubscriberToList = async (email) => {
  try {
    const response = await moosend.addSubscriber(process.env.MOOSEND_LIST_ID, email);
    console.log('Subscriber added successfully:', response);
  } catch (error) {
    console.error('Error adding subscriber:', error);
  }
};