export interface CaseStudy {
  slug: string;
  title: string;
  location?: string;
  stats: {
    length: string;
    pipeSpec?: string;
    elevation?: string;
    formation?: string;
    rigs?: string;
    guidance?: string;
  };
  description: string;
  images: string[];
  isImageOnly?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "binzhou-port",
    title: "Binzhou Port – Xinyue Oil Pipeline Salt Field HDD Intersect",
    stats: {
      length: "3,021m",
      pipeSpec: "Φ406.4×7.92",
      elevation: "21m",
      formation: "Clay/silty sand, high salt content",
      rigs: "DW/TXS 800T/480T",
      guidance: "SmartDrill BTS/Intersection"
    },
    description: "Several overhead HV cables which brings high interference. Salt field is not available for surface coil. BTS was used all the way for tracking. Intersect area was 1800m from 800T rig and 1227m from 480T rig. Intersect was successfully done within 5m.",
    images: []
  },
  {
    slug: "hutuo-river",
    title: "HutuoRiver HDD Intersect",
    stats: {
      length: "2,500m",
      pipeSpec: "Φ406.4×7.92",
      elevation: "21m",
      formation: "Strongly-weathered granite",
      guidance: "SmartDrill BTS/Intersection"
    },
    description: "Main HDD rig suffered mud motor failure, therefore, the other rig must drill into the main pilot hole. Accurate intersection must be achieved to avoid side track.",
    images: []
  },
  {
    slug: "leshan-shengli",
    title: "Leshan Shengli Village Tunnel Drainage Hole Directional Drilling Project",
    location: "Shengli Village Tunnel, Jinkouhe District, Leshan City",
    stats: {
      length: "520m",
      pipeSpec: "Φ200mm",
      formation: "Argillaceous slate"
    },
    description: `Located within the Shengli Village Tunnel in Jinkouhe District, Leshan City, this project involves a 520-meter horizontal drill with a 200mm pipe diameter, passing through argillaceous slate formations.

The Shengli Village Tunnel is a critical section of the Leshan-Hanyuan Expressway, with a single bore length of 3.6 km and a total dual-bore length of 7.2 km.

Due to the unique geological conditions, the tunnel faces severe water ingress, significantly hampering excavation progress. After over five years of construction, 500 meters remain unconnected in each bore. To address the water issue, a drainage hole was designed to redirect water from the unexcavated sections.

Key Steering Challenges:
- Mid-Section Positioning Limitations: Magnetic target positioning could only be applied at the entry and exit sections, leaving the mid-section untraceable.
- Baseline Azimuth Calibration: Establishing a precise reference azimuth in the entry segment was critical.
- Magnetic Interference from Tunnel Supports: Steel frame installations caused accuracy deviations.
- Harsh Field Conditions: Poor communication, RTK unavailability, and precision requirements for magnetic target placement.

Despite these complexities, SmartDrill's technical team successfully executed the directional drilling according to specifications, earning high recognition from the client, Sichuan Road and Bridge Corporation.`,
    images: []
  },
  {
    slug: "west-east-gas-line3",
    title: "Line 3 of West-East Gas Pipeline Tuanhe River Crossing Project",
    stats: {
      length: "1,176m",
      pipeSpec: "Φ1219",
      elevation: "32m",
      formation: "Strongly-weathered granite",
      rigs: "Guden 1200-ton / Guden 135-ton",
      guidance: "SmartDrill BTS/Intersection"
    },
    description: "The entry and exit points of this construction drive were both located in a gravel layer. After casing was installed for isolation, the pilot-hole encounter method was employed. Executing a pilot-hole encounter in rock geology places extremely high demands on the accuracy of the guidance and positioning system, as well as on the precision of drilling trajectory control. In particular, the entry angle at the encounter point is crucial for the smooth connection of the product pipe. Guided by surface-mounted magnetic targets, the deviation at the encounter point was within 0.5 meters.",
    images: []
  },
  {
    slug: "meitan-wengan",
    title: "Meitan-Weng'an Natural Gas Pipeline Project Wujiang River HDD",
    stats: {
      length: "2,143m",
      pipeSpec: "Φ406.4×12.5",
      elevation: "238m",
      formation: "Limestone, shale, dolomitic limestone (karst caves)",
      rigs: "Guden 600-ton / Xinrui 300-ton",
      guidance: "SmartDrill BTS/Intersection"
    },
    description: "This crossing was conducted through the reservoir area of the Wujiang River at the Goupitan Hydropower Station. The vertical depth from the entry point to the lowest point of the crossing is 238 meters, with 217 meters from the river surface to the lowest point. The surface section spans 800 meters in width, flanked by mountainous terrain with a 200-meter elevation difference on both sides. The drilling passed through limestone, shale, and dolomitic limestone formations, encountering multiple karst caves and fractured zones along the trajectory. Complete mud recovery was unachievable throughout the entire process. Large-depth magnetic targets and AC circular coils were used for positioning guidance from both sides toward the encounter point. The final deviation at the encounter was 0.5 meters laterally and 0.9 meters vertically.",
    images: []
  },
  {
    slug: "qinghai-yellow-river",
    title: "Qinghai Yellow River Crossing Project (Pilot-Hole Encounter)",
    stats: {
      length: "940m",
      pipeSpec: "Φ324mm",
      elevation: "31m",
      formation: "Sandstone",
      guidance: "SmartDrill BTS/Intersection"
    },
    description: "The entry and exit points of this construction are both situated in a gravel layer. The initial guided drilling operation was unsuccessful. As a result, a new pilot hole had to be drilled from the central casing at the exit point and connected to the original drill string. This operation was a remedial pilot-hole encounter. Using two sets of SmartDrill guidance systems combined with a pilot-hole encounter system, a precise encounter was achieved according to the design, incorporating dual deflection sections in both the horizontal and vertical planes.",
    images: []
  },
  {
    slug: "qiupu-river",
    title: "Qiupu River Directional Drilling Project (Pilot-Hole Encounter)",
    stats: {
      length: "713m",
      pipeSpec: "Φ324mm×7.1mm",
      elevation: "43m",
      formation: "Sandstone",
      guidance: "SmartDrill BTS/Intersection"
    },
    description: "The entry and exit points of this drilling operation were both located in a gravel layer. After installing casing for isolation, the pilot-hole encounter method was implemented. The guidance system consisted of two sets of SmartDrill steering tools combined with an encounter system. Due to the considerable depth of the designed trajectory, the encounter section was strategically positioned within the curved bend segment. Following the planned trajectory into the encounter point, a perfectly precise encounter was successfully achieved.",
    images: []
  },
  {
    slug: "sino-kuwait-b7",
    title: "Sino–Kuwait Gas Pipeline B7 HDD Intersect",
    stats: {
      length: "2,718.8m",
      pipeSpec: "Φ508×10",
      elevation: "60m",
      formation: "Clay/silty sand",
      guidance: "SmartDrill BTS/Intersection"
    },
    description: "Key challenges: 1) Complicated and challenging drilling trajectory; 2) Limited area for beacon setup; 3) Drilling under pond area where surface coil is not available; 4) Smart Intersect tool for accurate intersect, detected at a range of 40m.",
    images: []
  },
  {
    slug: "yantai-port",
    title: "Yantai Port Crude Oil Pipeline North Jiaolai River HDD",
    stats: {
      length: "2,250m",
      pipeSpec: "Φ711×14.2",
      elevation: "30m",
      formation: "Strongly-weathered granite",
      guidance: "SmartDrill BTS/Intersection"
    },
    description: "Main HDD rig suffered mud motor failure, therefore, the other rig must drill into the main pilot hole. Accurate intersection must be achieved to avoid side track.",
    images: []
  },
  {
    slug: "europe-feedback",
    title: "European Customer Feedback",
    isImageOnly: true,
    description: "On-site installation and project execution feedback from European customers.",
    images: []
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getAdjacentCaseStudies(slug: string): { prev: CaseStudy | null; next: CaseStudy | null } {
  const index = caseStudies.findIndex(cs => cs.slug === slug);
  return {
    prev: index > 0 ? caseStudies[index - 1] : null,
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : null
  };
}
