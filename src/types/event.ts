export type EventData = {
  title: string;
  date: string;
  venue: string;
  timings: string;
  description: string;
  rules: {
    title: string;
    items: string[];
  }[];
  rewards: string[];
  registrationLink: string;
  contact: {
    name: string;
    number: string;
  };
  registrationFee: string;
  participation?: string;
};
