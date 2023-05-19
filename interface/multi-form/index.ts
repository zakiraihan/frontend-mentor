import { PersonalInfoProps } from "@/components/multi-form/PersonalInfo";
import React from "react";

export interface IFormStep {
  step: number;
  title: string;
  header: string;
  subHeader: string;
}

export interface BaseFormProps {
  formStep: IFormStep; 
  formData: IFormData;
  onSubmitForm: (data: IFormData) => void;
}

export interface IFormData extends IFormDataPersonal {
  plan: IFormDataPlan;
  addOns: Array<IFormDataAddOns>;
}

export interface IFormDataPersonal {
  name: string;
  email: string;
  phone: string;
}

export interface IFormDataPlan {
  type: 'arcade' | 'advanced' | 'pro';
  occurance: 'monthly' | 'yearly';
}

export interface IFormDataAddOns {
  header: string;
  subHeader: string;
  cost: string;
  isChecked: boolean
}
