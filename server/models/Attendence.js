import { Schema, model } from "mongoose";

const attendanceSchema = new Schema({
    enrolledStudents: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    faculty: [{ type: Schema.Types.ObjectId, ref: 'Faculty' }],
    course: { type: Schema.Types.ObjectId, ref: 'Course' },
});


export default model("Attendance", attendanceSchema);
