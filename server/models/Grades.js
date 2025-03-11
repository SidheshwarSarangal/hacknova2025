import { Schema, model } from "mongoose";

const gradeSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    department: { type: String, required: true },

    sem1: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, grade: { type: Number, min: 1, max: 10 } }],
    sem2: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, grade: { type: Number, min: 1, max: 10 } }],
    sem3: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, grade: { type: Number, min: 1, max: 10 } }],
    sem4: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, grade: { type: Number, min: 1, max: 10 } }],
    sem5: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, grade: { type: Number, min: 1, max: 10 } }],
    sem6: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, grade: { type: Number, min: 1, max: 10 } }],
    sem7: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, grade: { type: Number, min: 1, max: 10 } }],
    sem8: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, grade: { type: Number, min: 1, max: 10 } }],
    sem9: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, grade: { type: Number, min: 1, max: 10 } }],
    sem10: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, grade: { type: Number, min: 1, max: 10 } }],
    sem11: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, grade: { type: Number, min: 1, max: 10 } }],
    sem12: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, grade: { type: Number, min: 1, max: 10 } }],
    sem13: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, grade: { type: Number, min: 1, max: 10 } }],
    sem14: [{ courseId: { type: Schema.Types.ObjectId, ref: 'Course' }, grade: { type: Number, min: 1, max: 10 } }]
}, { timestamps: true });

export default model("Grade", gradeSchema);
