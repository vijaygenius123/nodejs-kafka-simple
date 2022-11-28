const express = require('express');
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🎉🎉🎉 Application running on port: ${PORT} 🎉🎉🎉`);
});
