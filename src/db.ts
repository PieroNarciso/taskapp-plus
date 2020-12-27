import mongoose from 'mongoose';

import config from './config';


const OPTIONS: mongoose.ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

/*
 * Connection of mongoose to DB
 */
export default (): void => {
    mongoose.connect(config.DB_URI, OPTIONS, () => {
    console.log("DB Connected");
})};
