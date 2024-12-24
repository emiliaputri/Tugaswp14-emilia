const app = require('./src/app');
const PORT = process.env.PORT || 3020;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
