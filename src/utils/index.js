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
    placeholder: "Enter date, In {26 nov 2024} this format",
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
