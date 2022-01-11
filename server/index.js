import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 5000;

app.listen(PORT, ()=>{
  console.log(`Server has been started on port ${PORT}...`);

} );

app.get('/', (req, res)=>{
  res.send('<h1>Hello Server</h1>')
})
