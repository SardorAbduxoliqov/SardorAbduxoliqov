import { Schema, model, Document, Model } from 'mongoose';

declare interface ITask extends Document {
  fileSizeBytes: number;
  url: string;
}

export type TaskModel = Model<ITask>
const schema = new Schema({
  fileSizeBytes: { type: Number, required: true },
  url: { type: String, required: true },
});

export default model('Task', schema);