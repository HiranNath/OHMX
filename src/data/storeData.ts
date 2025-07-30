export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  buyNowLink?: string;
}

const createWhatsAppLink = (productName: string): string => {
  const phoneNumber = "+917994715830"; // <-- REPLACE WITH YOUR WHATSAPP NUMBER
  const message = `Hello! I'm interested in buying the ${productName}.`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export const storeData: Product[] = [
  {
    id: 1,
    name: "Arduino Uno R3",
    description: "The classic microcontroller for all electronics projects, perfect for beginners and experts alike.",
    image: "/store/uno.jpg",
    price: "₹650",
    buyNowLink: createWhatsAppLink("Arduino Uno R3")
  },
  {
    id: 2,
    name: "Raspberry Pi 4 (4GB)",
    description: "A powerful single-board computer for complex projects, from home media centers to smart POS systems.",
    image: "/store/raspberry-pi-4.jpg",
    price: "₹6,500",
    buyNowLink: createWhatsAppLink("Raspberry Pi 4 (4GB)")
  },
  {
    id: 3,
    name: "L298N Motor Driver",
    description: "A dual H-bridge module that allows for precise speed and direction control of two DC motors.",
    image: "https://i.imgur.com/Xm1z9yW.jpeg",
    price: "₹250",
    buyNowLink: createWhatsAppLink("L298N Motor Driver")
  },
  {
    id: 4,
    name: "ESP32 Dev Kit",
    description: "A microcontroller with built-in Wi-Fi and Bluetooth, perfect for IoT and smart device projects.",
    image: "https://images.pexels.com/photos/14838638/pexels-photo-14838638.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: "₹750",
    buyNowLink: createWhatsAppLink("ESP32 Dev Kit")
  },
  {
    id: 5,
    name: "IR Sensor Array",
    description: "An array of infrared sensors used to detect contrast, ideal for line-following robots.",
    image: "https://i.imgur.com/D4sSg1b.jpeg",
    price: "₹350",
    buyNowLink: createWhatsAppLink("IR Sensor Array")
  },
  {
    id: 6,
    name: "MAX30102 Heart Rate & SpO2 Sensor",
    description: "A high-sensitivity pulse oximeter and heart-rate sensor for accurate biometric data.",
    image: "https://i.imgur.com/gD6j3x9.jpeg",
    price: "₹650",
    buyNowLink: createWhatsAppLink("MAX30102 Sensor")
  },
];