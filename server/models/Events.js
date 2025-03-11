import { Schema, model } from "mongoose";

const eventSchema = new Schema({
    name: { type: String, required: true, trim: true },
    date: { typr: Date, require: true },

    department: { type: String, required: true },
    organisers: [{ type: Schema.Types.ObjectId, ref: 'Faculty' }],
    description: { type: String },
    images: [{ type: String, required: true }],

});


export default model("Event", eventSchema);
