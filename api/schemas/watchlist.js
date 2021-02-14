import mongoose from 'mongoose';
const { Schema, ObjectId } = mongoose;

export const watchlistSchema = new Schema({
    "user": ObjectId,
    "items": [{}], 
});