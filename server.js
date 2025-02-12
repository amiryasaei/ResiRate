import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

import studentsRoutes from './routes/students.js';
import landlordsRoutes from './routes/landlords.js';
import propertiesRoutes from './routes/properties.js';
import reviewsRoutes from './routes/reviews.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, "client/build")));

app.use('/api/students', studentsRoutes);
app.use('/api/landlords', landlordsRoutes);
app.use('/api/properties', propertiesRoutes);
app.use('/api/reviews', reviewsRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
