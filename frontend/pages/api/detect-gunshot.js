export default async function handler(req, res) {
  if (req.method === "POST") {
    // Simulate gunshot detection logic
    const result = {
      detected: true,
      message: "Gunshot detected",
    };

    // Return a string response
    res.status(200).json(JSON.stringify(result)); // Ensure you return a JSON string
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
