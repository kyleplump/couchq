import mongoose from 'mongoose';
const { Schema } = mongoose;

export const watchlistSchema = new Schema({
    "user": String,
    "items": [{}], 
});