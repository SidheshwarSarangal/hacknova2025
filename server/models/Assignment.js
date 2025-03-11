import { Schema, model } from "mongoose";

const assignmentSchema = new Schema({
    submittedStudents: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    faculty: [{ type: Schema.Types.ObjectId, ref: 'Faculty' }],
    course: { type: Schema.Types.ObjectId, ref: 'Course' },
    name: { type:Number, required:true },
    lastDate: {type:Date, required:true}
});


export default model("Assignment", assignmentSchema);
