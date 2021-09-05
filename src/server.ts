import { app } from ".";
import swaggerUi from 'swagger-ui-express';

import swaggerFile from './swagger.json';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(5000, () => console.log("Server is running!"));
