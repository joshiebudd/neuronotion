import { google } from "googleapis";
import keyJson from "../key.json";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { GoogleAuth } = google.auth;
      const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
      const auth = new GoogleAuth({
        credentials: keyJson,
        scopes: SCOPES,
      });

      const client = await auth.getClient();
      const sheets = google.sheets({ version: "v4", auth: client });

      // The ID of the spreadsheet to update
      const spreadsheetId = "1JPSERLwXz0qyiuGvkAfQG9QlN7ErvNdjv3mWy81WO-o";

      // Specify the A1 notation range
      const range = "A1:B1";

      // Specify the values you want to write
      const values = [["sample", "sample@example.com"]];

      const request = {
        spreadsheetId,
        range,
        valueInputOption: "RAW",
        resource: { values },
      };

      const response = await sheets.spreadsheets.values.update(request);
      res.status(200).json({ success: true, data: response.data });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ sucess: false, error: error.message });
    }
  } else {
    res.json({ message: "hello world!" });
  }
};
