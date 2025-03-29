const phoneData = {
  "samsung-galaxy-a26-5g": {
    name: "Samsung Galaxy A26 5G",
    price: "₹24,999",
    image: "/assets/samsung-a26.jpg",
    specifications: {
      general: {
        processor: "Samsung Exynos 1280 (5nm)",
        os: "Android 13, One UI 5",
        ram: "6GB / 8GB",
        storage: "128GB / 256GB",
      },
      display: {
        type: "6.6-inch PLS LCD",
        resolution: "1080 x 2408 pixels",
        refreshRate: "120Hz",
      },
      camera: {
        main: "50MP (Wide) + 2MP (Depth)",
        selfie: "13MP (Front)",
        features: "LED Flash, HDR, Panorama",
      },
      battery: {
        capacity: "5000mAh",
        charging: "25W Fast Charging",
      },
      connectivity: {
        network: "5G / 4G / 3G / 2G",
        wifi: "Wi-Fi 802.11 a/b/g/n/ac, Dual-band",
        bluetooth: "v5.2",
        usb: "USB Type-C 2.0",
      },
      features: {
        sensors: "Fingerprint (Side-mounted), Accelerometer, Proximity, Compass",
      },
    },
    prices: {
      Amazon: "₹24,999",
      Flipkart: "₹24,890",
      Croma: "₹25,199",
    },
    alternatives: [
      { name: "iQOO Z7 5G", price: "₹23,999" },
      { name: "Nothing Phone (2a)", price: "₹24,999" },
      { name: "Realme 11 Pro 5G", price: "₹21,999" },
    ],
    competitors: [
      { name: "Samsung Galaxy A25 5G", price: "₹23,999" },
      { name: "Samsung Galaxy A15 5G", price: "₹22,999" },
      { name: "Poco X5", price: "₹21,999" },
    ],
  },
};

export default phoneData;
