import { PersonalInfoFormProps } from "@/components/multi-form/PersonalInfoForm";
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
  handleFormChanges: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFormData extends IFormDataPersonal {
  plan: IFormDataPlan;
  addOns: Array<IFormDataAddOns>;
}

export interface IFormDataPersonal {
  name: IFormDataString
  email: IFormDataString;
  phone: IFormDataString;
}

export interface IFormDataString {
  value: string;
  isValid?: boolean;
  errorMessage?: string;
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
