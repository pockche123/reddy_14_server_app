const app = require('./app');
const port = 8080;

app.listen(port,()=>{
    console.log(`app is listenig on port ${port}`);
})