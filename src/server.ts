import { app } from ".";
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';

const port = process.env.PORT || 5000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => console.log("Server is running!"));
