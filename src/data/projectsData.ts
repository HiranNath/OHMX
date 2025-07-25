export interface Component {
  name: string;
  description: string;
  image: string;
  price: string;
  buyNowLink: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  team: string[];
  liveUrl: string;
  githubUrl: string;
  detailedDescription: string;
  features: string[];
  components: Component[];
  gallery: string[];
  duration: string;
  role: string;
}

const createWhatsAppLink = (componentName: string, componentImage: string): string => {
  const phoneNumber = "+917994715830"; // <-- REPLACE WITH YOUR WHATSAPP NUMBER
  const message = `Hello! I'm interested in buying the ${componentName}. Product Image: ${componentImage}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Smart POS System",
    description: "A smart Point-of-Sale (POS) system for retail, featuring inventory tracking, NFC payments, and receipt printing.",
    image: "https://images.pexels.com/photos/7821532/pexels-photo-7821532.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    tags: ["Raspberry Pi", "NFC", "IoT"],
    date: "2024",
    team: ["Alex", "Marcus"],
    liveUrl: "#",
    githubUrl: "#",
    detailedDescription: "This comprehensive Point-of-Sale system is designed to streamline retail operations. Built around a Raspberry Pi, it features a responsive touchscreen interface, integrated NFC for contactless payments, a thermal printer for receipts, and real-time inventory synchronization with a cloud database.",
    features: ["Touchscreen interface", "NFC & QR code payments", "Thermal receipt printing", "Real-time inventory", "Sales dashboard", "Barcode scanning"],
    components: [
      { name: "Raspberry Pi 4", description: "A powerful single-board computer that acts as the brain of the POS system.", image: "https://images.pexels.com/photos/13194600/pexels-photo-13194600.jpeg?auto=compress&cs=tinysrgb&w=400", price: "₹6,500", buyNowLink: createWhatsAppLink("Raspberry Pi 4", "https://images.pexels.com/photos/13194600/pexels-photo-13194600.jpeg") },
      { name: "PN532 NFC RFID Module", description: "Enables contactless payment functionality using NFC cards and mobile devices.", image: "https://i.imgur.com/8X9vYyD.jpeg", price: "₹850", buyNowLink: createWhatsAppLink("PN532 NFC RFID Module", "https://i.imgur.com/8X9vYyD.jpeg") },
      { name: "58mm Thermal Printer", description: "A compact printer for generating customer receipts quickly and efficiently.", image: "https://i.imgur.com/o2xTohq.jpeg", price: "₹2,200", buyNowLink: createWhatsAppLink("58mm Thermal Printer", "https://i.imgur.com/o2xTohq.jpeg") }
    ],
    gallery: ["https://images.pexels.com/photos/6266273/pexels-photo-6266273.jpeg", "https://images.pexels.com/photos/7605553/pexels-photo-7605553.jpeg"],
    duration: "4 months",
    role: "Hardware Integration"
  },
  {
    id: 6,
    title: "Wearable Health Monitor",
    description: "A wearable device that tracks vital signs like heart rate, SpO2, and body temperature, and sends alerts to a connected app.",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    tags: ["Wearable Tech", "ESP32", "Health"],
    date: "2024",
    team: ["Sarah", "Marcus"],
    liveUrl: "#",
    githubUrl: "#",
    detailedDescription: "A prototype for a personal health monitoring wearable. This device uses an ESP32 for its small size and Bluetooth capabilities. It integrates a MAX30102 sensor for heart rate and SpO2 monitoring and a DS18B20 for accurate body temperature readings.",
    features: ["Continuous heart rate & SpO2", "Real-time temperature tracking", "Bluetooth LE data transmission", "Configurable alerts", "Long battery life"],
    components: [
       { name: "ESP32-S3 Mini", description: "A tiny yet powerful microcontroller with BLE, ideal for wearable applications.", image: "https://i.imgur.com/tHqg2L8.jpeg", price: "₹800", buyNowLink: createWhatsAppLink("ESP32-S3 Mini", "https://i.imgur.com/tHqg2L8.jpeg") },
       { name: "MAX30102 Sensor", description: "A high-sensitivity pulse oximeter and heart-rate sensor for accurate biometric data.", image: "https://i.imgur.com/gD6j3x9.jpeg", price: "₹650", buyNowLink: createWhatsAppLink("MAX30102 Sensor", "https://i.imgur.com/gD6j3x9.jpeg") },
       { name: "DS18B20 Temp Sensor", description: "A digital thermal probe that provides calibrated temperature readings.", image: "https://i.imgur.com/vHh6VnJ.jpeg", price: "₹300", buyNowLink: createWhatsAppLink("DS18B20 Temp Sensor", "https://i.imgur.com/vHh6VnJ.jpeg") }
    ],
    gallery: ["https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg", "https://images.pexels.com/photos/4046985/pexels-photo-4046985.jpeg"],
    duration: "8 months",
    role: "Wearable Design & Sensing"
  },
  {
    id: 8,
    title: "Line Chaser Robot",
    description: "An autonomous robot that detects and follows a line on the ground, built using Arduino and IR sensors.",
    image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
    tags: ["Arduino", "Robotics", "IR Sensors"],
    date: "2025",
    team: ["Rohan", "Priya"],
    liveUrl: "#",
    githubUrl: "#",
    detailedDescription: "A classic robotics project, this Line Chaser Robot autonomously follows a black line on a white surface. It uses an array of IR sensors to detect the line and a differential drive system controlled by an L298N motor driver.",
    features: ["Autonomous line following", "Adjustable speed control", "IR sensor-based detection", "Differential drive system", "Modular chassis design"],
    components: [
      { name: "Arduino Uno R3", description: "The brain of the robot, processing sensor data and controlling the motors.", image: "https://i.imgur.com/Y8a2nZl.jpeg", price: "₹650", buyNowLink: createWhatsAppLink("Arduino Uno R3", "https://i.imgur.com/Y8a2nZl.jpeg") },
      { name: "L298N Motor Driver", description: "A dual H-bridge module that allows for precise speed and direction control of two DC motors.", image: "https://i.imgur.com/Xm1z9yW.jpeg", price: "₹250", buyNowLink: createWhatsAppLink("L298N Motor Driver", "https://i.imgur.com/Xm1z9yW.jpeg") },
      { name: "IR Sensor Array", description: "An array of infrared sensors used to detect the contrast between the line and the surface.", image: "https://i.imgur.com/D4sSg1b.jpeg", price: "₹350", buyNowLink: createWhatsAppLink("IR Sensor Array", "https://i.imgur.com/D4sSg1b.jpeg") }
    ],
    gallery: ["https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg", "https://images.pexels.com/photos/7262446/pexels-photo-7262446.jpeg"],
    duration: "2 months",
    role: "Circuit Design & Programming"
  }
];