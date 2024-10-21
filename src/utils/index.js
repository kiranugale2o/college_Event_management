export function passwordChecker(e) {
  let password = e.target.value.trim();

  // This regex matches specific special characters like @, #, $, %, &, etc.
  const specificSpecialCharRegex = /[@#$%^&*()_+[\]{};':"\\|,.<>?]/;
  if (password.length >= 6) {
    if (!specificSpecialCharRegex.test(password)) {
      const msg = {
        status: false,
        message: "At least One Special character add in Password !",
      };
      return msg;
    }
    const msg = {
      status: true,
      message: "Strong Password !",
    };
    return msg;
  } else {
    const msg = {
      status: false,
      message: "Password must be 6 character !",
    };
    return msg;
  }
}

export const studentFormField = [
  {
    label: "Name",
    name: "name",
    placeholder: "Enter Your Name ",
  },
  {
    label: "branch",
    name: "branch",
    placeholder: "Enter Your Branch Name",
  },
  {
    label: "location",
    name: "location",
    placeholder: "Enter Your Address ",
  },
  {
    label: "degree",
    name: "degree",
    placeholder: "Enter your  Degree",
  },
];

export const studentInitialData = {
  name: "",
  branch: "",
  location: "",
  degree: "",
};

export const teacherFormField = [
  {
    label: "Name",
    name: "name",
    placeholder: "Enter Your Name ",
  },
  {
    labal: "department",
    name: "department",
    placeholder: "Enter your Department Name ",
  },
];

export const teacherInitialData = {
  name: "",
  department: "",
};

export const OrganizerInitialData = {
  name: "",
  branch: "",
  location: "",
  degree: "",
};

export const eventFormField = [
  {
    label: "event name",
    name: "eventName",
    placeholder: "Enter Event Name like fresher party 2024",
  },
  {
    label: "branch",
    name: "branch",
    placeholder: "Enter Branch Name that Organize this Event",
  },
  {
    label: "date",
    name: "date",
    placeholder: "Enter date, In {yyyy-mm-dd} this format",
  },
];
export const eventInitialData = {
  eventName: "",
  branch: "",
  date: "",
};

export const ContributorFormFields = [
  {
    label: "name",
    name: "name",
    placeholder: "Enter Contributer Name",
  },
  {
    label: "classname",
    name: "class_Name",
    type: "select",
    placeholder: "Enter Contributer Class Name",
  },
  {
    label: "amount",
    name: "amount",
    placeholder: "Enter Amount",
  },
];

export const ContibutersInitialData = {
  name: "",
  class_Name: "",
  amount: "",
  date: "",
};

export const spentAmountInEventFormField = [
  {
    label: "name",
    name: "name",
    placeholder:
      "Enter the name of the field in which you spent the money here ",
  },
  {
    label: "amount",
    name: "amount",
    placeholder: "Enter spent Money ",
  },
];

export const spentAmountInitialData = {
  name: "",
  amount: "",
};
export function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function calculateDay(mydate) {
  // Get today's date
  const today = new Date();

  const targetDate = new Date(mydate);

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = targetDate - today;

  // Convert the difference from milliseconds to days
  const differenceInDays = Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  return differenceInDays;
}

import qs from "query-string";
export function formUrlQuery({ params, data }) {
  const currentUrl = qs.parse(params);
  if (Object.keys(data).length > 0) {
    Object.keys(data).map((key) => {
      if (data[key].length === 0) delete currentUrl[key];
      else currentUrl[key] = data[key].join(",");
    });
  }

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    {
      skipNull: true,
    }
  );
}

export const filterMenuDataArray = [
  {
    id: "class_Name",
    label: "Class",
  },
  {
    id: "amount",
    label: "Amount",
  },
];

//upload image
// uploadImage.js

// firebaseConfig.js (Example Firebase configuration file)

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9X4hY1a1W9jOI0LedOvOs8L07bhSVGqg",
  authDomain: "studybuddy-5a2fe.firebaseapp.com",
  projectId: "studybuddy-5a2fe",
  storageBucket: "studybuddy-5a2fe.appspot.com",
  messagingSenderId: "481736869337",
  appId: "1:481736869337:web:6fc2c02f44dea61e1245c8",
  measurementId: "G-R8J22FTCV8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
export const storage = getStorage(app);

// Function to get the day name from a date string
export function getDayName(dateString) {
  // Create a new Date object from the date string
  const date = new Date(dateString);

  // Array of day names
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the day index (0 for Sunday, 1 for Monday, etc.)
  const dayIndex = date.getUTCDay();

  // Return the corresponding day name
  return dayNames[dayIndex];
}

// Function to get the month name from a date string
export function getMonthName(dateString) {
  // Create a new Date object from the date string
  const date = new Date(dateString);

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month index (0 for January, 1 for February, etc.)
  const monthIndex = date.getUTCMonth();

  // Return the corresponding month name
  return monthNames[monthIndex];
}
