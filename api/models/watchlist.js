import mongoose from 'mongoose';
import { watchlistSchema } from '../schemas/watchlist';

export const Watchlist = mongoose.model('Watchlist', watchlistSchema); 