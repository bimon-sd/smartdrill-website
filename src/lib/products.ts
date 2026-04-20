export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  specs: string[];
  benefits: string[];
  image: string;
  specsImage?: string;
}

export const products: Product[] = [
  {
    id: "steering-tool",
    name: "Steering Tool (Probe)",
    subtitle: "Accurate Survey & Magnetic Source Receiver",
    description: "The probe provides accurate survey information via state-of-the-art magnetometer and G-sensor, meanwhile, acts as a receiver for multiple magnetic sources, including AC guide wire and beacon tracking system. It is field proven with high durability, stability and reliability.",
    specs: [
      "Magnetometer + G-sensor technology",
      "Multiple magnetic source reception",
      "High durability & stability",
      "AC guide wire compatible",
      "BTS compatible"
    ],
    benefits: [
      "Real-time position tracking",
      "Millimeter-level accuracy",
      "Proven field reliability",
      "Wide magnetic source compatibility"
    ],
    image: "/images/products/probe.png"
  },
  {
    id: "beacon-tracking-system",
    name: "Beacon Tracking System (BTS)",
    subtitle: "Point-to-Point Magnetic Ranging",
    description: "The system consists of a beacon and a power source, used to verify the position of underground steering tool. The vertical suspension design makes it easy for setup and brings high accuracy. The internal battery is light and reliable, which makes the beacon access to restricted area. It ranges from mini size, standard to large beacon. The maximum survey range is up to 180m.",
    specs: [
      "Survey range up to 180m",
      "Mini / Standard / Large beacon options",
      "Vertical suspension design",
      "Light internal battery",
      "Optional wireless remote kit",
      "Optional drone survey support"
    ],
    benefits: [
      "Not restricted by terrain",
      "Distinct advantages in river/mountain crossings",
      "Easy setup with high accuracy",
      "Longer (deeper) range than competitors",
      "Higher accuracy & reliability",
      "Portable design"
    ],
    image: "/images/products/bts.png",
    specsImage: "/images/products/bts_spe.png"
  },
  {
    id: "mini-beacon",
    name: "Mini Beacon",
    subtitle: "Light & Portable Tracking Solution",
    description: "Light and portable Mini-Beacon is a very efficient system with surveying range up to 65m. Only 1 man for setup and operation. Besides, it can be combined with a drone for specific projects.",
    specs: [
      "Survey range up to 65m",
      "Single person operation",
      "Can combine with drone",
      "Light weight design",
      "High efficiency"
    ],
    benefits: [
      "Maximum portability",
      "Minimal crew required",
      "Flexible deployment options",
      "Ideal for restricted areas"
    ],
    image: "/images/products/minibts_1.png"
  },
  {
    id: "wireless-remote",
    name: "Wireless Remote Control (WRC)",
    subtitle: "Remote BTS Operation Kit",
    description: "The BTS offers an optional wireless remote control kit for beacon operation. This add-on enables remote control, while manual control remains possible without it. The kit streamlines the beacon measurement process and is mandatory for drone-assisted beacon positioning.",
    specs: [
      "Wireless network communication",
      "Real-time status display (voltage, current, operation status, duration)",
      "Computer software control support",
      "Mandatory for drone operations",
      "Start/Stop remote operation"
    ],
    benefits: [
      "Remote beacon control",
      "Streamlined measurement process",
      "Enables drone-assisted positioning",
      "Backup manual control available"
    ],
    image: "/images/products/wrc_spe.png"
  },
  {
    id: "guide-wire-tracking",
    name: "Guide Wire Tracking",
    subtitle: "AC/DC Electromagnetic Guidance",
    description: "The guide wire tracking system is available in AC and DC modes, and the surface loop is varied in large coil (P2) with full coverage of centerline, small coil (APS), and circular mini-coil. Multiple turns can be applied in coil layout to increase the magnetic field strength. With high-resolution probe and AC power supplies, the maximum surveying depth of the large coil is up to 300m.",
    specs: [
      "AC and DC modes available",
      "Large coil (P2) - up to 300m depth",
      "Small coil (APS) option",
      "Circular mini-coil available",
      "Multiple turns for stronger magnetic field",
      "12.5 Amps max output current"
    ],
    benefits: [
      "Maximum 300m surveying depth",
      "Full centerline coverage option",
      "Flexible coil configurations",
      "High-resolution tracking",
      "Adaptive voltage adjustment"
    ],
    image: "/images/products/全图示意图.png"
  },
  {
    id: "beacon-signal-power-supply",
    name: "Beacon Signal Power Supply",
    subtitle: "Rugged Field-Ready Magnetic Source",
    description: "This unit powers the magnetic target to generate alternating magnetic signals. Designed for harsh field conditions, it features a ruggedized engineering enclosure with triple-proof protection and potted circuit boards for durability and low failure rates. The built-in 12V lithium battery supports 30+ positioning cycles per charge. An optional 24V external battery can be connected for extended range and accuracy. Upgradeable with a remote control kit for wireless operation. Backed by a 3-year warranty.",
    specs: [
      "12V lithium battery (30+ cycles per charge)",
      "Optional 24V external battery for extended range",
      "Triple-proof protection",
      "Potted circuit boards",
      "Remote control kit upgradeable",
      "3-year warranty"
    ],
    benefits: [
      "30+ positioning cycles per charge",
      "Extended range with 24V option",
      "Designed for harsh conditions",
      "Low failure rate",
      "Wireless operation upgrade"
    ],
    image: "/images/products/bts_power.png"
  },
  {
    id: "pwd",
    name: "Pressure Measurement While Drilling (PWD)",
    subtitle: "Real-Time Pressure Monitoring",
    description: "PWD consists of a pressure module and a fixed sub. It contains two pressure sensors measuring internal pipe pressure and annular pressure, respectively. The sensors indirectly contact drilling fluid to obtain readings, which are transmitted to the surface in real time. Surface steering software displays live data, enables high/low-pressure alarms for kick risk warning, and calculates mud density and weight-on-bit based on annular pressure.",
    specs: [
      "Internal pipe pressure sensor",
      "Annular pressure sensor",
      "Real-time data transmission",
      "High/low-pressure alarms",
      "Kick risk warning",
      "Mud density calculation"
    ],
    benefits: [
      "Real-time pressure monitoring",
      "Kick risk prevention",
      "Drilling optimization",
      "Safer operations"
    ],
    image: "/images/products/pwd.png"
  },
  {
    id: "intersect-tracking",
    name: "Intersect Tracking System",
    subtitle: "Target Intersection & Ranging",
    description: "Adding an AC electromagnetic transmitter module on one side makes the intersection and tracking to the probe on the other side available. Target tool can be accurately positioned and intersected within a range of 40m. The transmitter module is compatible with ParaTrack steering tool and APS probe. Rotating Magnet Ranging System is available from Smartdrill, and RM sub with various magnetic moment can be customized.",
    specs: [
      "40m intersection range",
      "AC electromagnetic transmitter",
      "ParaTrack compatible",
      "APS probe compatible",
      "Rotating Magnet Ranging System available",
      "Customizable RM sub"
    ],
    benefits: [
      "Independent of drill bit RPM limitations",
      "Better performance in soft formation",
      "Intersection at horizontal and curve sections",
      "Single HDD rig emergency intersect",
      "Flexible BHA installation"
    ],
    image: "/images/products/关系示意图.png"
  },
  {
    id: "smartcross-software",
    name: "SmartCross Guidance Software",
    subtitle: "Integrated HDD Control Center",
    description: "SmartCross is a tracking software used for horizontal directional drilling, integrating the functions of drilling trajectory design, underground data acquisition and processing, real-time display as well as calculation of drill bit position, and surveying data management. It is featured in powerful data processing and analysis as well as high visualization. It consists of several modules with a friendly interface and intuitive operation.",
    specs: [
      "Drilling trajectory design",
      "Underground data acquisition & processing",
      "Real-time drill bit position display",
      "Surveying data management",
      "Multiple module system",
      "High visualization"
    ],
    benefits: [
      "All-in-one HDD control",
      "Powerful data processing",
      "Intuitive operation",
      "Friendly user interface"
    ],
    image: "/images/products/software.png"
  }
];

export const magneticGuidanceSystem = {
  title: "Magnetic Guidance System",
  subtitle: "Four Essential Components",
  description: "Magnetic guidance system consists of four parts:",
  components: [
    {
      name: "Laptop",
      description: "Installed with guidance software"
    },
    {
      name: "Interface Unit",
      description: "Communicates with probe and fulfills operation in combination with laptop"
    },
    {
      name: "Magnetic Sources",
      description: "Surface coil or beacon, powered by AC supplies, generating magnetic field for tracking"
    },
    {
      name: "BHA",
      description: "Consists of top/bottom centralizers, wet connect, probe, spacer bar and stinger"
    }
  ]
};
