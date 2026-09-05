process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const payload = {
  access_key: "3765b7ee-4be3-4487-8f0f-47f2618145c9",
  subject: "🚀 New BlazeByte Project Enquiry",
  from_name: "Automated Test User",
  email: "test@example.com",
  phone: "555-0199",
  service: "WEB EXPERIENCE",
  message: "This is an automated end-to-end test confirming Web3Forms integration.",
  submitted_at: new Date().toLocaleString()
};

fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Origin': 'http://localhost:5174', // Simulate client-side origin
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  },
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => {
  console.log("Response:", data);
})
.catch(err => console.error("Error:", err));
