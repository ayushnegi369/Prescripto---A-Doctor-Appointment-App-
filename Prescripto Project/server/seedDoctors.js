const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');
require('dotenv').config();

const imageFiles = [
  "doc1.png", "doc2.png", "doc3.png", "doc4.png", "doc5.png", "doc6.png", "doc7.png", "doc8.png", "doc9.png", "doc10.png", "doc11.png", "doc12.png", "doc13.png", "doc14.png", "doc15.png"
];

const doctors = [
  {
    name: "Dr. John Doe",
    email: "john.doe@example.com",
    speciality: "Cardiologist",
    image: imageFiles[0],
    experience: "10 Years",
    fee: "$100",
    about: "Dr. John Doe is a renowned Cardiologist with over a decade of experience.",
    available: true,
    bio: "Cardiologist with 10 years of experience.",
    availableSlots: ["10:00 AM", "2:00 PM"]
  },
  {
    name: "Dr. Henry Davis",
    email: "henry.davis@example.com",
    speciality: "Cardiologist",
    image: imageFiles[1],
    experience: "10 Years",
    fee: "$100",
    about: "Dr. Henry Devis is a renowned Cardiologist with over a decade of experience.",
    available: true,
    bio: "Cardiologist with 10 years of experience.",
    availableSlots: ["11:00 AM", "3:00 PM"]
  },
  {
    name: "Dr. Emily Smith",
    email: "emily.smith@example.com",
    speciality: "Neurologist",
    image: imageFiles[2],
    experience: "8 Years",
    fee: "$90",
    about: "Dr. Emily Smith is a highly skilled Neurologist, specializing in neurological disorders.",
    available: true,
    bio: "Neurologist with 8 years of experience.",
    availableSlots: ["9:00 AM", "1:00 PM"]
  },
  {
    name: "Dr. Michael Johnson",
    email: "michael.johnson@example.com",
    speciality: "Orthopedic Surgeon",
    image: imageFiles[3],
    experience: "12 Years",
    fee: "$120",
    about: "Dr. Michael Johnson has extensive experience in orthopedic surgeries.",
    available: true,
    bio: "Orthopedic Surgeon with 12 years of experience.",
    availableSlots: ["10:30 AM", "4:00 PM"]
  },
  {
    name: "Dr. Sarah Williams",
    email: "sarah.williams@example.com",
    speciality: "Dermatologist",
    image: imageFiles[4],
    experience: "6 Years",
    fee: "$80",
    about: "Dr. Sarah Williams is an expert Dermatologist focusing on skincare.",
    available: true,
    bio: "Dermatologist with 6 years of experience.",
    availableSlots: ["12:00 PM", "5:00 PM"]
  },
  {
    name: "Dr. David Brown",
    email: "david.brown@example.com",
    speciality: "Pediatrician",
    image: imageFiles[5],
    experience: "9 Years",
    fee: "$75",
    about: "Dr. David Brown is a compassionate Pediatrician dedicated to children's health.",
    available: true,
    bio: "Pediatrician with 9 years of experience.",
    availableSlots: ["9:30 AM", "2:30 PM"]
  },
  {
    name: "Dr. Olivia Jones",
    email: "olivia.jones@example.com",
    speciality: "Oncologist",
    image: imageFiles[6],
    experience: "15 Years",
    fee: "$150",
    about: "Dr. Olivia Jones is a leading Oncologist specializing in cancer treatment.",
    available: true,
    bio: "Oncologist with 15 years of experience.",
    availableSlots: ["11:30 AM", "3:30 PM"]
  },
  {
    name: "Dr. James Miller",
    email: "james.miller@example.com",
    speciality: "Psychiatrist",
    image: imageFiles[7],
    experience: "11 Years",
    fee: "$95",
    about: "Dr. James Miller focuses on mental health and psychiatric treatments.",
    available: true,
    bio: "Psychiatrist with 11 years of experience.",
    availableSlots: ["10:15 AM", "1:45 PM"]
  },
  {
    name: "Dr. Sophia Wilson",
    email: "sophia.wilson@example.com",
    speciality: "Endocrinologist",
    image: imageFiles[8],
    experience: "7 Years",
    fee: "$85",
    about: "Dr. Sophia Wilson specializes in hormone-related disorders.",
    available: true,
    bio: "Endocrinologist with 7 years of experience.",
    availableSlots: ["9:45 AM", "2:15 PM"]
  },
  {
    name: "Dr. William Anderson",
    email: "william.anderson@example.com",
    speciality: "Ophthalmologist",
    image: imageFiles[9],
    experience: "10 Years",
    fee: "$110",
    about: "Dr. William Anderson is a skilled Ophthalmologist focusing on eye health.",
    available: true,
    bio: "Ophthalmologist with 10 years of experience.",
    availableSlots: ["8:30 AM", "12:30 PM"]
  },
  {
    name: "Dr. Isabella Martinez",
    email: "isabella.martinez@example.com",
    speciality: "Gastroenterologist",
    image: imageFiles[10],
    experience: "14 Years",
    fee: "$130",
    about: "Dr. Isabella Martinez is a Gastroenterologist with expertise in digestive health.",
    available: true,
    bio: "Gastroenterologist with 14 years of experience.",
    availableSlots: ["11:15 AM", "4:15 PM"]
  },
  // Add more doctors if needed, cycling through imageFiles[11] to imageFiles[14]
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Doctor.deleteMany({});
    await Doctor.insertMany(doctors);
    console.log("Doctors seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding doctors:", err);
    process.exit(1);
  }
}

seed(); 