import { IFormDataAddOns, IFormDataPlan, IFormStep, IPlanSelection } from "@/interface/multi-form";

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
    monthly: 9,
    yearly: 90,
  },
  benefit: {
    monthly: '',
    yearly: '2 months free',
  },
  image: ''
} satisfies IFormDataPlan; 


export const availablePlans = [
  {
    type: 'arcade',
    cost: {
      monthly: 9,
      yearly: 90,
    },
    benefit: {
      monthly: '',
      yearly: '2 months free',
    },
    image: '/assets/multi-form/images/icon-arcade.svg'
  },
  {
    type: 'advanced',
    cost: {
      monthly: 12,
      yearly: 120,
    },
    benefit: {
      monthly: '',
      yearly: '2 months free',
    },
    image: '/assets/multi-form/images/icon-advanced.svg'
  },
  {
    type: 'pro',
    cost: {
      monthly: 15,
      yearly: 150,
    },
    benefit: {
      monthly: '',
      yearly: '2 months free',
    },
    image: '/assets/multi-form/images/icon-pro.svg'
  },
] satisfies Array<IPlanSelection>;

export const defaultPlanOccurrence = 'monthly';

export const availableAddOns = [
  {
    header: 'Online service',
    subHeader: 'Access to multiplayer games',
    isChecked: false,
    cost: {
      monthly: 1,
      yearly: 10
    }
  },
  {
    header: 'Larger storage',
    subHeader: 'Extra 1TB of cloud save',
    isChecked: false,
    cost: {
      monthly: 2,
      yearly: 20
    }
  },
  {
    header: 'Customizable profile',
    subHeader: 'Access to multiplayer games',
    isChecked: false,
    cost: {
      monthly: 2,
      yearly: 20
    }
  },
] satisfies Array<IFormDataAddOns>;