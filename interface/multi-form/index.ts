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
  planType: IFormDataPlan;
  planOccurance: 'monthly' | 'yearly';
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

export interface IFormDataPlan extends IPlanSelection {}

export interface IFormDataAddOns {
  header: string;
  subHeader: string;
  cost: string;
  isChecked: boolean
}

export interface IPlanSelection {
  type: 'arcade' | 'advanced' | 'pro';
  cost: {
    yearly: string;
    monthly: string;
  };
  benefit: {
    yearly: string;
    monthly: string;
  };
  image: string;
}
