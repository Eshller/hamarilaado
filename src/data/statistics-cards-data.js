import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Total Students",
    value: "338",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Today's Users",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "New Clients",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Sales",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;

export const chartData = {
  labels: [
    'Jasmin Kaur', 'Harman Kaur', 'Navdeep Kaur', 'Jasmin Kaur', 'Khushmeet Kaur',
    'Amanpreet Kaur', 'Sandeep Kaur', 'Ramandeep', 'Amanjeet Kaur', 'Pinki',
    'Harjot Kaur', 'Khushmeet Kaur', 'Ekam', 'Manjot Kaur', 'Jashandeep Kaur',
    'Gurpreet Kaur', 'Gurpreet Kaur', 'Harpreet', 'Aadina', 'Alisha Dureshi',
    'Shahzadi', 'Naazsayed', 'Simro', 'Muskam', 'Nimra Hussain', 'Aaliya Khan',
    'Namirah', 'Aleena', 'Sadiya', 'Sajidha Bano', 'Taiba Fatima', 'Bushra',
    'Farad Chouhan', 'Suhana Gowri', 'Sumaiya Bano', 'saltanat', 'Unmay Habeebah',
    'Zeanab', 'Sameera', 'Tehzeeb', 'Shifa', 'Mariyam', 'Iqra khan', 'Al.Shifa',
    'Tabassum Bano', 'Aliya', 'Somya Khan', 'Falak', 'Haika', 'Rushda',
    'Alyeeda Khan', 'Anamta Shaikh', 'Kashifa', 'Manttasha', 'Shifa', 'Mariyam',
    'Hasrat', 'Mahak Khan', 'Heena Khan', 'Sana Kilal', 'Aqsa Khan', 'Aayat Sindhi',
    'Samayra Khiliji', 'Najish', 'Rifat mehar', 'Sana yameen', 'Ayna Bano',
    'Mubashira', 'X', 'Deepika', 'Komal', 'Kiran', 'Sandhya Pareek', 'Tamanna',
    'Poonam', 'Priya', 'Komal', 'Aarju', 'Divya', 'Garima', 'Kanchan',
    'Jiya Suthar', 'Lakshmi', 'Sangita', 'Bharvi Sharma', 'Sonakshi',
    'Harshdeep Kaur', 'Manish', 'Ashish', 'Gurjot', 'Roshan Deep Singh',
    'Ghanshyam', 'Punit', 'Sunil', 'Abhijot Singh', 'Lokesh', 'Gajendar Pal',
    'Pawan', 'Mahawir'
  ],
  datasets: [
    {
      label: 'Average SBW',
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.4)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: [
        2.93, 2.41, 3.00, 3.20, 2.27, 2.43, 2.83, 2.72, 3.43, 2.21,
        2.48, 2.73, 2.93, 2.41, 3.23, 3.17, 2.60, 2.53, 3.37, 3.07,
        3.20, 3.90, 3.53, 3.07, 3.24, 3.73, 3.43, 3.48, 3.23, 3.27,
        2.35, 3.87, 2.09, 2.63, 3.53, 2.73, 2.61, 2.63, 2.90, 1.72,
        3.47, 3.85, 3.13, 3.10, 2.93, 3.35, 3.13, 3.33, 3.07, 3.47,
        2.93, 3.83, 3.93, 2.81, 3.57, 3.85, 2.97, 3.07, 3.03, 3.07,
        3.36, 3.00, 2.78, 3.72, 3.13, 3.34, 3.40, 3.29, 2.63, 2.79,
        2.77, 2.63, 3.33, 3.17, 3.37, 2.57, 3.60, 2.55, 2.83, 2.47,
        2.63, 3.13, 2.87, 3.00, 2.89, 2.63, 3.00, 3.41, 3.67, 2.46,
        3.15, 2.82, 3.40, 3.40, 3.40, 3.47, 2.81, 3.45, 2.97
      ]
    }
  ]
};