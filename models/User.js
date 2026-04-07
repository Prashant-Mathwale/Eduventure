import mongoose from 'mongoose';

const HistorySchema = new mongoose.Schema({
    activityType: { type: String, required: true }, // e.g., 'quiz', 'game'
    activityTitle: { type: String, required: true }, 
    score: { type: Number },
    totalQuestions: { type: Number },
    timestamp: { type: Date, default: Date.now }
});

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'teacher'], default: 'student' },
    name: { type: String, required: true },
    grade: { type: Number },
    subject: { type: String },
    adventurePoints: { type: Number, default: 0 },
    badges: [{ type: String }],
    profilePic: { type: String },
    history: [HistorySchema]
});

export default mongoose.model('User', UserSchema);
