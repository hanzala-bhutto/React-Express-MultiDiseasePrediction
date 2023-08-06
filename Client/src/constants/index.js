import {
  mobile,
  backend,
  creator,
  web,
  heart,
  diabetes,
} from "../assets";

export const mainSystem = "Multi Disease Prediction System";
export const heartSystem = "Heart Disease Prediction Model";
export const diabetesSystem = "Diabetes Disease Prediction Model";

export const mainOverview = `Multi Disease Prediction System based on predictive modeling Analysis predicts the disease of the
user on the basis of the symptoms that the user provides as input to the system. The system
analyzes the symptoms provided by the user as input and gives the probability of the given disease
as an output. Following Cards outline the working process of the the prediction!`;

export const heartOverview = `Heart Disease Prediction System based on predictive modeling Analysis predicts the disease of the
user on the basis of the symptoms that the user provides as input to the system.`;

export const diabetesOverview = `Diabetes Disease Prediction System based on predictive modeling Analysis predicts the disease of the
user on the basis of the symptoms that the user provides as input to the system.`;


export const models = [
  {
    name: "Heart Model",
    description:
      heartOverview,
    tags: [
      {
        name: "heart",
        color: "blue-text-gradient",
      },
      {
        name: "prediction",
        color: "green-text-gradient",
      },
      {
        name: "logistic regression",
        color: "pink-text-gradient",
      },
    ],
    image: heart,  
    navigate: "heart",
  },

  {
    name: "Diabetes Model",
    description:
      diabetesOverview,
    tags: [
      {
        name: "diabetes",
        color: "blue-text-gradient",
      },
      {
        name: "prediction",
        color: "green-text-gradient",
      },
      {
        name: "support vector",
        color: "pink-text-gradient",
      },
    ],
    image: diabetes,
    navigate: "diabetes",
  },

]

export const services = [
  {
    title: "Sign In",
    icon: web,
  },
  {
    title: "Model Selection",
    icon: mobile,
  },
  {
    title: "Form Submission",
    icon: backend,
  },
  {
    title: "Results",
    icon: creator,
  },
];

export const modelSelection = "There are two models Heart Model and Diabetes Model provided from which one can be selected by a user depending on th requirment. Select the model you want to use for prediction. You can select from the following models:";

export const main_navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "model",
    title: "Models",
  },
  {
    id: "signout",
    title: "Sign Out",
  },
];

export const heart_navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "form",
    title: "Form",
  },
  {
    id: "result",
    title: "Result",
  },
  {
    id: "signout",
    title: "Sign Out",
  },
];

export const diabetes_navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "overview",
    title: "Overview",
  },
  {
    id: "form",
    title: "Form",
  },
  {
    id: "result",
    title: "Result",
  },
  {
    id: "signout",
    title: "Sign Out",
  },
];
