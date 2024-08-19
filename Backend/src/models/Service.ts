import { Schema, model, Document } from "mongoose";

export interface IService extends Document {
  picture: string;
  category: string;
  serviceName: string;
  serviceProvider: {
    name: string;
    surname: string;
  };
  address: string;
}

const serviceSchema = new Schema<IService>({
  picture: { type: String, required: true },
  category: { type: String, required: true },
  serviceName: { type: String, required: true },
  serviceProvider: {
    name: { type: String, required: true },
    surname: { type: String, required: true },
  },
  address: { type: String, required: true },
});

const ServiceModel = model<IService>("Service", serviceSchema);

export default ServiceModel;
