import mongoose from 'mongoose';
const { Schema } = mongoose;

export const userSchema = new Schema({
    'email': String,
    'password': String,
});