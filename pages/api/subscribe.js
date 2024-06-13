// pages/api/subscribe.js
export default async function handler(req, res) {
  console.log('API Key:', process.env.NEXT_PUBLIC_MOOSEND_API_KEY);
  console.log('List ID:', process.env.NEXT_PUBLIC_MOOSEND_LIST_ID);

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { firstName, email } = req.body;
  const listId = process.env.NEXT_PUBLIC_MOOSEND_LIST_ID;
  const apiKey = process.env.NEXT_PUBLIC_MOOSEND_API_KEY;

  if (!firstName || !email || !listId || !apiKey) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const url = `https://api.moosend.com/v3/subscribers/${listId}/subscribe.json?apikey=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        Email: email,
        CustomFields: {
          "d7030b2a-7efb-4a73-960d-34b0078ff0d0": firstName
        }
      }),
    });

    const text = await response.text(); // Read the response as text
    console.log('Moosend API response:', text);

    try {
      const data = JSON.parse(text); // Attempt to parse the response as JSON

      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(response.status).json({ error: data });
      }
    } catch (jsonError) {
      console.error('Failed to parse JSON response:', jsonError);
      res.status(500).json({ error: 'Failed to parse JSON response from Moosend' });
    }
  } catch (error) {
    console.error('Internal server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
