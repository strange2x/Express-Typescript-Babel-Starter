import Express, { Application, json, urlencoded } from 'express';

const app: Application = Express();
const port: number | string = process.env.PORT || 5000;

// Application Middlewares used by Express
app.use(json({ strict: true }));
app.use(urlencoded());

app.listen(port, () => console.log('Connected to', port));
