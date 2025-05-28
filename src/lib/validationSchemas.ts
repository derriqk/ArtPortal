import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const RequestSchema = Yup.object({
  owner: Yup.string().required(),
  description: Yup.string().required(),
  type: Yup.string().required(),
  status: Yup.string().required(),
});

export const PurchaseSchema = Yup.object({
  title: Yup.string().required(),
  owner: Yup.string().required(),
  status: Yup.string().required(),
});
