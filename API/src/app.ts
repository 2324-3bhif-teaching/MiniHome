import express, {request,response} from 'express';

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running at port ${port}.`);
});