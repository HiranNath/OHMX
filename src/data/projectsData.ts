export interface Component {
  id: number; // A unique ID for each component is required
  name: string;
  description: string;
  image: string;
  price: string;
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

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Smart attendence system",
    description: "A smart attendance system using ESP32, integrated with Google Sheets for real-time logging, tracking, and student management.",
    image: "store/esp32.png",
    tags: ["ESP32", "NFC", "IoT"],
    date: "2024",
    team: ["AYYAPPA DAS"],
    liveUrl: "#",
    githubUrl: "#",
    detailedDescription: "This comprehensive Point-of-Sale system is designed to streamline retail operations. Built around a Raspberry Pi, it features a responsive touchscreen interface, integrated NFC for contactless payments, a thermal printer for receipts, and real-time inventory synchronization with a cloud database.",
    features: ["Touchscreen interface", "NFC & QR code payments", "Thermal receipt printing", "Real-time inventory", "Sales dashboard", "Barcode scanning"],
    components: [
      { id: 101, name: "Raspberry Pi 4", description: "A powerful single-board computer that acts as the brain of the POS system.", image: "https://images.pexels.com/photos/13194600/pexels-photo-13194600.jpeg?auto=compress&cs=tinysrgb&w=400", price: "₹6,500" },
      { id: 102, name: "PN532 NFC RFID Module", description: "Enables contactless payment functionality using NFC cards and mobile devices.", image: "https://i.imgur.com/8X9vYyD.jpeg", price: "₹850" },
      { id: 103, name: "58mm Thermal Printer", description: "A compact printer for generating customer receipts quickly and efficiently.", image: "https://i.imgur.com/o2xTohq.jpeg", price: "₹2,200" }
    ],
    gallery: ["https://images.pexels.com/photos/6266273/pexels-photo-6266273.jpeg", "https://images.pexels.com/photos/7605553/pexels-photo-7605553.jpeg"],
    duration: "4 months",
    role: "Hardware Integration"
  },
  {
    id: 6,
    title: "Portable oxygen mask",
    description: "A portable oxygen mask system using an AMBU bag for emergency respiratory support in remote or critical situations.",
    image: "store/vent.png",
    tags: ["Wearable Tech", "ESP32", "Health"],
    date: "2024",
    team: ["AYYAPPA DAS"],
    liveUrl: "#",
    githubUrl: "#",
    detailedDescription: "A prototype for a personal health monitoring wearable. This device uses an ESP32 for its small size and Bluetooth capabilities. It integrates a MAX30102 sensor for heart rate and SpO2 monitoring and a DS18B20 for accurate body temperature readings.",
    features: ["Continuous heart rate & SpO2", "Real-time temperature tracking", "Bluetooth LE data transmission", "Configurable alerts", "Long battery life"],
    components: [
       { id: 601, name: "ESP32-S3 Mini", description: "A tiny yet powerful microcontroller with BLE, ideal for wearable applications.", image: "https://i.imgur.com/tHqg2L8.jpeg", price: "₹800" },
       { id: 602, name: "MAX30102 Sensor", description: "A high-sensitivity pulse oximeter and heart-rate sensor for accurate biometric data.", image: "https://i.imgur.com/gD6j3x9.jpeg", price: "₹650" },
       { id: 603, name: "DS18B20 Temp Sensor", description: "A digital thermal probe that provides calibrated temperature readings.", image: "https://i.imgur.com/vHh6VnJ.jpeg", price: "₹300" }
    ],
    gallery: ["https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg", "https://images.pexels.com/photos/4046985/pexels-photo-4046985.jpeg"],
    duration: "8 months",
    role: "Wearable Design & Sensing"
  },
  {
    id: 8,
    title: "Line Chaser Robot",
    description: "An autonomous robot that detects and follows a line on the ground, built using Arduino and IR sensors.",
    image: "store/lf2.webp",
    tags: ["Arduino", "Robotics", "IR Sensors"],
    date: "2025",
    team: ["ayyappadas"],
    liveUrl: "#",
    githubUrl: "#",
    detailedDescription: "A classic robotics project, this Line Chaser Robot autonomously follows a black line on a white surface. It uses an array of IR sensors to detect the line and a differential drive system controlled by an L298N motor driver.",
    features: ["Autonomous line following", "Adjustable speed control", "IR sensor-based detection", "Differential drive system", "Modular chassis design"],
    components: [
      { id: 801, name: "Arduino Uno R3", description: "The brain of the robot, processing sensor data and controlling the motors.", image: "https://i.imgur.com/Y8a2nZl.jpeg", price: "₹650" },
      { id: 802, name: "L298N Motor Driver", description: "A dual H-bridge module that allows for precise speed and direction control of two DC motors.", image: "https://i.imgur.com/Xm1z9yW.jpeg", price: "₹250" },
      { id: 803, name: "IR Sensor Array", description: "An array of infrared sensors used to detect the contrast between the line and the surface.", image: "https://i.imgur.com/D4sSg1b.jpeg", price: "₹350" }
    ],
    gallery: ["https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg", "https://images.pexels.com/photos/7262446/pexels-photo-7262446.jpeg"],
    duration: "2 months",
    role: "Circuit Design & Programming"
  }
];