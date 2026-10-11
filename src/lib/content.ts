import { img } from "./site";
import { series } from "./series";

export type Faq = { q: string; a: string };
export type Highlight = { title: string; body: string };

export type LandingKind = "spares" | "brand" | "service" | "industry" | "series";

export type Landing = {
  slug: string;
  kind: LandingKind;
  name: string;
  /** <title> tag, without the site suffix */
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Rich SEO content (2-3 paragraphs) for the page body */
  content: string;
  image?: string;
  imageAlt?: string;
  /** Things we typically supply or do, shown as a scannable list */
  covers: string[];
  coversLabel: string;
  highlights: Highlight[];
  faqs: Faq[];
  /** Pre-selects the brand in the quote form */
  formBrand?: string;
  /** Short label used in the quote form + email subject */
  leadTopic: string;
};

export type Hub = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Rich SEO content (2-3 paragraphs) for the hub page body */
  content: string;
  kind: LandingKind;
  faqs: Faq[];
};

/* ------------------------------------------------------------------ */
/* Spares                                                              */
/* ------------------------------------------------------------------ */

const spares: Landing[] = [
  {
    slug: "plcs-i-o-modules",
    kind: "spares",
    name: "PLCs & I/O modules",
    title: "PLC & I/O Module Spares in South Africa",
    description:
      "PLC CPUs, I/O modules, power supplies and communication cards for Siemens, Delta, Allen-Bradley and Schneider systems. Send the part number for availability, lead time and price.",
    h1: "PLC and I/O module spares for plants that can't wait",
    intro:
      "CPUs, digital and analogue I/O, power supplies and communication cards for maintenance, expansions and upgrades. Send the order number from the module and we come back with availability, lead time and price.",
    content:
      "Programmable logic controllers form the backbone of industrial automation across South African plants, from food processing lines in the Western Cape to mining operations on the Witwatersrand. When a PLC module fails — whether it is a CPU, a digital input card or a power supply — the cost of downtime escalates rapidly, which is why having a reliable source for genuine spares is essential for any maintenance team. We work with Siemens, Delta, Schneider Electric and Allen-Bradley platforms to supply the exact module your system needs.\n\nSourcing the correct PLC spare requires more than matching a part number. Hardware and firmware revisions must align with your existing rack configuration, and communication modules need to speak the same protocol as your network. Our engineers review the full order number from your module label to confirm compatibility before you commit to a purchase. For discontinued platforms such as the Siemens S7-300, we maintain access to New Old Stock and can advise on like-for-like replacements or staged migration paths to current hardware.\n\nIn South Africa, lead times on imported automation components can stretch to several weeks, which makes local availability critical when a line is down. We hold common modules in stock for same-day or next-day courier dispatch to sites in Gauteng, KwaZulu-Natal, the Eastern Cape and beyond. For urgent breakdowns, send us the order number with the machine-down flag and we will respond with a confirmed availability lead time and a firm price — no guesswork, no delays while you wait for a call back.",
    image: img("Open-control-panel-showing-intricate-wiring-and-modules.webp"),
    imageAlt: "Open control panel showing wiring and PLC modules",
    coversLabel: "What we source",
    covers: [
      "PLC CPUs and memory cards",
      "Digital and analogue I/O modules",
      "Rack and panel power supplies",
      "Profinet, Profibus, Ethernet/IP and Modbus communication cards",
      "Backplanes, racks and terminal connectors",
    ],
    highlights: [
      {
        title: "Match the exact order number",
        body: "PLC modules with similar names are often not interchangeable. The full order number and hardware or firmware version on the module label is what lets us source the right one first time.",
      },
      {
        title: "Discontinued modules",
        body: "If the manufacturer has retired a module, we tell you whether it can still be sourced, or whether a supported replacement exists and what changing over involves.",
      },
      {
        title: "Engineers on the other end",
        body: "Requests are reviewed by people who understand the system, so you get a straight answer on compatibility rather than a catalogue lookup.",
      },
    ],
    faqs: [
      {
        q: "What do you need from me to quote a PLC module?",
        a: "The full order number from the module label is best. A clear photo of the label also works. Add the quantity and whether the job is urgent.",
      },
      {
        q: "Can you find modules that are no longer manufactured?",
        a: "Often, yes. Send the part number and we will check availability and advise on alternatives if there is no like-for-like option.",
      },
      {
        q: "Do I need to send the whole PLC to get a spare?",
        a: "No. In most cases the module can be removed and sent, or we can ship a replacement for your team to install.",
      },
      {
        q: "Can you match the hardware and firmware version?",
        a: "Yes. The version details on the module label tell us which exact variant to source so it works with your existing rack and program.",
      },
      {
        q: "What are the most common PLC spares you supply?",
        a: "CPUs, digital and analogue I/O modules, power supplies and communication cards. If it mounts in a rack or panel, we can usually source it.",
      },
      {
        q: "How do I find the order number on my module?",
        a: "It is printed on the front or side label of the module, usually starting with the manufacturer prefix such as 6ES7 for Siemens. A close-up photo is enough.",
      },
      {
        q: "Can you supply a replacement before the failed module is returned?",
        a: "In many cases yes, depending on the part. Tell us the situation and we will confirm whether an advance replacement is possible.",
      },
      {
        q: "What brands of PLC spares do you carry?",
        a: "We mainly source Siemens, Delta, Schneider Electric and Allen-Bradley spares, along with other leading automation brands on request.",
      },
      {
        q: "How quickly can I get a PLC module in South Africa?",
        a: "If the part is in stock locally it can be couriarded the same or next day. Imported parts depend on availability, which we confirm with the quote.",
      },
      {
        q: "Will a replacement module need to be programmed?",
        a: "Some modules need firmware or hardware configuration matched to your system. Send us the details and we will advise before you order.",
      },
    ],
    leadTopic: "PLC / I/O module",
  },
  {
    slug: "vfds-drives",
    kind: "spares",
    name: "VFDs & drives",
    title: "VFD & Drive Spares in South Africa",
    description:
      "Variable frequency drives, soft starters and drive accessories for industrial motor control. Fast sourcing and engineering support across South Africa.",
    h1: "Variable frequency drives and motor control spares",
    intro:
      "AC drives and motor control components for efficient speed control, energy savings and reliable operation. If a drive has failed or you are planning an upgrade, send us the nameplate details.",
    content:
      "Variable frequency drives are among the most energy-intensive components in any industrial plant, controlling everything from pumps and fans to conveyors and compressors. When a VFD fails, the impact extends beyond the drive itself — production stops, motors run uncontrolled and energy efficiency drops. South African plants facing rising electricity tariffs from municipalities and Eskom are increasingly aware of the total cost of drive ownership, making timely spares sourcing and correct replacement selection critical to operational budgets.\n\nChoosing the right replacement drive involves matching several key parameters: supply voltage, motor power in kW, rated output current, and the fieldbus or I/O requirements of your control system. A like-for-like swap using the existing nameplate data is always the fastest path, but when the original drive has been discontinued, our engineers can cross-reference to a current model that fits your motor and mechanical load. We also supply the accessories that make a drive installation reliable — braking resistors, line and output reactors, keypads and communication option cards — so nothing is left to chance when the replacement goes in.\n\nFor urgent breakdowns, we understand that every hour of downtime carries a cost. We prioritise machine-down requests and can often confirm availability on common drive platforms from local stock, with courier delivery to your site the same or next day. For larger or less common drives, we provide realistic lead times and can discuss interim solutions such as a temporary rental unit while your permanent spare is sourced. Our fault-finding team can also test suspected failed drives to determine whether a repair is more economical than a full replacement.",
    image: img("Variable-Frequency-Drive-Panels.jpg"),
    imageAlt: "Variable frequency drive panels",
    coversLabel: "What we source",
    covers: [
      "AC variable frequency drives",
      "Soft starters",
      "Keypads, control boards and option cards",
      "Braking resistors and line or output reactors",
      "Drive communication modules",
    ],
    highlights: [
      {
        title: "Size it from the motor",
        body: "A like-for-like replacement is simplest. If the original is discontinued, motor power, current, supply voltage and control requirements decide what fits.",
      },
      {
        title: "Repair, replace or retrofit",
        body: "Our fault finding team can tell you whether the drive itself has failed or whether the cause sits elsewhere, before you spend on the wrong part.",
      },
      {
        title: "Commissioning support",
        body: "We can help with parameter setup and commissioning so the new drive runs the process the way the old one did.",
      },
    ],
    faqs: [
      {
        q: "How do I choose a replacement drive?",
        a: "Send the nameplate of the existing drive and the motor. Supply voltage, motor power and current, and any fieldbus or I/O requirements are what we check first.",
      },
      {
        q: "Can you help if I'm not sure the drive is the problem?",
        a: "Yes. Our fault finding and commissioning service covers drives, PLCs and control systems.",
      },
      {
        q: "What details are on a drive nameplate?",
        a: "Rated power in kW, input and output voltage, current, and the drive model or order number. A photo of the nameplate is the easiest way to send them.",
      },
      {
        q: "Do you supply drives from all major brands?",
        a: "We source leading drive brands including Siemens, Delta, Schneider and Allen-Bradley. Send the nameplate details and we will confirm availability.",
      },
      {
        q: "Can a smaller or larger drive replace my current one?",
        a: "It depends on the motor and the application. We match the drive to the motor's rated current and the mechanical load, not just the kW rating.",
      },
      {
        q: "What accessories do I need for a new drive install?",
        a: "Often braking resistors, line or output reactors, and communication modules. We can quote these alongside the drive so nothing is missed on the day.",
      },
      {
        q: "Can you commission a replacement drive?",
        a: "Yes. Our commissioning covers parameter setup, motor identification and testing so the drive runs your process the way the old one did.",
      },
      {
        q: "What is the difference between a VFD and a soft starter?",
        a: "A VFD varies the motor speed continuously; a soft starter only controls the start and stop. Tell us what the machine needs to do and we will advise.",
      },
      {
        q: "How do I know if a drive is worth repairing versus replacing?",
        a: "Age, availability of spares and the extent of the damage all matter. Send us the drive details and we will give you a straight recommendation.",
      },
      {
        q: "Can you supply the keypad or display for my drive?",
        a: "Yes, keypads, control boards and option cards are among the most common drive spares we source.",
      },
      {
        q: "Do you deliver drives to sites outside major cities?",
        a: "Yes, we deliver nationwide. Tell us the site and we will confirm courier or freight options with the quote.",
      },
    ],
    leadTopic: "VFD / drive",
  },
  {
    slug: "hmis-operator-panels",
    kind: "spares",
    name: "HMIs & operator panels",
    title: "HMI & Operator Panel Spares in South Africa",
    description:
      "HMIs and operator panels for new installations and retrofits. Clear system visibility, alarms and control, sourced and supported by automation engineers.",
    h1: "HMIs and operator panels for new builds and retrofits",
    intro:
      "Operator panels give your team clear visibility of the process, alarms and control. We supply replacement and upgrade panels and can help migrate the application.",
    content:
      "Human-machine interfaces are the window your operators have into the automation system, displaying process values, alarm states and machine status at a glance. When an HMI panel fails — whether it is a cracked touchscreen, a failed backlight or a complete electronics failure — operators lose visibility and control, forcing the plant into blind running or a costly stoppage. We supply replacement HMI panels and operator terminals for the major automation brands, helping South African plants restore full operator visibility as quickly as possible.\n\nReplacing an HMI is not always straightforward. Screen sizes, mounting cut-outs, communication protocols and software versions must all align with the existing PLC and panel design. If your original panel is still available we can source a like-for-like unit that drops straight into the existing cut-out. Where the panel has been discontinued — as happens with older Siemens TP series or PanelView terminals — we can recommend a current equivalent that fits the panel opening and communicates with your PLC, and our programming team can help migrate the application to the new hardware.\n\nBeyond replacement panels, we also supply the components that keep HMIs operational in harsh plant environments: protective overlays that extend touchscreen life in dusty conditions, communication and programming cables, and panel mounting accessories. For plants upgrading from older monochrome panels to modern colour touchscreens, we can guide the transition including application redesign and operator training. Send us the model number of your existing panel and we will confirm availability, compatibility and lead time for delivery to your site anywhere in South Africa.",
    image: img("Image.jpg"),
    imageAlt: "Industrial HMI operator panel",
    coversLabel: "What we source",
    covers: [
      "Touch panels and keypad operator panels",
      "Replacement screens and protective overlays",
      "Communication and programming cables",
      "Panel mounting accessories",
    ],
    highlights: [
      {
        title: "Like-for-like or upgrade",
        body: "We can source the same panel where it is available, or recommend a current panel that fits the cut-out and talks to your PLC.",
      },
      {
        title: "Application transfer",
        body: "If the project needs to move to a new panel, our PLC programming and support team can help with the changeover.",
      },
    ],
    faqs: [
      {
        q: "Can you replace an HMI that is no longer available?",
        a: "Send the model number. We will confirm availability, and if it is obsolete we can advise on a suitable replacement and what the migration involves.",
      },
    ],
    leadTopic: "HMI / operator panel",
  },
  {
    slug: "sensors-control-components",
    kind: "spares",
    name: "Sensors & control components",
    title: "Industrial Sensors & Control Components in South Africa",
    description:
      "Industrial sensors, switches, relays and control components for automation reliability, safety and accuracy. Quoted fast, delivered nationwide.",
    h1: "Sensors, switches and control components",
    intro:
      "The small parts that stop a line when they fail. We source sensors, switches, relays and control components so your automation stays accurate and safe.",
    content:
      "Industrial sensors and control components are the nervous system of any automated plant, detecting position, presence, pressure, temperature and flow to keep processes running safely and accurately. When a single proximity sensor or limit switch fails on a production line, the result is often a complete stoppage that costs far more than the component itself. We source a comprehensive range of sensors and control components for South African plants, helping maintenance teams keep these critical parts in stock and respond quickly when failures occur.\n\nSelecting the correct sensor or control component requires attention to detail that goes beyond the part number. For proximity sensors, the sensing range, output type (PNP or NPN), supply voltage and connector style must all match the application and existing cabling. Safety-rated components — including safety switches, safety relays and safety mats — must be matched exactly to the safety integrity level of the system, with no room for substitution. Our engineers work from your model number, datasheet or a clear photo of the existing component to confirm the correct match before you order.\n\nWe hold common sensors and switches in local stock for rapid courier delivery, and can source less common instruments including pressure transmitters, temperature sensors and flow measurement devices for process applications. For plants running multi-brand automation environments, we can supply components from different manufacturers that integrate with your existing control system. Whether you need a single emergency sensor to get a line running again or a planned list of components for a shutdown, send us the details and we will respond with availability and pricing for delivery anywhere in South Africa.",
    image: img("proximity_sensor.jpg"),
    imageAlt: "Industrial proximity sensor",
    coversLabel: "What we source",
    covers: [
      "Inductive, capacitive and photoelectric sensors",
      "Limit and safety switches",
      "Control and safety relays",
      "Timers and counters",
      "Pressure and temperature instruments",
    ],
    highlights: [
      {
        title: "Match the sensing detail",
        body: "Sensing range, output type, supply voltage and connector all matter. A model number or a photo of the old sensor is usually enough for us to confirm the match.",
      },
      {
        title: "Safety components",
        body: "For safety-rated parts we confirm the exact part number against your system so nothing is substituted by guesswork.",
      },
    ],
    faqs: [
      {
        q: "Can I send a photo of a sensor with no visible part number?",
        a: "Yes. Send what you have along with the machine or panel it came from and we will work from there.",
      },
      {
        q: "What types of sensors do you supply most often?",
        a: "Inductive and capacitive proximity sensors, photoelectric sensors, limit switches, and pressure and temperature instruments.",
      },
      {
        q: "How do I specify a proximity sensor correctly?",
        a: "Sensing range, output type (PNP or NPN), supply voltage and connector style are the key details. The model number on the sensor body is best.",
      },
      {
        q: "Can you supply safety-rated components?",
        a: "Yes. For safety switches, safety relays and safety mats we confirm the exact part number against your system so nothing is substituted by guesswork.",
      },
      {
        q: "What is the difference between a sensor and a limit switch?",
        a: "A sensor detects presence without physical contact, while a limit switch is triggered by mechanical movement. Tell us the application and we will advise.",
      },
      {
        q: "Do you supply relays and timers as well?",
        a: "Yes. Control relays, interface relays, timers and counters are part of our regular control component range.",
      },
      {
        q: "Can you match a sensor with an M12 connector to my existing cabling?",
        a: "Yes. Connector type, pinout and cable length all matter. Send the details or a photo and we will confirm the match.",
      },
      {
        q: "What voltage do industrial sensors usually run on?",
        a: "Most run on 24 V DC, though some instruments use other supplies. The sensor label or datasheet will tell you, or send it to us to check.",
      },
      {
        q: "How fast can you get sensors delivered?",
        a: "Common sensors and switches are often in stock and can be couriered quickly. We confirm availability when you request a quote.",
      },
      {
        q: "Can you supply instruments for pressure and temperature measurement?",
        a: "Yes. We source pressure transmitters, temperature sensors and related instruments for industrial applications.",
      },
      {
        q: "Do you help with sensor selection for a new application?",
        a: "Yes. Tell us what you are detecting, the environment and the control system and we will recommend suitable options.",
      },
    ],
    leadTopic: "Sensors / control components",
  },
  {
    slug: "panel-components",
    kind: "spares",
    name: "Panel components",
    title: "Control Panel Components in South Africa",
    description:
      "Contactors, circuit protection, power supplies, relays and terminal components for control panels. Sourced for maintenance teams and panel builders.",
    h1: "Control panel components for maintenance and build",
    intro:
      "Everything that sits inside the cabinet around your PLC and drives. We supply panel components for repairs, upgrades and new builds.",
    content:
      "Control panels are the operational heart of any automated plant, housing the components that distribute power, switch loads, protect circuits and interface between the field devices and the control system. When a panel component fails — a burnt-out contactor, a tripped circuit breaker or a failed 24 V DC power supply — the consequences ripple outward to every machine that panel serves. We supply a comprehensive range of control panel components to maintenance teams and panel builders across South Africa, helping keep production lines running and new installations on schedule.\n\nThe components inside a control panel must work together as a system: contactors sized correctly for the motor load, circuit breakers with the right tripping characteristic, power supplies with adequate current capacity for all the connected devices, and relays and terminal blocks that match the wiring schematic. Sourcing these components from a single supplier simplifies procurement, reduces the risk of mismatched parts and speeds up urgent repairs. We can quote your full bill of materials line by line, matching specifications from your schematic or from the failed component.\n\nFor emergency panel repairs, we understand that time is critical. Common contactors, circuit breakers, power supplies and interface relays are held in local stock for same-day or next-day courier delivery to your site. For larger panel build projects, we can source the complete component list and confirm lead times so your panel shop is not left waiting for parts. Whether you are replacing a single failed component or building a new panel from scratch, send us your requirements and we will respond with availability, pricing and delivery options tailored to your location in South Africa.",
    image: img("industrial-panel-1024x682.jpg"),
    imageAlt: "Industrial control panel",
    coversLabel: "What we source",
    covers: [
      "Contactors and overload relays",
      "Circuit breakers and motor protection",
      "24 V DC power supplies",
      "Interface relays and terminal blocks",
      "Push buttons, selector switches and pilot lights",
    ],
    highlights: [
      {
        title: "One request, several lines",
        body: "Panel jobs rarely need a single part. Paste your full parts list into the quote form and we will price the lot.",
      },
      {
        title: "Built to the drawing",
        body: "Send the schematic reference or the old part and we will match ratings, coil voltages and mounting.",
      },
    ],
    faqs: [
      {
        q: "Can I send a full bill of materials?",
        a: "Yes. Paste it into the notes field or message it on WhatsApp and we will respond line by line.",
      },
      {
        q: "What panel components do you supply most often?",
        a: "Contactors, overload relays, circuit breakers, 24 V DC power supplies, interface relays, terminal blocks and push buttons.",
      },
      {
        q: "How do I match a contactor to my application?",
        a: "Motor power or current, coil voltage and the number of auxiliary contacts needed are what we match. Send the old contactor's rating or the motor details.",
      },
      {
        q: "Can you supply 24 V DC power supplies?",
        a: "Yes. DIN-rail power supplies in the common power ratings are a regular item. Tell us the current you need and we will confirm the size.",
      },
      {
        q: "Do you stock items for urgent panel repairs?",
        a: "Many common panel components are available locally for urgent requests. Mark the job urgent when you send it and we will prioritise the response.",
      },
      {
        q: "Can you match a circuit breaker to replace a damaged one?",
        a: "Yes. Send the rating, the number of poles and the tripping characteristic, or a photo of the existing breaker, and we will confirm the replacement.",
      },
      {
        q: "What is the difference between a contactor and a relay?",
        a: "A contactor is built for switching higher-power loads like motors, while a relay handles smaller control signals. The load type decides which is correct.",
      },
      {
        q: "Do you supply terminal blocks and DIN-rail accessories?",
        a: "Yes. Terminal blocks, end stops, markers and DIN-rail hardware are part of our range for repairs and new builds.",
      },
      {
        q: "Can you help identify a component from a schematic reference?",
        a: "Yes. Send the schematic or the reference on the drawing and we will advise on the correct part.",
      },
      {
        q: "Do you supply push buttons, selector switches and pilot lights?",
        a: "Yes. Operator devices for panels are a regular item. Send the colour, contact configuration and panel cut-out size and we will confirm.",
      },
      {
        q: "Can you quote components for a whole new control panel?",
        a: "Yes. Send your bill of materials or the schematic and we will price the components line by line.",
      },
    ],
    leadTopic: "Panel components",
  },
  {
    slug: "motors-accessories",
    kind: "spares",
    name: "Motors & accessories",
    title: "Industrial Electric Motors & Accessories in South Africa",
    description:
      "Industrial electric motors and accessories for plants and OEMs. Send the nameplate details for availability, lead time and price.",
    h1: "Industrial electric motors and accessories",
    intro:
      "Send us the nameplate and we will confirm what is available. Motors are matched on power, speed, frame size and mounting so they drop straight in.",
    content:
      "Electric motors are the workhorses of South African industry, driving pumps, fans, compressors, conveyors and processing equipment in every sector from mining and manufacturing to water treatment and food production. When an industrial motor fails, the cost of unplanned downtime — lost production, overtime labour and expedited freight — far exceeds the price of the motor itself. We supply a comprehensive range of industrial electric motors and accessories, helping plants and OEMs source the correct motor quickly and at a competitive price.\n\nSelecting the right motor requires matching several critical parameters from the nameplate: power rating in kW, speed or number of poles, frame size which determines shaft height and mounting dimensions, supply voltage and mounting type — foot-mounted, flange-mounted or face-mounted. Getting any of these wrong means the motor will not fit the existing installation or will not deliver the required performance. We work from your nameplate details or a clear photo to confirm the exact match, and where the original motor is no longer available, we can cross-reference to a current equivalent that fits the mechanical and electrical installation.\n\nBeyond the motors themselves, we supply the accessories that complete the installation: encoders and feedback devices for closed-loop speed control, brake kits for holding and stopping applications, terminal boxes, couplings and mounting hardware. For motors controlled by variable frequency drives, we can verify that the motor and drive combination works as a system, checking insulation ratings and current compatibility. We deliver motors across South Africa with courier options for urgent breakdowns and freight services for larger units, keeping your operation running with minimum delay.",
    image: img("electric-motor-effiency-valley-power-systems-scaled-1-300x200.jpeg"),
    imageAlt: "Industrial electric motors",
    coversLabel: "What we source",
    covers: [
      "Three-phase industrial motors",
      "Encoders and feedback devices",
      "Brake and terminal box accessories",
      "Couplings and mounting items",
    ],
    highlights: [
      {
        title: "Nameplate first",
        body: "Power, speed, frame size, voltage and mounting type are what we match. A photo of the nameplate is the quickest way to start.",
      },
      {
        title: "Pair it with the drive",
        body: "If the motor runs from a drive, we can check the two together so the combination works as a system.",
      },
    ],
    faqs: [
      {
        q: "What details do you need to quote a motor?",
        a: "Power in kW, speed or poles, frame size, supply voltage, mounting type and the make of the existing motor if known.",
      },
      {
        q: "How do I read the frame size on a motor?",
        a: "The frame size is stamped on the nameplate and determines the shaft height and mounting dimensions. It must match for a direct replacement.",
      },
      {
        q: "Can you supply a motor with a different mounting type?",
        a: "Sometimes. Foot-mounted, flange-mounted and face-mounted motors can be cross-referenced. Send the existing motor details and we will confirm.",
      },
      {
        q: "What is the difference between IE3 and IE4 efficiency motors?",
        a: "They are efficiency classes, with IE4 being more efficient than IE3. We can advise on the right class for your application and availability.",
      },
      {
        q: "Do you supply encoders and feedback devices?",
        a: "Yes. Encoders for speed feedback on motors are part of our range, matched to your drive and application.",
      },
      {
        q: "Can you match a motor to my existing drive?",
        a: "Yes. Send the drive details and the motor nameplate and we will confirm the combination works as a system.",
      },
      {
        q: "What accessories do you supply for motors?",
        a: "Brake kits, terminal boxes, couplings, mounting items and cooling components are among the accessories we can source.",
      },
      {
        q: "How long does motor delivery usually take?",
        a: "Common frame sizes and powers are often available locally. Larger or less common motors take longer, which we confirm with the quote.",
      },
      {
        q: "Do you supply single-phase motors?",
        a: "We focus on three-phase industrial motors but can advise on single-phase options for smaller applications.",
      },
      {
        q: "Can a repaired motor be supplied instead of new?",
        a: "It depends on the motor and the repairers available. Send the details and we will give you the options and a straight recommendation.",
      },
      {
        q: "Do you help select a motor for a new machine build?",
        a: "Yes. Tell us the load, speed and duty requirements and we will help specify the right motor.",
      },
    ],
    leadTopic: "Motor / accessories",
  },
];

/* ------------------------------------------------------------------ */
/* Brands                                                              */
/* ------------------------------------------------------------------ */

const brands: Landing[] = [
  {
    slug: "siemens-plc-solutions",
    kind: "brand",
    name: "Siemens",
    title: "Siemens PLC Spares & Solutions in South Africa",
    description:
      "Siemens PLC spares and automation support: S7-300, S7-1200, S7-1500, HMIs and drives. Spares replacement, system upgrades and lifecycle management.",
    h1: "Siemens PLC spares and automation solutions",
    intro:
      "Industrial automation solutions built on Siemens PLC platforms, supporting system upgrades, spares replacement and lifecycle management.",
    content:
      "Siemens is one of the most widely installed automation platforms in South African industry, with SIMATIC PLCs controlling everything from water treatment plants and food processing lines to mining operations and manufacturing facilities. The longevity of the platform — spanning the S7-300, S7-1200 and S7-1500 generations — means that plants often run multiple generations of Siemens hardware simultaneously, each with different spares requirements. We support Siemens-equipped plants with a comprehensive spares sourcing service that covers the full SIMATIC range.\n\nThe Siemens S7-300 platform, though now classified as a mature product by the manufacturer, remains in service at hundreds of South African plants and is still widely supported by automation engineers. We source S7-300 CPUs, digital and analogue I/O modules, power supplies and Profibus communication processors from local and international stock. For newer installations, the S7-1200 and S7-1500 platforms offer compact and high-performance control respectively, and we supply the full range of current-generation modules including the latest firmware revisions.\n\nBeyond spares, we provide lifecycle management support for Siemens platforms, helping plants plan for obsolescence as the manufacturer transitions products to end-of-life status. When a module becomes discontinued, we advise on the available options — sourcing remaining stock, migrating to a supported replacement, or planning a staged system upgrade. Our engineers are experienced with TIA Portal programming and can assist with program migration, commissioning and documentation for systems transitioning between Siemens generations. Whether you need a single urgent CPU replacement or a multi-year lifecycle plan for your installed Siemens base, we provide the expertise and sourcing capability to keep your plant running.",
    image: img("Siemens.jpg"),
    imageAlt: "Siemens automation equipment",
    coversLabel: "Typical Siemens requests",
    covers: [
      "SIMATIC S7-300, S7-1200 and S7-1500 modules",
      "SIMATIC HMI panels",
      "SINAMICS and MICROMASTER drives",
      "Power supplies and communication processors",
      "Migration planning from older S7 platforms",
    ],
    highlights: [
      {
        title: "Send the 6ES7 number",
        body: "The full order number on the module is the fastest route to an accurate quote.",
      },
      {
        title: "Lifecycle thinking",
        body: "If a platform is nearing end of life, we help you plan between a like-for-like spare and a staged upgrade.",
      },
    ],
    faqs: [
      {
        q: "Can you source older S7-300 modules?",
        a: "Send the order number and we will check availability, and advise on options if a direct match is no longer available.",
      },
      {
        q: "What is the difference between S7-1200 and S7-1500?",
        a: "S7-1200 is a compact controller for smaller applications, while S7-1500 is a high-performance platform for larger systems. We can advise on the right fit.",
      },
      {
        q: "Can you help migrate from S7-300 to S7-1500?",
        a: "Yes. We support migration planning including hardware, program conversion and commissioning.",
      },
      {
        q: "Do you supply Siemens HMI panels?",
        a: "Yes. SIMATIC HMI panels from the KTP series up to the Comfort Panels are part of our range.",
      },
      {
        q: "What is the lead time for Siemens spares?",
        a: "Common modules are often available locally. Less common or discontinued items take longer, which we confirm with the quote.",
      },
      {
        q: "Can you supply SINAMICS drives?",
        a: "Yes. SINAMICS G120, S120 and V20 drives are among the most common we source.",
      },
      {
        q: "Do you support TIA Portal programming?",
        a: "Yes. Our engineers work with TIA Portal for S7-1200 and S7-1500 programming and commissioning.",
      },
      {
        q: "Can you supply a replacement CPU for my S7-400 system?",
        a: "Send the order number and we will check availability. S7-400 is a mature platform but many modules are still sourceable.",
      },
      {
        q: "What firmware version do I need for a replacement module?",
        a: "The firmware version on the module label tells us. We match it to your existing system to ensure compatibility.",
      },
      {
        q: "Do you supply Profibus and Profinet communication modules?",
        a: "Yes. CP and CM communication processors for Profibus and Profinet are part of our regular Siemens range.",
      },
    ],
    formBrand: "Siemens",
    leadTopic: "Siemens",
  },
  {
    slug: "delta-plc-solutions",
    kind: "brand",
    name: "Delta",
    title: "Delta PLC & Drive Solutions in South Africa",
    description:
      "Cost-effective Delta PLC and drive solutions for OEMs and industrial plants. Spares, support and scalable control systems.",
    h1: "Delta PLC and drive solutions",
    intro:
      "Cost-effective PLC and drive solutions for OEMs and industrial plants that need reliable performance and scalable control systems.",
    content:
      "Delta Electronics has established a strong presence in the South African automation market as a cost-effective alternative to the larger European and American brands. The DVP series PLCs, AS series controllers and VFD range drives are widely used by OEMs and system integrators who need capable control without the premium price tag. We support Delta-equipped installations with spares sourcing, technical advice and engineering support across the full Delta product range.\n\nFor OEM machine builders, the combination of Delta PLCs and drives offers a compelling value proposition: reliable hardware, accessible programming software and a component cost structure that helps keep machine prices competitive. This makes Delta a popular choice for packaging machines, conveyor systems, process skids and general automation applications in South Africa. We source the complete Delta range including DVP series PLCs and expansion modules, DOP series HMI panels, VFD series AC drives and the communication modules that connect them.\n\nWhen a Delta component fails in a plant, the response needed is the same as for any brand — fast, accurate sourcing of the correct replacement. We hold common Delta modules in stock for rapid delivery, and can source less common items through our international supply chain. Our engineers are experienced with Delta's ISPSoft programming environment and can assist with program recovery, modifications and commissioning. Whether you are an OEM building machines with Delta platforms or a maintenance team keeping an existing Delta installation running, we provide the sourcing capability and technical expertise to support your operation.",
    image: img("Delta.jpg"),
    imageAlt: "Delta automation equipment",
    coversLabel: "Typical Delta requests",
    covers: [
      "Delta PLC controllers and expansion modules",
      "Delta AC drives",
      "Delta HMI panels",
      "Communication modules and cables",
    ],
    highlights: [
      {
        title: "Good fit for OEM builds",
        body: "Delta platforms suit machine builders who want capable control at a sensible cost. We can supply and support them.",
      },
    ],
    faqs: [
      {
        q: "Do you supply Delta drives as well as PLCs?",
        a: "Yes. Send the model and we will confirm availability and lead time.",
      },
      {
        q: "What Delta PLC series do you support?",
        a: "DVP series PLCs and the AS series are the most common we source. Send the model number and we will confirm.",
      },
      {
        q: "Can you supply Delta VFD series drives?",
        a: "Yes. VFD-M, VFD-EL and VFD-C2000 series drives are part of our range.",
      },
      {
        q: "Do you supply Delta HMI panels?",
        a: "Yes. DOP series HMIs are available. Send the model and we will confirm compatibility with your PLC.",
      },
      {
        q: "What is the lead time for Delta spares?",
        a: "Common modules are often available locally. We confirm availability and lead time with the quote.",
      },
      {
        q: "Can you help with Delta PLC programming?",
        a: "Yes. Our engineers work with Delta DVP and AS series programming and commissioning.",
      },
      {
        q: "Do you supply Delta communication modules?",
        a: "Yes. Modbus and Ethernet communication modules for Delta PLCs are part of our range.",
      },
      {
        q: "Can you match a Delta drive to my motor?",
        a: "Yes. Send the motor nameplate and the drive model and we will confirm the combination.",
      },
      {
        q: "What makes Delta a good choice for OEM builds?",
        a: "Delta platforms offer capable control at a sensible cost, making them well suited to machine builders who need reliable performance without over-specifying.",
      },
      {
        q: "Do you supply Delta expansion modules?",
        a: "Yes. Digital and analogue expansion modules for DVP series PLCs are part of our range.",
      },
    ],
    formBrand: "Delta",
    leadTopic: "Delta",
  },
  {
    slug: "schneider-plc-solutions",
    kind: "brand",
    name: "Schneider Electric",
    title: "Schneider Electric Automation Spares in South Africa",
    description:
      "Schneider Electric automation and control solutions focused on process reliability, power management and industrial efficiency.",
    h1: "Schneider Electric automation and control",
    intro:
      "Automation and control solutions focused on process reliability, power management and industrial efficiency.",
    content:
      "Schneider Electric is a global leader in energy management and industrial automation, with a significant installed base across South African industry. The Modicon range of PLCs — from the compact M221 for simple machines through to the M340 for larger process applications — provides scalable control that spans the full breadth of industrial automation requirements. We support Schneider-equipped plants with spares sourcing, system integration advice and lifecycle management across the complete Schneider automation portfolio.\n\nThe breadth of the Schneider range means that plants often use the company's components across multiple levels of the automation architecture: Modicon PLCs and I/O for control, Altivar drives for motor speed regulation, TeSys contactors and overload relays for motor control, and Magelis HMI panels for operator interface. When spares are needed across this range, having a single supplier that understands how these components work together simplifies procurement and reduces the risk of compatibility issues. We source the full Schneider automation range and can quote complete panel lists or individual urgent components.\n\nSchneider's EcoStruxure architecture represents the company's approach to connected automation, enabling devices to communicate data for monitoring, optimisation and predictive maintenance. We can advise on EcoStruxure-compatible components and help source the right parts for plants adopting this architecture. For sites running older Modicon platforms that are approaching end of life, we provide migration planning and sourcing of current-generation replacements. Our engineers have experience with Schneider's Unity Pro programming environment and can support program modifications, commissioning and documentation. Whether you need a single spare contactor or support for a complete control system upgrade, we provide the sourcing and technical expertise to keep your Schneider systems running reliably.",
    image: img("schneider-electric-motorsteuerungen-tesys.webp"),
    imageAlt: "Schneider Electric motor control components",
    coversLabel: "Typical Schneider requests",
    covers: [
      "Modicon PLC controllers and I/O",
      "Altivar drives",
      "TeSys motor control",
      "Magelis HMI panels",
    ],
    highlights: [
      {
        title: "Whole-panel support",
        body: "From contactors to drives to controllers, we can quote the full panel line by line.",
      },
    ],
    faqs: [
      {
        q: "Can you quote motor control components and drives together?",
        a: "Yes. Send everything in one request and we will respond with a single quote.",
      },
      {
        q: "What Schneider PLC platforms do you support?",
        a: "Modicon M221, M241, M251 and the M340 series are the most common we source. Send the model and we will confirm.",
      },
      {
        q: "Can you supply Altivar drives?",
        a: "Yes. Altivar Machine ATV320 and Altivar Process ATV630/930 drives are part of our range.",
      },
      {
        q: "Do you supply TeSys motor control components?",
        a: "Yes. TeSys contactors, overload relays and motor starters are part of our regular range.",
      },
      {
        q: "Can you supply Magelis HMI panels?",
        a: "Yes. Magelis HMIGTO and HMIGTU series panels are available. Send the model and we will confirm.",
      },
      {
        q: "What is the lead time for Schneider spares?",
        a: "Common modules are often available locally. We confirm availability and lead time with the quote.",
      },
      {
        q: "Do you support EcoStruxure architecture?",
        a: "We can advise on EcoStruxure-compatible components and help source the right parts for your architecture.",
      },
      {
        q: "Can you supply Schneider communication modules?",
        a: "Yes. Modbus and Ethernet communication modules for Modicon PLCs are part of our range.",
      },
      {
        q: "Can you help with a Schneider PLC upgrade?",
        a: "Yes. We support upgrades from older Modicon platforms to current ones, including program migration.",
      },
      {
        q: "Do you supply Schneider safety components?",
        a: "Yes. Safety relays and safety-rated components for Schneider systems are part of our range.",
      },
      {
        q: "Can you match a Schneider contactor to my motor?",
        a: "Yes. Send the motor power and the existing contactor model and we will confirm the correct TeSys replacement.",
      },
    ],
    formBrand: "Schneider",
    leadTopic: "Schneider Electric",
  },
  {
    slug: "allen-bradley-plc-solutions",
    kind: "brand",
    name: "Allen-Bradley",
    title: "Allen-Bradley PLC Spares & Support in South Africa",
    description:
      "PLC and automation support for multinational and legacy Rockwell systems, including spares sourcing and system modifications.",
    h1: "Allen-Bradley and legacy Rockwell systems",
    intro:
      "PLC and automation support for multinational and legacy Rockwell systems, including spares sourcing and system modifications.",
    content:
      "Allen-Bradley, a brand of Rockwell Automation, has one of the largest installed bases of any automation platform in South African industry. From the ubiquitous MicroLogix series through CompactLogix and ControlLogix to the PowerFlex range of drives, Allen-Bradley equipment is found in mining operations, food and beverage plants, water utilities and manufacturing facilities across the country. We provide comprehensive spares sourcing and technical support for Allen-Bradley systems, helping plants maintain and extend the life of their installed automation infrastructure.\n\nThe longevity of Allen-Bradley platforms is both a strength and a challenge. Many South African plants have been running MicroLogix and early ControlLogix systems for 15 years or more, and while the hardware remains reliable, sourcing spares for older platforms requires access to specialist stock and a deep understanding of the product range. We maintain sourcing channels for legacy Allen-Bradley modules including CPUs, digital and analogue I/O, communication processors and power supplies for systems that are no longer actively manufactured by Rockwell Automation.\n\nFor plants operating newer Allen-Bradley platforms, we supply the full range of current-generation modules including ControlLogix controllers, 1756 series I/O, CompactLogix controllers and PowerFlex drives. Our engineers are experienced with Rockwell's Studio 5000 programming environment and can support program modifications, system expansions and commissioning. When a platform reaches end of life, we help plants plan the migration path — whether that means a staged upgrade to a current platform or a managed transition that spreads the capital cost over multiple budget cycles. We deliver spares nationwide, with priority courier options for urgent breakdowns.",
    image: img("automation-electrical-control-panel-industrial-spike-electric.jpg.webp"),
    imageAlt: "Industrial control panel with Allen-Bradley automation",
    coversLabel: "Typical Allen-Bradley requests",
    covers: [
      "MicroLogix, CompactLogix and ControlLogix modules",
      "PowerFlex drives",
      "PanelView terminals",
      "Legacy platform spares and support",
    ],
    highlights: [
      {
        title: "Legacy systems are our territory",
        body: "Many plants still run older Rockwell platforms. We help keep them running and plan what comes next.",
      },
    ],
    faqs: [
      {
        q: "Can you support older Rockwell systems?",
        a: "Yes. Send the catalogue number and we will check what can be sourced and what a staged upgrade could look like.",
      },
      {
        q: "What Allen-Bradley PLC platforms do you support?",
        a: "MicroLogix, CompactLogix and ControlLogix are the most common we source. Send the catalogue number and we will confirm.",
      },
      {
        q: "Can you supply PowerFlex drives?",
        a: "Yes. PowerFlex 4, 525 and 755 drives are part of our range.",
      },
      {
        q: "Do you supply PanelView terminals?",
        a: "Yes. PanelView Plus and PanelView 800 terminals are available. Send the model and we will confirm.",
      },
      {
        q: "What is the lead time for Allen-Bradley spares?",
        a: "Common modules are often available locally. We confirm availability and lead time with the quote.",
      },
      {
        q: "Can you help migrate from MicroLogix to CompactLogix?",
        a: "Yes. We support migration planning including hardware, program conversion and commissioning.",
      },
      {
        q: "Do you supply Allen-Bradley communication modules?",
        a: "Yes. Ethernet/IP and DeviceNet communication modules are part of our range.",
      },
      {
        q: "Can you supply safety-rated Allen-Bradley components?",
        a: "Yes. GuardLogix safety controllers and safety-rated I/O are part of our range.",
      },
      {
        q: "Can you match a PowerFlex drive to my motor?",
        a: "Yes. Send the motor nameplate and the drive model and we will confirm the combination.",
      },
      {
        q: "Do you support Studio 5000 programming?",
        a: "Yes. Our engineers work with Studio 5000 for CompactLogix and ControlLogix programming and commissioning.",
      },
      {
        q: "Can you supply replacement I/O modules for ControlLogix?",
        a: "Yes. 1756 series digital and analogue I/O modules are part of our regular range.",
      },
    ],
    formBrand: "Allen-Bradley",
    leadTopic: "Allen-Bradley",
  },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

const services: Landing[] = [
  {
    slug: "plc-programming-support",
    kind: "service",
    name: "PLC programming & support",
    title: "PLC Programming & Support in South Africa",
    description:
      "Development, modification and optimisation of PLC programs to support process improvements, upgrades and fault resolution.",
    h1: "PLC programming and support",
    intro:
      "Development, modification and optimisation of PLC programs to support process improvements, upgrades and fault resolution.",
    content:
      "A PLC program is the intellectual property of your plant — the accumulated knowledge of how your process should run, encoded in logic that has been refined over years of operation. When that program needs to change, whether for a process improvement, a product change or a fault fix, working with engineers who understand both the programming environment and the industrial process is essential. We provide PLC programming and support services for Siemens, Delta, Schneider and Allen-Bradley systems, helping South African plants maintain, optimise and develop their automation software.\n\nOur programming services cover the full scope of PLC software work: making small changes to existing programs to fix a problem or improve performance, developing new programs for expanded or modified production lines, migrating programs from older platforms to current hardware, and documenting existing programs so your team has a clear understanding of how the system works. For plants that have lost program backups or inherited equipment without source code, we can upload the program from the PLC, reverse-engineer its structure and produce fully documented software that your team can maintain going forward.\n\nWe work both on-site and remotely, depending on the nature of the work and the urgency of your situation. For machine-down situations, we can connect remotely to diagnose program-related faults and implement fixes without waiting for an engineer to travel to your site. For larger projects, our engineers attend site to work alongside your team, understand the process in detail and implement changes with minimum disruption to production. All programming work includes documentation so that the changes we make are transparent, maintainable and traceable for your maintenance team.",
    image: img("how-to-connect-plc.jpg"),
    imageAlt: "Engineer connecting to a PLC",
    coversLabel: "What we help with",
    covers: [
      "Program changes and process improvements",
      "Backup, restore and documentation",
      "Migration to current platforms",
      "Remote and on-site support",
    ],
    highlights: [
      {
        title: "Spares and software together",
        body: "When a module is replaced, the program often needs attention too. We handle both so the line restarts properly.",
      },
    ],
    faqs: [
      {
        q: "Which PLC platforms do you work on?",
        a: "We support Siemens, Delta, Schneider and Allen-Bradley systems. Tell us what you are running and we will confirm.",
      },
      {
        q: "Can you work on my existing program without the original source code?",
        a: "Often yes. We can upload the program from the PLC, document it and make the changes you need.",
      },
      {
        q: "Do you provide program documentation?",
        a: "Yes. We can document your program with comments, tag descriptions and a functional description so your team can maintain it.",
      },
      {
        q: "Can you help with a PLC to SCADA connection?",
        a: "Yes. We can set up communication between your PLC and SCADA system using the protocols your equipment supports.",
      },
      {
        q: "What software do you need to program my PLC?",
        a: "Each brand has its own software. We work with TIA Portal, Delta ISPSoft, Schneider Unity Pro and Allen-Bradley Studio 5000.",
      },
      {
        q: "Can you make a small change to my program remotely?",
        a: "In many cases yes, if the PLC can be connected remotely. Tell us what you need changed and we will confirm.",
      },
      {
        q: "Do you offer ongoing support contracts?",
        a: "Yes. We can provide ongoing support for your PLC systems including call-outs, remote support and program changes.",
      },
      {
        q: "Can you help with a PLC upgrade project?",
        a: "Yes. We handle the full upgrade from hardware selection through program migration to commissioning.",
      },
      {
        q: "What information do you need to quote a programming job?",
        a: "The PLC brand and model, what you want changed or achieved, and whether you have the existing program or source code.",
      },
      {
        q: "Can you train my team on the new program?",
        a: "Yes. We can provide handover training so your team understands the changes and can maintain the system.",
      },
    ],
    leadTopic: "PLC programming & support",
  },
  {
    slug: "fault-finding-commissioning",
    kind: "service",
    name: "Fault finding & commissioning",
    title: "Fault Finding & Commissioning for PLCs and Drives",
    description:
      "Rapid diagnosis and troubleshooting of PLC, VFD and control system faults to minimise downtime and restore operations.",
    h1: "Fault finding and commissioning",
    intro:
      "Rapid diagnosis and troubleshooting of PLC, VFD and control system faults to minimise downtime and restore operations.",
    content:
      "When a machine stops, the pressure to get it running again is intense — but replacing components without diagnosing the root cause often leads to repeated failures and escalating costs. Our fault-finding and commissioning service takes a systematic approach to diagnosing why a system is not working, tracing the fault through the control system, the drive, the motor and the process to identify the true cause. We work across PLCs, VFDs and complete control systems from all major brands, providing South African plants with experienced diagnostic support when downtime is at its most expensive.\n\nEffective fault finding requires more than swapping parts. Intermittent faults that occur only under certain conditions, nuisance trips that reset and then recur, and complex interactions between drives and mechanical systems all demand a methodical diagnostic approach. Our engineers use a combination of experience, diagnostic tools and systematic testing to isolate the fault — whether it is a failed I/O module, a parameter that has drifted, a developing motor insulation fault or a wiring issue inside the panel. We document what we find and provide recommendations to prevent the recurrence, so the fix lasts longer than the next shift change.\n\nCommissioning is the other side of our service: setting up new or replacement equipment so it runs correctly from the start. Proper commissioning verifies that the drive parameters match the motor and the mechanical load, that the PLC I/O is wired and functioning as intended, and that the system operates safely and efficiently under all expected conditions. We commission drives, PLCs, complete control panels and automated machines, providing functional testing and handover documentation. For urgent breakdowns, we prioritise response and can attend site quickly to get your plant back in production with minimum delay.",
    image: img("images.jpg"),
    imageAlt: "Engineer fault finding on a control system",
    coversLabel: "What we help with",
    covers: [
      "PLC, drive and control faults",
      "Intermittent faults and nuisance trips",
      "Commissioning of new or replacement equipment",
      "Advice on what to replace and what to keep",
    ],
    highlights: [
      {
        title: "Fix the cause, not just the symptom",
        body: "Replacing the failed part does not always fix the problem. We trace the fault so it does not come back.",
      },
    ],
    faqs: [
      {
        q: "Can you help before I order a spare?",
        a: "Yes. Describe the fault and we will help you decide what is actually failing.",
      },
      {
        q: "What information do you need to diagnose a fault?",
        a: "The symptoms, any alarm codes, what the machine was doing when it faulted, and photos or videos of the fault all help.",
      },
      {
        q: "Can you help with intermittent faults?",
        a: "Yes. Intermittent faults are often the hardest to find. We can monitor the system and trace the root cause.",
      },
      {
        q: "Do you offer on-site fault finding?",
        a: "Yes. Our engineers can attend site to diagnose and resolve faults on your equipment.",
      },
      {
        q: "Can you commission a new drive or PLC?",
        a: "Yes. We handle parameter setup, motor identification, I/O checking and functional testing.",
      },
      {
        q: "What is the difference between fault finding and commissioning?",
        a: "Fault finding diagnoses why something is not working. Commissioning sets up and verifies new or replacement equipment.",
      },
      {
        q: "Can you help with nuisance trips on my drive?",
        a: "Yes. Nuisance trips are often caused by parameter settings, cabling issues or a developing fault. We trace the cause.",
      },
      {
        q: "Do you provide a report after fault finding?",
        a: "Yes. We document what we found, what was done and any recommendations to prevent a repeat.",
      },
      {
        q: "Can you help with a machine that stopped after a power outage?",
        a: "Yes. Power events often cause parameter loss or hardware damage. We can diagnose and restore the system.",
      },
      {
        q: "How quickly can you respond to a breakdown?",
        a: "We prioritise machine-down situations. Contact us and we will confirm the fastest way to get an engineer involved.",
      },
      {
        q: "Can you test a repaired drive before I install it?",
        a: "In many cases yes. We can test drives and other equipment to verify the repair before it goes back in service.",
      },
    ],
    leadTopic: "Fault finding & commissioning",
  },
  {
    slug: "turnkey-automation-projects",
    kind: "service",
    name: "Turnkey automation projects",
    title: "Turnkey Automation Projects in South Africa",
    description:
      "End-to-end automation projects including design, panel assembly, installation, programming and commissioning.",
    h1: "Turnkey automation projects in South Africa",
    intro:
      "End-to-end automation projects including design, panel assembly, installation, programming and commissioning.",
    content:
      "Delivering an automation project successfully requires coordination across multiple disciplines — electrical design, panel fabrication, software development, installation, commissioning and documentation — all working to the same specification and timeline. Our turnkey automation project service provides South African plants and OEMs with a single point of accountability for the entire project, from initial concept through to final handover. By managing the full scope internally, we reduce the interfaces, miscommunications and delays that plague multi-vendor projects.\n\nEvery turnkey project follows a structured process: we begin with a detailed review of your process requirements and existing equipment, produce a design specification covering the control architecture, panel layout and component selection, then proceed through panel assembly, factory testing, installation, programming and commissioning. Regular design reviews keep you involved at key decision points, and our factory acceptance testing identifies issues before equipment leaves our workshop, minimising site commissioning time. Throughout the project, a single project manager is your point of contact, ensuring clear communication and accountability.\n\nWe build control panels to our own designs or to customer specifications, using quality components from the brands we supply. Our panel workshop handles everything from small wall-mounted control stations to large multi-cabinet motor control centres. On completion, we provide comprehensive handover documentation including electrical drawings, panel layouts, PLC programs, HMI applications and operation manuals. We can also provide operator and maintenance training so your team is confident with the new system from day one. Whether you are automating a single machine or a complete production line, our turnkey service delivers a working system — not a collection of parts.",
    image: img("images-1.jpg"),
    imageAlt: "Automation project in an industrial plant",
    coversLabel: "What we help with",
    covers: [
      "Design and specification",
      "Panel assembly",
      "Installation and wiring",
      "Programming and commissioning",
    ],
    highlights: [
      {
        title: "One team from design to handover",
        body: "A single point of accountability for the whole project, with the spares supply built in.",
      },
    ],
    faqs: [
      {
        q: "How do I start a project enquiry?",
        a: "Tell us what you want to automate or upgrade, the platform if you have one, and your timeline. We will come back with the next steps.",
      },
      {
        q: "What is included in a turnkey project?",
        a: "Design, panel assembly, installation, programming, commissioning and handover documentation. One team from start to finish.",
      },
      {
        q: "Can you work with my existing equipment?",
        a: "Yes. We can integrate new automation with your existing plant and equipment.",
      },
      {
        q: "Do you handle the electrical installation?",
        a: "Yes. Our team handles the electrical installation and wiring as part of the project.",
      },
      {
        q: "Can you build a control panel to my specification?",
        a: "Yes. We build panels to your requirements or to our own design based on your process needs.",
      },
      {
        q: "What is the typical timeline for a turnkey project?",
        a: "It depends on the size and complexity. A small panel build might take weeks; a larger system takes months. We confirm the timeline after scoping.",
      },
      {
        q: "Do you provide project documentation?",
        a: "Yes. We provide electrical drawings, panel layouts, PLC programs, HMI applications and operation manuals.",
      },
      {
        q: "Can you commission the system on site?",
        a: "Yes. Our engineers commission the system on site and hand over to your team with training.",
      },
      {
        q: "Do you offer support after handover?",
        a: "Yes. We provide ongoing support including call-outs, remote support and modifications.",
      },
      {
        q: "Can you upgrade an existing system rather than replace it?",
        a: "Often yes. We can upgrade parts of your system, such as the PLC or HMI, while keeping the rest.",
      },
      {
        q: "How do you manage project quality?",
        a: "We follow a structured process with design reviews, factory acceptance testing, site commissioning and handover checks.",
      },
    ],
    leadTopic: "Turnkey project",
  },
  {
    slug: "engineering-support",
    kind: "service",
    name: "Engineering support",
    title: "Automation Engineering Support in South Africa",
    description:
      "Technical guidance on component selection, system integration, upgrades and lifecycle planning.",
    h1: "Engineering support for selection, upgrades and lifecycle planning",
    intro:
      "Technical guidance on component selection, system integration, upgrades and lifecycle planning.",
    content:
      "Not every automation challenge requires a call-out or a project — sometimes what you need is expert advice before you commit to a purchasing decision or a course of action. Our engineering support service provides South African plants with technical guidance on component selection, system compatibility, upgrade planning and lifecycle management. A short conversation with an experienced engineer can prevent an expensive wrong order, identify a simpler solution than you anticipated, or help you plan an upgrade that spreads the capital cost over multiple budget cycles.\n\nComponent selection is one of the most common reasons plants contact us. Choosing between two similar drives, determining whether a sensor is the right type for a harsh environment, or confirming that a replacement module is compatible with an existing system — these are decisions that benefit from engineering experience. We review your application details and advise on the best option, taking into account not just the technical specifications but also availability in the South African market, lead times and total cost of ownership. For obsolescence planning, we review your installed base and identify components that are approaching end of life, recommending proactive upgrades or strategic spares holding to avoid future emergencies.\n\nWe also provide support for system integration challenges, such as connecting new equipment to an existing PLC network, adding a drive to a legacy control system or integrating data from different brand devices into a unified monitoring platform. Our engineers understand the communication protocols used in industrial automation — Profinet, Profibus, Modbus, Ethernet/IP — and can advise on the most practical approach for your specific situation. Whether you need a one-off consultation or ongoing engineering support as your plant evolves, we are available to help you make informed decisions about your automation infrastructure.",
    image: img("Engineering-Design.jpg"),
    imageAlt: "Engineering design for an automation system",
    coversLabel: "What we help with",
    covers: [
      "Choosing the right component",
      "Compatibility checks",
      "Upgrade and obsolescence planning",
      "System integration advice",
    ],
    highlights: [
      {
        title: "Before you buy",
        body: "A short conversation with an engineer can save an expensive wrong order.",
      },
    ],
    faqs: [
      {
        q: "Is engineering support only for customers who buy spares?",
        a: "No. Send your question and we will tell you how we can help.",
      },
      {
        q: "Can you help me choose between two components?",
        a: "Yes. Send the options and the application and we will advise on the better choice.",
      },
      {
        q: "Do you provide compatibility checks?",
        a: "Yes. We check that new components work with your existing system before you order.",
      },
      {
        q: "Can you help with obsolescence planning?",
        a: "Yes. We can review your installed base and advise on end-of-life components and upgrade paths.",
      },
      {
        q: "What is the difference between a retrofit and an upgrade?",
        a: "A retrofit adds new capability to existing equipment. An upgrade replaces old equipment with new. We advise on the right approach.",
      },
      {
        q: "Can you help with system integration?",
        a: "Yes. We advise on how to integrate new components with your existing control system.",
      },
      {
        q: "Do you provide technical specifications?",
        a: "Yes. We can provide datasheets, specifications and selection guidance for components.",
      },
      {
        q: "Can you help with a risk assessment for a control system?",
        a: "Yes. We can advise on safety and reliability aspects of your control system design.",
      },
      {
        q: "Do you offer design reviews?",
        a: "Yes. We can review your control system design and advise on improvements or issues.",
      },
      {
        q: "Can you help with energy efficiency improvements?",
        a: "Yes. We can advise on drives, motors and control strategies that reduce energy consumption.",
      },
      {
        q: "What is lifecycle management for automation components?",
        a: "It means planning for the availability and support of components over the life of your plant, so you are not caught by surprise when something becomes obsolete.",
      },
    ],
    leadTopic: "Engineering support",
  },
  {
    slug: "predictive-maintenance-plant-monitoring",
    kind: "service",
    name: "Predictive maintenance & plant monitoring",
    title: "Predictive Maintenance and Plant Monitoring in South Africa",
    description:
      "Our plant monitoring app tracks your equipment and alerts you to developing faults, so maintenance can be planned instead of reacting to breakdowns.",
    h1: "Predictive maintenance and plant monitoring",
    intro:
      "We have built a plant monitoring app that tracks the condition of your equipment and flags developing problems early, so you can plan the repair instead of reacting to a breakdown.",
    content:
      "The traditional approach to industrial maintenance is reactive — wait for something to fail, then fix it. The cost of this approach extends far beyond the price of the replacement part: unplanned downtime disrupts production schedules, overtime labour costs escalate, and secondary damage can turn a simple failure into a major repair. Predictive maintenance offers a fundamentally different approach — using data from the equipment itself to identify developing faults before they cause a breakdown, so maintenance can be planned at a time and cost that suits your operation.\n\nOur plant monitoring app connects to the data sources that already exist in most industrial plants: PLCs, variable frequency drives, motors and instruments that continuously generate information about current, temperature, run hours and operational status. Rather than requiring a complete new sensor installation, we first assess what your existing equipment can communicate and build the monitoring around that. Where there are gaps in the available data, we advise on the most cost-effective additional sensors to install. The result is a monitoring solution tailored to your plant, not a generic platform you must adapt to.\n\nWhen the monitoring data shows a developing trend — a motor drawing increasing current, a drive running hotter than usual, a pump showing vibration changes — the app sends an alert to the people who need to know. This early warning gives you time to plan the repair: source the spare part before the failure, schedule the work during a planned stop, and have everything ready when the equipment is taken out of service. Our spares sourcing capability integrates directly with the monitoring — when an alert indicates a part is heading for failure, we can source the replacement before the breakdown occurs, closing the loop between detection and resolution.",
    coversLabel: "What the monitoring can cover",
    covers: [
      "Motor and drive data such as current, temperature and run hours",
      "Temperatures, pressures and flows from existing sensors",
      "Alarms and trends sent to the people who need them",
      "Run-hour and cycle counts to schedule maintenance",
      "Data from PLCs and controllers you already have, where they can be connected",
      "Dashboards for the plant manager and the maintenance team",
    ],
    highlights: [
      {
        title: "Start with what you have",
        body: "Many plants already produce useful data in their PLCs, drives and meters. We look at what can be connected before suggesting anything new.",
      },
      {
        title: "Spares and monitoring together",
        body: "When the data shows a part is heading for trouble, we can help you source the spare before it fails. That is where our hard-to-find parts work and monitoring meet.",
      },
      {
        title: "Scoped with you",
        body: "Which signals matter depends on the machine. We agree what to monitor, how alerts are sent and who receives them before any work starts.",
      },
    ],
    faqs: [
      {
        q: "What is predictive maintenance?",
        a: "It means using measurements from the equipment, such as temperature, current and run hours, to spot a developing fault and fix it at a planned time, instead of waiting for a breakdown.",
      },
      {
        q: "Do I need new sensors or a new PLC?",
        a: "Not always. We first check what data your existing PLCs, drives and meters can already provide. Where there are gaps we advise on what to add.",
      },
      {
        q: "Can it monitor equipment from different brands?",
        a: "That depends on what each device can communicate. Tell us what you run and we will confirm what can be connected.",
      },
      {
        q: "How do I get started?",
        a: "Send us a short description of the plant and the equipment you most want to watch. An engineer will come back with questions and a proposed scope.",
      },
      {
        q: "How does the monitoring app alert me to a problem?",
        a: "The app sends alerts by email or notification when a measurement moves outside the limits we set together with you.",
      },
      {
        q: "Can I see the data on my phone?",
        a: "Yes. The plant monitoring app is accessible on your phone or computer so you can check the plant from anywhere.",
      },
      {
        q: "What equipment is best suited to monitoring?",
        a: "Equipment where a fault is expensive or disruptive, such as critical motors, drives, pumps and compressors, benefits most.",
      },
      {
        q: "Does monitoring replace regular maintenance?",
        a: "No. It complements your maintenance by telling you when something needs attention, so you can plan the work.",
      },
      {
        q: "Can the monitoring data integrate with our maintenance system?",
        a: "Where possible, yes. We can discuss exporting data or connecting to your maintenance or reporting tools.",
      },
      {
        q: "How much does a monitoring setup cost?",
        a: "It depends on what is already connectable and what needs to be added. We scope it with you and give a clear price before any work starts.",
      },
      {
        q: "What happens if the monitoring picks up a fault?",
        a: "You get an alert with the details. If the fix needs a spare part, we can source it for you so it is ready when you schedule the repair.",
      },
    ],
    leadTopic: "Predictive maintenance / plant monitoring",
  },
  {
    slug: "industrial-burner-control-boxes",
    kind: "service",
    name: "Industrial burner control boxes",
    title: "Industrial Burner Control Boxes in South Africa",
    description:
      "Burner control boxes in three versions: with a temperature controller, with an HMI, or with telemetry and our monitoring app. Tell us your burner and we will advise.",
    h1: "Industrial burner control boxes",
    intro:
      "Control boxes for industrial burners, built in three versions: with a temperature controller, with an HMI, or with telemetry and our plant monitoring app.",
    content:
      "Industrial burners operate in demanding conditions — high temperatures, continuous cycling and the ever-present requirement for safe and reliable combustion. The control box is the brain of the burner system, managing temperature control, combustion air, fuel supply and safety functions. We build industrial burner control boxes in three configurations to suit different levels of operator interaction and monitoring: a basic version with a temperature controller for straightforward temperature regulation, a version with an HMI for local operator control and visibility, and a version with telemetry that connects to our plant monitoring app for remote oversight and alerts.\n\nEach burner control box is built to suit the specific burner, fuel type and process requirements of the installation. During the scoping process we review the burner make and model, the fuel type — whether gas, oil or dual-fuel — the temperature range required, the supply voltage and any existing safety devices. The control box is then configured with the appropriate temperature controller, flame supervision, actuators and safety components. Burner safety functions follow the burner manufacturer's requirements and the applicable standards, and the installation should be checked by a competent person before commissioning.\n\nThe three versions allow you to choose the level of control and visibility that matches your operation. Version 1 provides reliable temperature control for processes where the setpoint is relatively stable. Version 2 adds an HMI so operators can set, view and adjust the process at the panel, with real-time display of temperature, burner status and alarms. Version 3 adds telemetry, connecting the burner to our monitoring app so you can view temperatures and run hours remotely and receive alerts when something needs attention. This is particularly valuable for plants with multiple burners or remote sites where a quick response to a burner fault can prevent extended downtime.",
    image: "/images/bp-01/bp-01-front.png",
    imageAlt: "BP-01 burner control panel render",
    coversLabel: "Choose your version",
    covers: [
      "Version 1: control box with a temperature controller, for straightforward temperature control",
      "Version 2: control box with an HMI, to set, view and adjust the process at the panel",
      "Version 3: control box with telemetry and our plant monitoring app, to watch the burner remotely and receive alerts",
      "Built to suit your burner, fuel and process after we review the details",
      "Wiring diagrams and documentation supplied with each box",
      "Support and spares for the components inside",
    ],
    highlights: [
      {
        title: "Pick the level you need",
        body: "Start with a temperature controller, add an HMI for visibility at the panel, or add telemetry to monitor from anywhere. Each step builds on the last.",
      },
      {
        title: "Safety stays with the burner system",
        body: "Burner safety functions such as flame supervision and shutdown must follow the burner manufacturer's requirements and the applicable standards. We discuss this with you when we scope the box, and the installation should be checked by a competent person.",
      },
      {
        title: "Monitoring when you want it",
        body: "Version 3 connects to our plant monitoring app, so you can see temperatures and run hours and receive alerts, and plan maintenance before a fault stops production.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between the three versions?",
        a: "Version 1 has a temperature controller. Version 2 adds an HMI so you can set and view the process on a screen at the panel. Version 3 adds telemetry and connects to our plant monitoring app for remote viewing and alerts.",
      },
      {
        q: "What do you need to quote a control box?",
        a: "The burner make and model, fuel type, how the burner is controlled today, the temperature range, the supply voltage, and any existing safety devices. Photos of the current panel help.",
      },
      {
        q: "Can I upgrade a box later?",
        a: "We can discuss adding an HMI or telemetry to a box later. What is possible depends on how the original box is built, so send us the details.",
      },
      {
        q: "Does the box include the burner safety system?",
        a: "Burner safety functions have to follow the burner manufacturer's requirements and the standards that apply to your installation. We go through this when we scope the box.",
      },
      {
        q: "Which version do I need for my application?",
        a: "If you only need temperature control, Version 1 is enough. If operators need to set and view the process, choose Version 2. If you want remote monitoring, choose Version 3.",
      },
      {
        q: "Can the box control any type of burner?",
        a: "We build boxes for common industrial burners. Tell us the burner make and model and we will confirm it is suitable.",
      },
      {
        q: "What fuel types can the box handle?",
        a: "The control box works with the burner's fuel system. Tell us the fuel type and we will confirm the configuration.",
      },
      {
        q: "Do you supply the temperature sensor?",
        a: "Yes. We supply the temperature sensor matched to your process range and the controller.",
      },
      {
        q: "Can the box be mounted outdoors?",
        a: "Yes, with the right enclosure rating. Tell us the installation environment and we will specify the correct enclosure.",
      },
      {
        q: "What documentation comes with the box?",
        a: "Each box comes with wiring diagrams, a user manual and the configuration details for your burner.",
      },
      {
        q: "Can you commission the box on site?",
        a: "Yes. Our engineers can commission the box on site and verify the burner control and safety functions.",
      },
      {
        q: "How long does it take to build a control box?",
        a: "It depends on the version and the components. We confirm the lead time when you place the order.",
      },
    ],
    leadTopic: "Industrial burner control box",
  },
];

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

const industries: Landing[] = [
  {
    slug: "manufacturing",
    kind: "industry",
    name: "Manufacturing",
    title: "Automation Spares for Manufacturing in South Africa",
    description:
      "Automation spares and control solutions supporting production efficiency and reliability in manufacturing plants.",
    h1: "Automation spares for manufacturing",
    intro:
      "Automation spares and control solutions that support production efficiency and reliability.",
    content:
      "Manufacturing plants in South Africa face unique pressures: rising energy costs, global competition, and the imperative to maintain high production volumes with limited downtime budgets. The automation systems that control production lines — PLCs, drives, HMIs, sensors and motors — are the critical infrastructure that keeps these plants running. When a component fails on a production line, the financial impact escalates with every minute of lost output, making fast and accurate spares sourcing a core operational requirement.\n\nThe most common automation spares requests we receive from manufacturing plants reflect the failure patterns of continuous production environments. PLC I/O modules fail due to electrical spikes and environmental contamination, drives fail from thermal cycling and bearing wear in the motors they control, and HMI screens are damaged by physical impact or age-related backlight failure. Sensors fail from process contact — dust on optical sensors, mechanical damage to proximity switches, calibration drift on pressure and temperature instruments. We source the full range of components across these categories for the major automation brands installed in South African manufacturing.\n\nBeyond individual spares, we support manufacturing plants with broader maintenance strategies including planned shutdown spares planning, multi-line spares rationalisation and legacy equipment lifecycle management. For plants running older automation platforms, we help maintain spare parts inventories that balance the risk of downtime against the cost of holding stock. When an upgrade is needed — whether a single drive replacement or a complete control system modernisation — we provide the sourcing and engineering support to keep the transition smooth and the production impact minimal. Our nationwide delivery service ensures that spares reach manufacturing sites across South Africa quickly, with priority courier options for urgent line-down situations.",
    image: img("manufacturing-production-line-efficiency-1-1024x682-1.jpg"),
    imageAlt: "Manufacturing production line",
    coversLabel: "Commonly requested",
    covers: [
      "PLC and I/O modules for production lines",
      "Drives for conveyors and machines",
      "HMIs and operator panels",
      "Sensors and panel components",
    ],
    highlights: [
      {
        title: "Keep the line moving",
        body: "When a single module stops production, speed and accuracy of sourcing matter most. Send the part number and we respond with availability and lead time.",
      },
    ],
    faqs: [
      {
        q: "Can you support multi-line spares requests?",
        a: "Yes. Send the whole list and we will quote it together.",
      },
      {
        q: "What types of manufacturing spares do you supply most often?",
        a: "PLC modules, drives, HMIs, sensors and panel components for production lines and machines.",
      },
      {
        q: "Can you help with a production line upgrade?",
        a: "Yes. We can upgrade individual components or whole control systems on a production line.",
      },
      {
        q: "Do you supply spares for conveyor systems?",
        a: "Yes. Drives, motors, sensors and control components for conveyors are a regular request.",
      },
      {
        q: "Can you support a plant-wide spares list?",
        a: "Yes. Send the full list across all your equipment and we will quote it together.",
      },
      {
        q: "How do you handle urgent production line stoppages?",
        a: "We prioritise machine-down requests. Send the part numbers and we respond with availability and lead time fast.",
      },
      {
        q: "Do you supply spares for robotics and automated cells?",
        a: "Yes. We source components for robotic cells and automated production equipment.",
      },
      {
        q: "Can you help with preventive maintenance spares planning?",
        a: "Yes. We can help you plan the spares you need to keep for critical equipment.",
      },
      {
        q: "Do you support legacy manufacturing equipment?",
        a: "Yes. We source spares for older equipment that is still in production.",
      },
      {
        q: "Can you supply spares for quality inspection systems?",
        a: "Yes. Vision systems, sensors and control components for inspection equipment are part of our range.",
      },
      {
        q: "Do you offer volume pricing for large spares orders?",
        a: "Yes. For larger orders we can discuss pricing. Send the quantities and we will confirm.",
      },
    ],
    leadTopic: "Manufacturing",
  },
  {
    slug: "food-beverage",
    kind: "industry",
    name: "Food & beverage",
    title: "Automation Spares for Food & Beverage in South Africa",
    description:
      "Automation solutions that meet hygiene, reliability and process consistency requirements in food and beverage plants.",
    h1: "Automation spares for food and beverage",
    intro:
      "Automation solutions that meet hygiene, reliability and process consistency requirements.",
    content:
      "The South African food and beverage industry operates under stringent hygiene and safety regulations while facing the same pressures as any manufacturing sector: tight margins, high volumes and zero tolerance for contamination-related recalls. Automation in food plants must balance precise process control with the ability to withstand washdown environments, harsh cleaning chemicals and constant moisture. The components that control filling lines, mixing vessels, ovens, refrigeration systems and packaging machines must be specifically suited to these demanding conditions.\n\nWe supply automation spares for food and beverage plants that meet the industry's unique requirements. Washdown-rated HMIs and operator panels with IP65 or higher protection ratings, food-grade sensors with stainless steel housings that resist caustic cleaning agents, and drives and motors suitable for washdown environments are all part of our sourcing range. When a component fails on a food production line — whether it is a temperature controller on a pasteuriser, a drive on a filling machine or a sensor on a bottling line — the replacement must not only function correctly but also comply with the hygiene standards your plant is audited against.\n\nBeyond the individual components, we support food and beverage plants with broader automation maintenance: control system upgrades that improve traceability and batch control, integration of recipe management systems, and modernisation of older packaging lines that are becoming difficult to support. For plants operating multiple production lines with different automation brands, we provide a single sourcing point that covers the full range of components across all platforms. Our engineers understand the food industry's specific challenges — from CIP system control to cold storage monitoring — and can advise on the most suitable components for your application and your budget.",
    image: img("food-open-lr.jpg"),
    imageAlt: "Food processing plant",
    coversLabel: "Commonly requested",
    covers: [
      "Drives and motors for processing equipment",
      "Sensors and control components",
      "PLCs and HMIs for packaging and processing",
    ],
    highlights: [
      {
        title: "Consistency matters",
        body: "Process stability depends on dependable components. We help you source and support the right ones.",
      },
    ],
    faqs: [
      {
        q: "Can you help with replacement parts for older packaging lines?",
        a: "Send the part numbers and we will check availability and advise on alternatives.",
      },
      {
        q: "Do you supply food-grade sensors and components?",
        a: "Yes. We source components suitable for food and beverage applications, including washdown-rated options.",
      },
      {
        q: "Can you help with a CIP system control upgrade?",
        a: "Yes. We can upgrade the control system for CIP and washdown processes.",
      },
      {
        q: "Do you supply drives for mixers and blenders?",
        a: "Yes. Drives for food processing equipment including mixers, blenders and conveyors are part of our range.",
      },
      {
        q: "Can you support filling and bottling line spares?",
        a: "Yes. We source components for filling, capping and labelling equipment.",
      },
      {
        q: "Do you supply components for refrigeration and cold storage control?",
        a: "Yes. We source control components for refrigeration and cold storage systems.",
      },
      {
        q: "Can you help with traceability and batch control systems?",
        a: "Yes. We can advise on components for batch control and traceability in food production.",
      },
      {
        q: "Do you supply HMIs suitable for washdown environments?",
        a: "Yes. We source washdown-rated HMIs and panels for food and beverage plants.",
      },
      {
        q: "Can you help with a process control improvement project?",
        a: "Yes. We can help optimise your process control for consistency and efficiency.",
      },
      {
        q: "Do you supply safety components for food plant guarding?",
        a: "Yes. Safety switches, safety relays and safety mats for machine guarding are part of our range.",
      },
      {
        q: "Can you support equipment from multiple brands in one plant?",
        a: "Yes. We source spares across the major automation brands, so one request covers your whole plant.",
      },
    ],
    leadTopic: "Food & beverage",
  },
  {
    slug: "mining-materials",
    kind: "industry",
    name: "Mining & materials",
    title: "Automation Spares for Mining & Materials in South Africa",
    description:
      "Rugged automation components and systems designed for harsh environments and continuous operation in mining and materials processing.",
    h1: "Automation spares for mining and materials",
    intro:
      "Rugged automation components and systems designed for harsh environments and continuous operation.",
    content:
      "South Africa's mining and materials processing industry operates in some of the harshest industrial environments on earth — extreme dust, high ambient temperatures, constant vibration and the relentless pressure of continuous operation where downtime costs are measured in millions of rand per day. The automation systems that control conveyors, crushers, mills, pumps and processing plants must be built and maintained to withstand these conditions. When a component fails in a mining operation, the replacement must be rugged enough to survive and available fast enough to minimise production losses.\n\nWe supply automation spares for mining and materials processing plants that meet the industry's demanding requirements. Heavy-duty drives and soft starters for conveyor systems and large motors, PLC and I/O modules rated for harsh environments, motors with appropriate protection ratings for dust and moisture ingress, and sensors and instruments that withstand vibration and temperature extremes. For components installed in hazardous areas, we source intrinsically safe and explosion-rated equipment that complies with the applicable standards. Our sourcing network covers the major automation brands installed in the South African mining sector.\n\nMining operations also present logistical challenges for spares delivery — many sites are in remote locations with limited infrastructure. We deliver across South Africa including to remote mining sites, working with couriers and freight providers who understand the access requirements and delivery timelines. For planned maintenance shutdowns, we help mines prepare comprehensive spares lists so that every component needed for the shutdown is available on site before work begins. For emergency breakdowns, we prioritise machine-down requests and can expedite delivery to get critical equipment back in service as quickly as possible.",
    image: img("mineral-processing-flyability-2.webp"),
    imageAlt: "Mineral processing plant",
    coversLabel: "Commonly requested",
    covers: [
      "Drives and soft starters for heavy equipment",
      "PLC and I/O modules for plant control",
      "Motors and accessories",
      "Sensors and panel components",
    ],
    highlights: [
      {
        title: "Continuous operation",
        body: "Downtime is expensive on a processing plant. Send urgent requests with the machine-down option and we prioritise them.",
      },
    ],
    faqs: [
      {
        q: "Do you deliver to remote sites?",
        a: "We deliver nationwide. Tell us the site location and we will confirm delivery options with the quote.",
      },
      {
        q: "What types of mining equipment spares do you supply?",
        a: "Drives, PLCs, motors, sensors and panel components for conveyors, crushers, mills and pumps.",
      },
      {
        q: "Can you supply ruggedised components for harsh environments?",
        a: "Yes. We source components rated for dust, vibration and temperature extremes common in mining.",
      },
      {
        q: "Do you support SCADA and plant-wide control systems?",
        a: "Yes. We source components for SCADA and distributed control systems used in mining.",
      },
      {
        q: "Can you help with a conveyor control upgrade?",
        a: "Yes. We can upgrade the drives, PLCs and safety systems on conveyor systems.",
      },
      {
        q: "Do you supply spares for pumps and pumping stations?",
        a: "Yes. Drives, motors and control components for pumps are a regular request.",
      },
      {
        q: "Can you support a processing plant shutdown spares list?",
        a: "Yes. Send the shutdown scope and we will help you plan and source the spares.",
      },
      {
        q: "Do you supply intrinsically safe components?",
        a: "We can advise on and source components suitable for hazardous area applications.",
      },
      {
        q: "Can you help with a mill or crusher drive upgrade?",
        a: "Yes. We can upgrade the drive and motor combination for mills and crushers.",
      },
      {
        q: "Do you supply spares for stackers and reclaimers?",
        a: "Yes. We source components for stackers, reclaimers and other heavy materials handling equipment.",
      },
      {
        q: "Can you support a condition monitoring system for mining equipment?",
        a: "Yes. We can set up monitoring for critical mining equipment to catch faults early.",
      },
    ],
    leadTopic: "Mining & materials",
  },
  {
    slug: "energy-burners",
    kind: "industry",
    name: "Energy & burners",
    title: "Automation Spares for Energy & Burner Systems",
    description:
      "Control systems and automation spares for energy systems, burners and thermal processes.",
    h1: "Automation spares for energy and burner systems",
    intro:
      "Control systems and automation spares for energy systems, burners and thermal processes.",
    content:
      "Burner and thermal process systems are safety-critical installations where the consequences of failure extend beyond production loss to potential safety hazards. Industrial burners control the combustion of gas, oil or dual-fuel in boilers, furnaces, dryers, thermal oxidisers and process heaters — and the control systems that manage them must ensure safe ignition, stable flame supervision and correct fuel-to-air ratios under all operating conditions. When a component in the burner control system fails, the implications are both operational and safety-related, making expert sourcing and support essential.\n\nWe supply automation spares for burner and thermal process control systems, including temperature controllers, flame sensors, actuators, ignition components, safety devices and the PLC and HMI platforms that manage the overall thermal process. For burner safety systems — flame supervision, emergency shutdown and safety interlocks — we confirm exact part numbers against your system and applicable standards rather than substituting by guesswork. Our engineers understand the safety requirements that apply to burner installations in South Africa and can advise on the correct components for your specific burner and fuel configuration.\n\nBeyond spares, we support energy plants and burner operators with control system upgrades that improve combustion efficiency, reduce emissions and enhance safety. Modern combustion control systems optimise the fuel-to-air ratio across the full load range, reducing fuel consumption and operating costs while meeting increasingly stringent emissions regulations. We also supply components for co-generation and waste heat recovery systems, helping industrial plants extract maximum value from their energy infrastructure. For planned burner maintenance or annual inspections, we can source the full list of components needed so your maintenance team has everything on hand before the work begins.",
    image: img("industrialboiler_sstock.webp"),
    imageAlt: "Industrial boiler",
    coversLabel: "Commonly requested",
    covers: [
      "Burner and thermal process controls",
      "PLC and HMI components",
      "Sensors and instruments",
      "Drives for fans and pumps",
    ],
    highlights: [
      {
        title: "Safety-critical parts",
        body: "For safety-related parts we confirm the exact part number against your system rather than substituting.",
      },
    ],
    faqs: [
      {
        q: "Can you support burner management control panels?",
        a: "Send the panel details and we will advise on what we can source and support.",
      },
      {
        q: "What types of burner control components do you supply?",
        a: "Temperature controllers, flame sensors, actuators, ignition components and safety devices for burner systems.",
      },
      {
        q: "Can you help with a boiler control upgrade?",
        a: "Yes. We can upgrade the control system for boilers and thermal processes.",
      },
      {
        q: "Do you supply components for gas and oil burners?",
        a: "Yes. We source control components for gas, oil and dual-fuel burners.",
      },
      {
        q: "Can you help with combustion control optimisation?",
        a: "Yes. We can advise on control strategies and components for efficient combustion.",
      },
      {
        q: "Do you supply spares for thermal oxidisers?",
        a: "Yes. We source components for thermal oxidisers and air pollution control equipment.",
      },
      {
        q: "Can you support a furnace temperature control system?",
        a: "Yes. We source temperature controllers, sensors and control components for furnaces.",
      },
      {
        q: "Do you supply drives for fans and blowers in burner systems?",
        a: "Yes. Drives for combustion air fans and blowers are part of our range.",
      },
      {
        q: "Can you help with a burner safety system upgrade?",
        a: "Yes. We can advise on and source components for burner safety and flame supervision systems.",
      },
      {
        q: "Do you supply instruments for pressure and temperature measurement in energy systems?",
        a: "Yes. Pressure transmitters, temperature sensors and related instruments are part of our range.",
      },
      {
        q: "Can you support a co-generation or waste heat recovery system?",
        a: "Yes. We source control components for co-generation and waste heat recovery systems.",
      },
    ],
    leadTopic: "Energy & burners",
  },
  {
    slug: "water-utilities",
    kind: "industry",
    name: "Water & utilities",
    title: "Automation Spares for Water & Utilities in South Africa",
    description:
      "Automation spares and control components for water treatment, pumping and utility operations.",
    h1: "Automation spares for water and utilities",
    intro:
      "Automation spares and control components for water treatment, pumping and utility operations.",
    content:
      "Water and utilities infrastructure is the backbone of South African communities and industry, and the automation systems that control water treatment plants, pumping stations, reservoirs and distribution networks must operate reliably around the clock. The challenges are unique: equipment is often installed in remote locations, exposed to weather and environmental extremes, and operated with limited on-site technical staff. When a pump drive fails or a level sensor stops working, the impact can affect water supply to entire communities, making fast and reliable spares sourcing a critical service.\n\nWe supply automation spares for water and utilities applications including drives and soft starters for pumps and blowers, PLC and I/O modules for pump station and treatment plant control, instruments for flow, level, pressure and temperature measurement, and panel components for control panels installed in exposed environments. Many water industry installations use variable frequency drives to control pump speed and pressure, reducing energy consumption and water hammer — when these drives fail, we can source a replacement quickly to restore normal operation. Our sourcing covers the major automation brands installed in the South African water sector.\n\nWater and utilities plants also benefit from the monitoring capabilities of our plant monitoring app, which can track pump performance, flow rates and reservoir levels and alert operators to developing problems before they cause a supply interruption. For planned maintenance on treatment plants or pump stations, we help utilities prepare comprehensive spares lists so that all components are available on site before the work begins. We deliver across South Africa including to remote water treatment facilities and municipal pumping stations, with courier and freight options matched to the urgency and location of the requirement.",
    coversLabel: "Commonly requested",
    covers: [
      "Drives and soft starters for pumps",
      "PLC and I/O modules for pump stations",
      "Instruments and sensors",
      "Panel components",
    ],
    highlights: [
      {
        title: "Pumps and process control",
        body: "From a single drive on a pump to a whole control panel, send what you need and we will respond with a quote.",
      },
    ],
    faqs: [
      {
        q: "Can you supply drives for pump applications?",
        a: "Yes. Send the motor nameplate and the application and we will recommend the right drive.",
      },
      {
        q: "What types of water and wastewater equipment spares do you supply?",
        a: "Drives, PLCs, instruments and panel components for pumps, blowers and treatment processes.",
      },
      {
        q: "Can you help with a pump station control upgrade?",
        a: "Yes. We can upgrade the control system for pump stations including level control and telemetry.",
      },
      {
        q: "Do you supply instruments for flow and level measurement?",
        a: "Yes. Flow meters, level sensors and pressure transmitters for water applications are part of our range.",
      },
      {
        q: "Can you support a SCADA system for a water network?",
        a: "Yes. We source components for SCADA and telemetry systems used in water distribution.",
      },
      {
        q: "Do you supply spares for blowers and aeration systems?",
        a: "Yes. Drives, motors and control components for blowers and aeration are part of our range.",
      },
      {
        q: "Can you help with a water treatment plant control upgrade?",
        a: "Yes. We can upgrade the control system for water and wastewater treatment processes.",
      },
      {
        q: "Do you supply components for chemical dosing systems?",
        a: "Yes. We source pumps, instruments and control components for chemical dosing.",
      },
      {
        q: "Can you support a reservoir or dam monitoring system?",
        a: "Yes. We can advise on and source components for level monitoring and telemetry at reservoirs and dams.",
      },
      {
        q: "Do you supply spares for valve actuators and control valves?",
        a: "Yes. Actuators and control components for valves are part of our range.",
      },
      {
        q: "Can you help with energy efficiency on pump systems?",
        a: "Yes. We can advise on drive selection and control strategies to reduce energy consumption on pumps.",
      },
    ],
    leadTopic: "Water & utilities",
  },
];

/* ------------------------------------------------------------------ */
/* Hubs                                                                */
/* ------------------------------------------------------------------ */

export const hubs: Hub[] = [
  {
    slug: "industrial-automation-spares",
    name: "Spares",
    kind: "spares",
    title: "Industrial Automation Spares in South Africa",
    description:
      "Industrial automation spares: PLCs, I/O modules, VFDs, HMIs, sensors, panel components and motors. Request a quote and get availability, lead time and price.",
    h1: "Industrial automation spares",
    intro:
      "Pick a category, or send the part number straight to our engineers. We come back with availability, lead time and price.",
    content:
      "Industrial automation spares cover the components that keep production lines, processing plants and automated machines running when something fails. The range spans PLC CPUs and I/O modules that execute the control logic, variable frequency drives that regulate motor speed, HMI panels that give operators visibility, sensors and control components that detect process conditions, panel components that distribute and switch power, and the motors that drive the mechanical load. Each category has its own sourcing considerations, but all share the same urgency — when a component fails, the clock starts ticking on downtime costs.\n\nIn South African industry, the challenge of sourcing automation spares is compounded by the breadth of brands and platforms installed across the country's manufacturing, mining, food processing, water and energy sectors. A single plant may run Siemens PLCs on one line, Allen-Bradley drives on another and Delta controllers on a packaging machine — each requiring different spares with different lead times. Our role is to simplify that complexity: send us the part number, nameplate photo or a description of what you need, and our engineers will source it from our network of local and international suppliers.\n\nThis hub page provides an overview of the spares categories we supply. Select a specific category from the options above to see the detailed range for that component type, including what we typically source, common compatibility considerations and the brands we support. If you are unsure which category your part falls into, send us the part number or a photo of the nameplate and we will identify it for you. For urgent breakdowns, mark the request as machine-down and we will prioritise your enquiry with a fast response on availability, lead time and price.",
    faqs: [
      {
        q: "What categories of spares do you supply?",
        a: "PLCs and I/O modules, VFDs and drives, HMIs and operator panels, sensors and control components, panel components, and motors with accessories.",
      },
      {
        q: "How do I request a quote for a spare part?",
        a: "Send the part number through the quote form, or message us on WhatsApp with a photo of the nameplate. We come back with availability, lead time and price.",
      },
      {
        q: "Do you supply spares for all major automation brands?",
        a: "Yes. We mainly source Siemens, Delta, Schneider Electric and Allen-Bradley spares, along with other leading automation brands on request.",
      },
      {
        q: "What if I don't have the part number?",
        a: "Send a clear photo of the nameplate or the part itself along with the machine it came from. Our engineers will help identify it.",
      },
      {
        q: "Can you supply parts that are no longer manufactured?",
        a: "Often, yes. Send the part number and we will check availability. If it is discontinued we will advise on a suitable replacement.",
      },
      {
        q: "How do you handle urgent breakdown requests?",
        a: "Mark the request urgent and we prioritise it. We respond with availability and lead time fast so you can make a decision.",
      },
      {
        q: "Do you deliver spares across South Africa?",
        a: "Yes, we deliver nationwide. For urgent jobs we can courier the part to your site.",
      },
      {
        q: "Can I send a list of several parts for one quote?",
        a: "Yes. Paste the full list into the quote form and we will respond line by line with availability and pricing.",
      },
      {
        q: "What information should I include with my quote request?",
        a: "The part number or nameplate photo, the quantity, and any deadline or urgency. The more detail you give, the faster we can respond accurately.",
      },
      {
        q: "Do you offer engineering support alongside spares supply?",
        a: "Yes. Our engineers can help with part selection, compatibility, programming, fault finding and commissioning so the spare works correctly in your system.",
      },
    ],
  },
  {
    slug: "plc-automation-solutions",
    name: "Solutions",
    kind: "brand",
    title: "PLC & Automation Solutions by Brand",
    description:
      "PLC and automation solutions for Siemens, Delta, Schneider Electric and Allen-Bradley systems, including spares replacement and upgrades.",
    h1: "PLC and automation solutions by brand",
    intro:
      "We support the four platforms we are asked about most. Choose yours, or tell us what you run.",
    content:
      "When it comes to PLC and automation solutions, the brand and platform you run shapes everything: the programming software your engineers use, the spares you need to hold in stock, the communication protocols your network uses and the upgrade path available as your system ages. We focus on the four automation brands we are asked about most in South Africa — Siemens, Delta, Schneider Electric and Allen-Bradley — because these represent the platforms most commonly installed in the country's industrial plants and because our sourcing relationships and engineering expertise are deepest in these brands.\n\nEach brand has its own ecosystem of hardware, software and support. Siemens offers the SIMATIC platform spanning S7-300, S7-1200 and S7-1500 controllers with TIA Portal programming and SINAMICS drives. Delta provides cost-effective DVP and AS series PLCs with VFD drives and DOP HMIs, popular with OEMs and machine builders. Schneider Electric covers Modicon PLCs, Altivar drives, TeSys motor control and Magelis HMIs, with EcoStruxure as its connected architecture. Allen-Bradley, part of Rockwell Automation, offers MicroLogix, CompactLogix and ControlLogix PLCs with PowerFlex drives and PanelView terminals, programmed in Studio 5000. Understanding the specific platform you run helps us provide faster, more accurate support.\n\nSelecting a brand for a new project or an upgrade is a significant decision with long-term implications for your plant's maintenance, spares availability and engineering skills requirements. We provide impartial advice on the strengths and considerations of each platform in the South African context, including local support availability, spares lead times and total cost of ownership. For plants running older platforms that are approaching end of life, we advise on migration planning and staged upgrades. If you are unsure which brand your system runs, send us a photo of the panel or module label and we will identify it for you.",
    faqs: [
      {
        q: "Which automation brands do you specialise in?",
        a: "We focus on Siemens, Delta, Schneider Electric and Allen-Bradley. These are the four platforms we are asked about most and where we hold the deepest sourcing relationships.",
      },
      {
        q: "Can you supply spares for any of these brands?",
        a: "Yes. For each brand we source PLC modules, drives, HMIs, power supplies and communication components.",
      },
      {
        q: "Do you support system upgrades as well as spares?",
        a: "Yes. We help plan and execute upgrades from older platforms to current ones, including hardware, program migration and commissioning.",
      },
      {
        q: "Can you help me identify which brand my system uses?",
        a: "Send a photo of the panel or the module label and we will identify the brand and platform for you.",
      },
      {
        q: "Do you offer programming support for these brands?",
        a: "Yes. Our engineers work with TIA Portal, Delta ISPSoft, Schneider Unity Pro and Allen-Bradley Studio 5000.",
      },
      {
        q: "What if my brand is not one of the four you specialise in?",
        a: "Tell us what you run. We source across many automation brands and will confirm whether we can help.",
      },
      {
        q: "Can you quote components from multiple brands in one request?",
        a: "Yes. Send the full list with part numbers and we will quote everything together.",
      },
      {
        q: "Do you provide lifecycle management advice?",
        a: "Yes. We can review your installed base and advise on end-of-life components and upgrade paths for your platform.",
      },
      {
        q: "Can you help with a multi-site standardisation project?",
        a: "Yes. We can help you standardise on a platform across multiple sites, including spares rationalisation and rollout planning.",
      },
      {
        q: "How do I choose the right brand for a new project?",
        a: "Tell us the application, your team's experience and your budget. We will advise on the platform that fits best.",
      },
    ],
  },
  {
    slug: "engineering-services",
    name: "Services",
    kind: "service",
    title: "Automation Engineering Services in South Africa",
    description:
      "PLC programming, fault finding, commissioning, turnkey automation projects and engineering support.",
    h1: "Engineering services behind the spares",
    intro:
      "Spares are only part of keeping a plant running. Our engineers can program, diagnose, commission and build.",
    content:
      "Keeping an industrial plant running involves far more than replacing failed components — it requires engineering expertise to diagnose complex faults, program and optimise control systems, commission new equipment and deliver complete automation projects. Our engineering services complement our spares supply, providing South African plants with access to experienced automation engineers who understand the brands, the platforms and the industrial processes they control. Whether you need a one-off programming change, urgent fault-finding support or a complete turnkey project, our team provides the technical capability to keep your operation running and improving.\n\nThe scope of our engineering services covers the full project lifecycle. For existing systems, we provide PLC programming and support — from small program modifications and bug fixes to complete program recovery, documentation and migration to current platforms. Our fault-finding service takes a systematic approach to diagnosing why equipment is not working, tracing the root cause rather than just replacing the suspected component, so the fix lasts. Our commissioning service sets up new or replacement equipment with parameter configuration, motor identification, I/O verification and functional testing, ensuring the system runs correctly from the moment it is handed over.\n\nFor new installations and major upgrades, our turnkey project service manages the entire scope from design through to handover — electrical design, panel assembly, installation, programming, commissioning and documentation. We also provide ongoing engineering support for plants that need technical guidance on component selection, system integration, obsolescence planning and lifecycle management. Our predictive maintenance and plant monitoring service uses data from your existing equipment to identify developing faults before they cause breakdowns, closing the loop between monitoring and resolution. Select a service above to see the detailed scope, or tell us what you need and we will advise on the right approach.",
    faqs: [
      {
        q: "What engineering services do you offer?",
        a: "PLC programming and support, fault finding and commissioning, turnkey automation projects, general engineering support, and predictive maintenance with plant monitoring.",
      },
      {
        q: "Can you work on-site or do you offer remote support?",
        a: "Both. We attend site for fault finding, commissioning and projects, and we can connect remotely for programming and diagnostics where the system allows it.",
      },
      {
        q: "Do you support the same brands as your spares supply?",
        a: "Yes. Our engineers work on Siemens, Delta, Schneider and Allen-Bradley systems, matching the platforms we supply spares for.",
      },
      {
        q: "Can you help with a machine that is down right now?",
        a: "Yes. Describe the fault and we will help you diagnose it quickly. We prioritise machine-down situations and can attend site or connect remotely.",
      },
      {
        q: "What is the difference between fault finding and commissioning?",
        a: "Fault finding diagnoses why existing equipment is not working. Commissioning sets up and verifies new or replacement equipment so it runs correctly.",
      },
      {
        q: "Do you offer ongoing support contracts?",
        a: "Yes. We can provide ongoing support including call-outs, remote support, program changes and maintenance planning.",
      },
      {
        q: "Can you take on a full automation project from design to handover?",
        a: "Yes. Our turnkey service covers design, panel assembly, installation, programming, commissioning and handover documentation.",
      },
      {
        q: "Do you provide documentation for your work?",
        a: "Yes. We provide updated programs, electrical drawings, panel layouts, operation manuals and handover training.",
      },
      {
        q: "Can you help us plan for equipment obsolescence?",
        a: "Yes. We can review your installed base, identify components nearing end of life and plan staged upgrades.",
      },
      {
        q: "How do I get started with an engineering service?",
        a: "Tell us what you need, the equipment involved and your timeline. An engineer will come back with questions and a proposed approach.",
      },
    ],
  },
  {
    slug: "applications",
    name: "Applications",
    kind: "industry",
    title: "Automation Spares by Industry",
    description:
      "Automation spares and control solutions for manufacturing, food and beverage, mining, energy and water utilities.",
    h1: "Automation spares by industry",
    intro:
      "Different plants break in different ways. Choose your industry to see what we are commonly asked for.",
    content:
      "The automation spares needed by a manufacturing plant differ from those required by a mining operation, a water treatment facility or a food processing line — not just because the equipment is different, but because the operating environment, the failure patterns and the consequences of downtime vary fundamentally between industries. Understanding these differences helps us source the right components and provide relevant technical advice for your specific sector. This hub page provides an overview of the industries we support most commonly in South Africa.\n\nIn manufacturing, the priority is keeping production lines moving with minimal interruption — PLC modules, drives, HMIs and sensors are the most common urgent requests, and downtime costs are measured in lost units per minute. Food and beverage plants add hygiene and washdown requirements to the equation, with components that must withstand harsh cleaning regimes and comply with food safety standards. Mining and materials processing demand ruggedised equipment that survives dust, vibration and extreme temperatures, often in remote locations where delivery logistics add complexity. Energy and burner systems carry safety-critical requirements where component failure has implications beyond production. Water and utilities operations need reliable components for geographically distributed infrastructure, often with limited on-site technical staff.\n\nSelect your industry above to see the specific spares categories, common requests and sector-specific considerations we encounter in each field. Our experience across these industries means we understand not just the components but the context in which they fail and the urgency with which they are needed. If your sector is not listed, contact us anyway — we source across a broad range of industrial applications and will confirm whether we can support your specific requirements.",
    faqs: [
      {
        q: "Which industries do you support?",
        a: "Manufacturing, food and beverage, mining and materials, energy and burners, and water and utilities.",
      },
      {
        q: "Do you understand the specific needs of my industry?",
        a: "Yes. We work across these industries regularly and understand the environmental, reliability and compliance requirements of each.",
      },
      {
        q: "Can you supply spares for equipment unique to my industry?",
        a: "Yes. Send the part numbers or equipment details and we will source the specific components your industry requires.",
      },
      {
        q: "Do you help with industry-specific compliance requirements?",
        a: "We can advise on components that meet the standards and certifications relevant to your industry, such as food-grade or hazardous-area requirements.",
      },
      {
        q: "Can you support a multi-site operation across different industries?",
        a: "Yes. We can manage spares and support across multiple sites, tailoring the approach to each location's needs.",
      },
      {
        q: "Do you offer industry-tailored maintenance planning?",
        a: "Yes. We can help you plan spares holding and maintenance schedules based on the criticality patterns of your industry.",
      },
      {
        q: "Can you help with industry-specific upgrades?",
        a: "Yes. We have experience with upgrades in each industry we serve, from packaging line improvements to pump station control.",
      },
      {
        q: "What are the most common spares requests in my industry?",
        a: "Choose your industry above to see the covers list. These reflect what we are most commonly asked to source in each sector.",
      },
      {
        q: "Do you understand the downtime costs in my industry?",
        a: "Yes. We know that downtime is expensive in every industry we serve, and we prioritise fast, accurate sourcing accordingly.",
      },
      {
        q: "Can you provide references from my industry?",
        a: "We can discuss relevant experience from your industry on request. Contact us and we will share what we can.",
      },
    ],
  },
  {
    slug: "spares-by-series",
    name: "Series",
    kind: "series",
    title: "Automation Spares by Series and Platform",
    description:
      "Spares for specific platforms: Siemens S7-300, S7-1200 and S7-1500, SINAMICS, Allen-Bradley ControlLogix, CompactLogix and PowerFlex, Delta DVP and VFD, Schneider Modicon and Altivar.",
    h1: "Automation spares by series",
    intro:
      "Looking for a specific platform? Pick your series to see what we typically source for it, then send the order number.",
    content:
      "Automation components are manufactured in series — families of products that share a form factor, a communication architecture and a programming environment. Identifying the correct series for your component is the first step in sourcing the right spare, because parts are generally not interchangeable between different series even within the same brand. A Siemens S7-300 CPU will not fit in an S7-1500 rack, a PowerFlex 4 drive is not a direct replacement for a PowerFlex 755, and a MicroLogix module is physically and electrically incompatible with a CompactLogix backplane. This hub page helps you navigate the major automation series we supply in South Africa.\n\nThe major series we source spares for include Siemens SIMATIC S7-300, S7-1200 and S7-1500 PLC platforms, SINAMICS and MICROMASTER drives, Allen-Bradley MicroLogix, CompactLogix and ControlLogix PLCs, PowerFlex drives, Delta DVP and AS series PLCs with VFD drives, and Schneider Modicon M221 through M340 PLCs with Altivar drives. Each series has its own range of CPUs, I/O modules, power supplies, communication processors and accessories — and its own obsolescence status, from current production to mature platforms where sourcing requires specialist stock.\n\nTo find the right series for your component, check the order number or catalogue number on the module label. The prefix and structure of the part number identifies the series — for example, 6ES7 indicates Siemens S7 series, 1756 indicates Allen-Bradley ControlLogix, and DVP indicates Delta's DVP series. If you are unsure, send us a clear photo of the module or nameplate and our engineers will identify the series and confirm sourcing options. Select a series above to see the specific components we typically source within that platform.",
    faqs: [
      {
        q: "What series and platforms do you cover?",
        a: "Siemens S7-300, S7-1200 and S7-1500, SINAMICS, Allen-Bradley ControlLogix, CompactLogix and PowerFlex, Delta DVP and VFD, and Schneider Modicon and Altivar.",
      },
      {
        q: "How do I find the right series for my system?",
        a: "Check the label on your existing module or drive. The order number or catalogue number tells us the series and platform.",
      },
      {
        q: "Can you supply spares for legacy series that are no longer current?",
        a: "Yes. We source spares for older series including S7-300, MicroLogix and other mature platforms that are still in service.",
      },
      {
        q: "Do you cover the full range within each series?",
        a: "We cover the most common modules within each series. Send the specific order number and we will confirm availability.",
      },
      {
        q: "Can you help me identify which series my component belongs to?",
        a: "Send a photo of the module or nameplate and we will identify the series and advise on sourcing options.",
      },
      {
        q: "Are parts interchangeable between different series?",
        a: "Generally not. Each series has its own form factor and communication architecture. We confirm compatibility before you order.",
      },
      {
        q: "Can you supply a complete rack or panel for my series?",
        a: "We can source the components to build or replenish a rack or panel for your series, including backplanes and power supplies.",
      },
      {
        q: "Do you offer upgrade paths from one series to another?",
        a: "Yes. We can advise on upgrading from an older series to a current one, including what the migration involves.",
      },
      {
        q: "What are the most common spares within each series?",
        a: "CPUs, I/O modules, power supplies and communication modules are the most common. See each series page for the specific covers list.",
      },
      {
        q: "Can you source accessories and cables for my series?",
        a: "Yes. We source programming cables, connectors, mounting accessories and other items specific to each series.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Lookups                                                             */
/* ------------------------------------------------------------------ */

export const landings: Landing[] = [...spares, ...brands, ...series, ...services, ...industries];
export const seriesList = series;

export const sparesList = spares;
export const brandsList = brands;
export const servicesList = services;
export const industriesList = industries;

export function getLanding(slug: string) {
  return landings.find((l) => l.slug === slug);
}
export function getHub(slug: string) {
  return hubs.find((h) => h.slug === slug);
}
export function landingsByKind(kind: LandingKind) {
  return landings.filter((l) => l.kind === kind);
}

export const BRAND_OPTIONS = [
  "Siemens",
  "Delta",
  "Allen-Bradley",
  "Schneider",
  "Other / not sure",
] as const;

export const homeFaqs: Faq[] = [
  {
    q: "What types of automation spares do you supply?",
    a: "We supply a full range of automation spares, including motors, sensors, PLC modules, drives, HMIs and control system components from leading brands.",
  },
  {
    q: "Do you deliver automation parts across South Africa?",
    a: "Yes. We deliver nationwide, with fast and reliable shipping so your plant stays running.",
  },
  {
    q: "How can I identify the right automation spare for my system?",
    a: "Check your equipment model and specifications, or send us the part number or a photo of the nameplate. Our engineers will confirm the correct part.",
  },
  {
    q: "Are your automation spares genuine and high quality?",
    a: "All parts are sourced from trusted manufacturers and come with quality assurance.",
  },
  {
    q: "Can I order online or do I need a quotation first?",
    a: "You can request a quote directly on this site, or contact us for guidance. We make sure you get the correct parts.",
  },
  {
    q: "What if my part is discontinued?",
    a: "Send the part number anyway. We will check whether it can still be sourced and, if not, advise on a suitable replacement.",
  },
];
