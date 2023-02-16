import 'dotenv/config';
import mongoose from 'mongoose';
import config from 'config';

mongoose.set('strictQuery', true);

const dbString = config.get<string>('db.uri');

const connectToDb = async () => {
  return mongoose.connect(dbString);
};

export default connectToDb;
