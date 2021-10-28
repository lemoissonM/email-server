const express = require("express");
const { sendEmail } = require("./mailer");
const cors = require("cors");

const PORT = process.env.PORT || 3001;



const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    try {
       await sendEmail(req.body.email);
       return res.status(200).json({result: "Email sent"});
    } catch(err) {
       return res.status(500).json({result: "Failed to send email"});
    }
    
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});