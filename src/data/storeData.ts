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
    image: "store/L298N.jpg",
    price: "₹250",
    buyNowLink: createWhatsAppLink("L298N Motor Driver")
  },
  {
    id: 4,
    name: "ESP32 Dev Kit",
    description: "A microcontroller with built-in Wi-Fi and Bluetooth, perfect for IoT and smart device projects.",
    image: "store/esp.jpg",
    price: "₹750",
    buyNowLink: createWhatsAppLink("ESP32 Dev Kit")
  },
  {
    id: 5,
    name: "Arduino nano",
    description: "An array of infrared sensors used to detect contrast, ideal for line-following robots.",
    image: "store/nano.png",
    price: "₹350",
    buyNowLink: createWhatsAppLink("IR Sensor Array")
  },
  {
    id: 6,
    name: "atmega 328p",
    description: "A high-sensitivity pulse oximeter and heart-rate sensor for accurate biometric data.",
    image: "store/328.jpg",
    price: "₹650",
    buyNowLink: createWhatsAppLink("MAX30102 Sensor")
  },

{
    id: 7,
    name: "Arduino mega",
    description: "A high-sensitivity pulse oximeter and heart-rate sensor for accurate biometric data.",
    image: "store/mega.png",
    price: "₹650",
    buyNowLink: createWhatsAppLink("MAX30102 Sensor")
  },

{
    id: 8,
    name: "Tlp 250",
    description: "A high-sensitivity pulse oximeter and heart-rate sensor for accurate biometric data.",
    image: "store/tlp250.webp",
    price: "₹650",
    buyNowLink: createWhatsAppLink("MAX30102 Sensor")
  },

{
    id: 9,
    name: "capacitor 16v/100uf",
    description: "A high-sensitivity pulse oximeter and heart-rate sensor for accurate biometric data.",
    image: "store/cap16-100.jpg",
    price: "₹8",
    buyNowLink: createWhatsAppLink("MAX30102 Sensor")
  },

{
    id: 10,
    name: "irfp240",
    description: "A high-sensitivity pulse oximeter and heart-rate sensor for accurate biometric data.",
    image: "store/irfp240.jpg",
    price: "₹8",
    buyNowLink: createWhatsAppLink("MAX30102 Sensor")
  },














];