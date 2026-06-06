// pages/api/coach-enquiry.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const { firstName, email, isCoach } = req.body;
  const listId = 'fb23c9f9-183d-41d7-acd3-ac9c128a142a';
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
        Name: firstName,
        Email: email,
        CustomFields: [
          `is_coach=${isCoach ? 'Yes' : 'No'}`,
          `source=For Coaches Page`,
        ],
      }),
    });

    const text = await response.text();
    console.log('Moosend API response (coach-enquiry):', text);

    try {
      const data = JSON.parse(text);

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
