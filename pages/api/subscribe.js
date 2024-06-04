// pages/api/subscribe.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      return;
    }
  
    const { email } = req.body;
    const listId = process.env.NEXT_PUBLIC_MOOSEND_LIST_ID;
    const apiKey = process.env.NEXT_PUBLIC_MOOSEND_API_KEY;
  
    try {
      const response = await fetch(`https://a.moosend.com/api/v3/subscribers/${listId}/subscribe.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Moosend-APIKey': apiKey,
        },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(response.status).json({ error: data });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  