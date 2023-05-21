import { IFormDataAddOns, IFormDataPlan, IFormStep } from "@/interface/multi-form";

export const formSteps = [
  {
    step: 1,
    title: 'YOUR INFO',
    header: 'Personal Info',
    subHeader: 'Please provide your name, email address, and phone number.'
  },
  {
    step: 2,
    title: 'SELECT PLAN',
    header: 'Select Your Plan',
    subHeader: 'You have the option of monthly or yearly billing.'
  },
  {
    step: 3,
    title: 'ADD-ONS',
    header: 'Pick add-ons',
    subHeader: 'Add-ons help enhance your gaming experience.'
  },
  {
    step: 4,
    title: 'SUMMARY',
    header: 'Finishing up',
    subHeader: 'Double-check everything looks OK before confirming.'
  },
  {
    step: 5,
    title: 'FINISH',
    header: 'Thank you!',
    subHeader: 'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.'
  },
] satisfies Array<IFormStep>;

export const defaultSelectedPlan = {
  type: 'arcade',
  cost: {
    monthly: '$9/mo',
    yearly: '$90/yr',
  },
  benefit: {
    monthly: '',
    yearly: '2 months free',
  },
  image: ''
} satisfies IFormDataPlan; 

export const defaultPlanOccurrence = 'monthly';

export const availableAddOns = [
  {
    header: 'Online service',
    subHeader: 'Access to multiplayer games',
    isChecked: false,
    cost: {
      monthly: '+$1/mo',
      yearly: '+$10/yr'
    }
  },
  {
    header: 'Larger storage',
    subHeader: 'Extra 1TB of cloud save',
    isChecked: false,
    cost: {
      monthly: '+$2/mo',
      yearly: '+$20/yr'
    }
  },
  {
    header: 'Customizable profile',
    subHeader: 'Access to multiplayer games',
    isChecked: false,
    cost: {
      monthly: '+$2/mo',
      yearly: '+$20/yr'
    }
  },
] satisfies Array<IFormDataAddOns>;