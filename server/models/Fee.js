import { Schema, model } from "mongoose";

const feeSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    department: { type: String, required: true },

    sem1: { type: Boolean, default: false },
    sem2: { type: Boolean, default: false },
    sem3: { type: Boolean, default: false },
    sem4: { type: Boolean, default: false },
    sem5: { type: Boolean, default: false },
    sem6: { type: Boolean, default: false },
    sem7: { type: Boolean, default: false },
    sem8: { type: Boolean, default: false },
    sem9: { type: Boolean, default: false },
    sem10: { type: Boolean, default: false },
    sem11: { type: Boolean, default: false },
    sem12: { type: Boolean, default: false },
    sem13: { type: Boolean, default: false },
    sem14: { type: Boolean, default: false },
}, { timestamps: true });

export default model("Fee", feeSchema);
