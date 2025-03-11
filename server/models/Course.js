import { Schema, model } from "mongoose";

const courseSchema = new Schema({
    name: { type: String, required: true, trim: true },
    department: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    enrolledStudents: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    faculty: [{ type: Schema.Types.ObjectId, ref: 'Faculty' }],
    description: { type: String },


});


export default model("Course", courseSchema);
