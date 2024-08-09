import mongoose from 'mongoose';

let isConnected : boolean = false

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true)

    if (!process.env.MONGOBD_URL) {
        return console.log('MongoDB URL is missing');
    }
    if (isConnected) {
        return console.log('MongoDB is already connected');
    }

    try {
        await mongoose.connect(process.env.MONGOBD_URL, {
            dbName: 'devflow2'
        });
        isConnected = true;
        // console.log('MONGO IS CONNECTED');
    } catch (error) {
        console.log('Error', error);
    }
}
