import { Schema, model } from "mongoose";
import { hash } from "bcrypt";

const facultySchema = new Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    department: { type: String, required: true },
    image: { type: String, required: true },
    mobileNo: { type: String, required: true, unique: true },
    description: { type: String },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],

    token: { type: String },
    resetPasswordExpires: { type: Date },
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = hash(this.password, 10);
    next();
});

export default model("Faculty", facultySchema);
