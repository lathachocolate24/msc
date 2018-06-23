import mongoose, { Schema } from 'mongoose';

const StudentSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'Name is required.!'],
            minlength: [3, 'Title need to be longer.!']
        },
        email: {
            type: String,
            trim: true,
            required: [true, 'Email is required.!'],
            minlength: [3, 'Title need to be longer.!'],
            unique: true
        }
    },
    { timestamps: true }
);

export default mongoose.model('Student', StudentSchema);
