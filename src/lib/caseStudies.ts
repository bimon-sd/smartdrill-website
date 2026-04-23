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
    description: `Project Overview:
This 3,021m HDD crossing involved two large-scale rigs (800T and 480T) operating simultaneously for an intersect operation.

Key Challenges:
- Overhead HV cables creating high electromagnetic interference
- Salt field terrain unsuitable for surface coil deployment
- BTS tracking required throughout the entire operation

Solution:
BTS (Beacon Tracking System) was employed for continuous tracking. The intersect point was located 1,800m from the 800T rig and 1,227m from the 480T rig.

Result:
Successful intersect achieved within 5m tolerance.`,
    images: ["/images/case-studies/binzhou-port/4b5fbb35-eb34-4639-88ec-36cd262b75e4.png", "/images/case-studies/binzhou-port/c7f0feb8-799d-4865-a09a-7e9f6c63f075.png"]
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
    description: `Challenge:
The main HDD rig experienced mud motor failure during the project.

Solution:
The secondary rig was deployed to drill into the main pilot hole from the opposite direction.

Requirement:
Accurate intersection was critical to avoid the need for a side track, which would significantly increase project cost and timeline.

Result:
Precise intersection achieved, allowing the project to proceed without costly remediation.`,
    images: ["/images/case-studies/hutuo-river/54a5fab9-b531-474c-9bc2-2c723166a7a4.png", "/images/case-studies/hutuo-river/d26615f8-e4ed-4d04-b9b8-7fd464995b89.png"]
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
    images: ["/images/case-studies/leshan-shengli/13f582f0-b384-4964-aa8f-c70773a49f1e.png", "/images/case-studies/leshan-shengli/4ba82af6-c747-48e8-a172-707200502b78.png", "/images/case-studies/leshan-shengli/6d4c8571-d184-41ff-a3ee-3d4198a3a812.png", "/images/case-studies/leshan-shengli/71f1c8ae-70d6-4efd-8adc-acfca846c68c.png", "/images/case-studies/leshan-shengli/99742368-b167-4718-ae6d-33cfcb5b6fe7.png"]
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
    description: `Project Overview:
This 1,176m crossing employed the pilot-hole encounter method using two rigs (1,200-ton and 135-ton) operating in gravel layer conditions.

Technical Challenges:
- Entry and exit points located in challenging gravel layer
- Pilot-hole encounter in rock geology demands exceptional guidance accuracy
- Precise entry angle control critical for product pipe connection

Solution:
After casing installation for isolation, the pilot-hole encounter method was employed. Surface-mounted magnetic targets provided continuous positioning guidance.

Result:
Deviation at the encounter point was maintained within 0.5 meters, ensuring successful pipe connection.`,
    images: ["/images/case-studies/west-east-gas-line3/9a2146bd-94af-4a6d-a139-e62a988a774f.png", "/images/case-studies/west-east-gas-line3/a9ecad36-babc-4ab5-b1b5-b37ecd76dda0.png"]
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
    description: `Project Overview:
This HDD crossing was conducted through the reservoir area of the Wujiang River at the Goupitan Hydropower Station.

Project Parameters:
- Total crossing length: 2,143m
- Vertical depth to lowest point: 238m (217m from river surface)
- Surface section width: 800m
- Flanked by mountainous terrain with 200m elevation difference

Geological Conditions:
- Limestone, shale, and dolomitic limestone formations
- Multiple karst caves and fractured zones encountered
- Complete mud recovery impossible throughout the process

Solution:
Large-depth magnetic targets and AC circular coils provided positioning guidance from both sides toward the encounter point.

Guidance System:
- SmartDrill BTS/Intersection
- Dual rig operation (600-ton and 300-ton rigs)

Result:
Final deviation at encounter: 0.5m laterally and 0.9m vertically.`,
    images: ["/images/case-studies/meitan-wengan/440d8eb9-622b-48de-a3d4-607064dd9a19.png", "/images/case-studies/meitan-wengan/7c7677aa-87c3-46db-9ef0-74097defe6ff.png", "/images/case-studies/meitan-wengan/a540bc05-f2ef-499b-9505-19c8dcef1cb5.png", "/images/case-studies/meitan-wengan/b229c274-5b7b-473d-b609-59bacafe81bb.png", "/images/case-studies/meitan-wengan/bf6e53f1-dbfd-4d70-86ea-aadf5e92b921.png", "/images/case-studies/meitan-wengan/d322e061-244c-4b8b-871f-f83fb6380c10.png", "/images/case-studies/meitan-wengan/e50eab2d-57a6-4068-ae04-e5501ee2263b.png", "/images/case-studies/meitan-wengan/ff9a7b74-a8eb-4085-9eb9-01b36c027558.png"]
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
    description: `Initial Attempt:
The original guided drilling operation was unsuccessful due to challenging gravel layer conditions at both entry and exit points.

Remediation Strategy:
A new pilot hole was drilled from the central casing at the exit point, connecting to the original drill string — a remedial pilot-hole encounter operation.

Technical Implementation:
- Two sets of SmartDrill guidance systems deployed
- Pilot-hole encounter system combined with steering tools
- Dual deflection sections in both horizontal and vertical planes

Result:
Precise encounter achieved according to design specifications, successfully completing the crossing.`,
    images: ["/images/case-studies/qinghai-yellow-river/a404ef1c-8597-4cc0-bce0-152e9465e157.png", "/images/case-studies/qinghai-yellow-river/b3147aea-eeac-409c-bdab-ce47d6cf0d36.png"]
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
    description: `Project Overview:
This 713m directional drilling project employed the pilot-hole encounter method in challenging sandstone geology.

Site Conditions:
- Entry and exit points located in gravel layer
- Casing installed for isolation before drilling

Technical Approach:
- Two sets of SmartDrill steering tools combined with encounter system
- Encounter section strategically positioned within the curved bend segment due to trajectory depth

Guidance System:
- SmartDrill BTS/Intersection
- Continuous tracking throughout the operation

Result:
Perfectly precise encounter achieved, following the planned trajectory into the encounter point.`,
    images: ["/images/case-studies/qiupu-river/dc8b843d-c388-4121-8ee4-0b0f523ffadf.png", "/images/case-studies/qiupu-river/eb1e3022-30ef-4cd7-baa4-117c3f66fb72.png"]
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
    description: `Project Overview:
This 2,718.8m crossing presented multiple technical challenges requiring SmartDrill's advanced guidance solutions.

Key Challenges:
- Complicated and challenging drilling trajectory
- Limited area for beacon setup
- Drilling under pond area where surface coil is unavailable
- Maximum intersect detection range: 40m

Solution:
Smart Intersect tool deployed for accurate target intersection, enabling precise boring operations despite surface accessibility limitations.

Equipment Deployed:
- SmartDrill BTS/Intersection system
- Clay/silty sand formation compatible tooling

Result:
Successful completion of this complex crossing with precise intersection achieved.`,
    images: ["/images/case-studies/sino-kuwait-b7/951b5eef-7175-471f-9223-c96a45800b4e.png", "/images/case-studies/sino-kuwait-b7/f24359fa-d0f6-4bec-970b-42e2a4f564f9.png"]
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
    description: `Challenge:
The main HDD rig experienced mud motor failure during the project.

Solution:
The secondary rig was deployed to drill into the main pilot hole from the opposite direction.

Requirement:
Accurate intersection was critical to avoid the need for a side track, which would significantly increase project cost and timeline.

Result:
Precise intersection achieved, allowing the project to proceed without costly remediation.`,
    images: ["/images/case-studies/yantai-port/32e32b43-77aa-4a85-89bd-f4b890e1e911.png", "/images/case-studies/yantai-port/8ad23d85-8456-45ab-af00-8a4b983d9428.png"]
  },
  {
    slug: "europe-feedback",
    title: "European Customer Feedback",
    isImageOnly: true,
    stats: {
      length: ""
    },
    description: "On-site installation and project execution feedback from European customers.",
    images: ["/images/case-studies/europe-feedback/012366a7-004d-4952-a852-a5d630b7a504.png", "/images/case-studies/europe-feedback/06dd152d-970a-473c-bbec-5f06b158fb06.png", "/images/case-studies/europe-feedback/1a73693e-ddf4-4c17-a758-f497c00623dd.png", "/images/case-studies/europe-feedback/2817303b-f609-4bfb-8f65-d21304579bb3.png", "/images/case-studies/europe-feedback/61405535-6365-46dc-a116-0c61841dc9b6.png", "/images/case-studies/europe-feedback/702a1a5e-368e-4601-84ed-7b78a6060732.png", "/images/case-studies/europe-feedback/725096ba-ee5a-4302-ba73-9bc02e359fae.png", "/images/case-studies/europe-feedback/8d2c9ea0-dabe-46a5-92f9-f14183a95e3b.png", "/images/case-studies/europe-feedback/ca1075d6-c86f-4fc0-b08b-ec4c818ae9a8.png", "/images/case-studies/europe-feedback/ce367ad4-6ef6-49e3-9013-86204a81b3a7.png"]
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
