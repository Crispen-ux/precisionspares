import type { Faq } from "./content";

/* ------------------------------------------------------------------ */
/* Tools                                                               */
/* ------------------------------------------------------------------ */

export type Tool = {
  slug: string;
  name: string;
  short: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Short explanation shown under the tool */
  how: string[];
  faqs: Faq[];
  /** Article slugs worth reading next */
  guides: string[];
  leadTopic: string;
};

export const tools: Tool[] = [
  {
    slug: "motor-current-calculator",
    name: "Motor current calculator",
    short: "Estimate full-load amps from kW, voltage, efficiency and power factor.",
    title: "Motor Current Calculator: kW to Amps (3-Phase)",
    description:
      "Free three-phase motor current calculator. Enter kW or hp, supply voltage, efficiency and power factor to estimate full-load current and a minimum drive rating.",
    h1: "Three-phase motor current calculator",
    intro:
      "Estimate the full-load current of a three-phase motor from its power, supply voltage, efficiency and power factor. Use it to sanity-check a nameplate or to size a drive, starter or cable before you ask for a quote.",
    how: [
      "The formula is I = P / (√3 × V × efficiency × power factor), where P is the shaft power in watts and V is the line-to-line voltage.",
      "Efficiency and power factor are the two numbers people guess. They are printed on most nameplates as η and cos φ. If yours is missing, typical full-load values for a four-pole motor of 5.5 kW and above are efficiency of about 85 to 96 per cent and power factor of 0.80 to 0.90. Small motors are lower.",
      "The result is an estimate. The current printed on the motor nameplate always wins, and cable and protection sizing must follow SANS 10142-1 and the manufacturer's tables, not this page.",
    ],
    faqs: [
      {
        q: "Which current should I use to size a variable frequency drive?",
        a: "Use the nameplate full-load current at your supply voltage, then choose a drive whose rated output current is at least that value for your duty. Many drives list a normal-duty and a heavy-duty rating, and the heavy-duty current is the lower one.",
      },
      {
        q: "Why does my result differ from the nameplate?",
        a: "Nameplates reflect the tested motor. Estimates rely on typical efficiency and power factor. A difference of a few per cent is normal. A large gap usually means the voltage, the unit (kW or hp) or the efficiency was entered wrongly.",
      },
      {
        q: "How much current does a motor draw when it starts direct on line?",
        a: "Typically six to eight times full-load current for a standard cage motor, for a short time. This is why starters, cables and upstream protection need care. A drive or soft starter limits it.",
      },
    ],
    guides: ["choosing-a-replacement-vfd", "motor-nameplate-explained"],
    leadTopic: "Motor / drive sizing",
  },
  {
    slug: "kw-to-hp-converter",
    name: "kW to HP converter",
    short: "Convert kW, mechanical hp and metric hp, and find the nearest standard motor size.",
    title: "kW to HP Converter with Standard Motor Sizes",
    description:
      "Convert between kilowatts, mechanical horsepower and metric horsepower, and see the nearest standard IEC motor rating.",
    h1: "kW to HP converter",
    intro:
      "Older equipment and imported machines often list power in horsepower, while South African suppliers quote kilowatts. Convert between them and see the nearest standard IEC motor rating.",
    how: [
      "One mechanical (imperial) horsepower is 0.7457 kW. One metric horsepower, often marked PS or CV, is 0.7355 kW. The difference is small but it matters on the nameplate of a European machine.",
      "Standard IEC motor ratings step through preferred sizes such as 0.75, 1.1, 1.5, 2.2, 3, 4, 5.5, 7.5, 11, 15, 18.5, 22, 30, 37, 45, 55, 75 and 90 kW. A motor rated in hp is often replaced by the nearest standard kW size.",
      "Always check the nameplate of the motor you are replacing. Frame size, speed and mounting matter as much as power.",
    ],
    faqs: [
      {
        q: "Is 1 hp the same as 0.75 kW?",
        a: "Close, but not exact. A mechanical horsepower is 0.7457 kW. Rounded to 0.75 kW it is accurate to within about half a per cent.",
      },
      {
        q: "Can I replace a 10 hp motor with a 7.5 kW motor?",
        a: "10 hp is about 7.46 kW, so 7.5 kW is the nearest IEC size. Confirm speed, frame size and mounting as well. Speak to an engineer if the machine is heavily loaded.",
      },
    ],
    guides: ["motor-nameplate-explained"],
    leadTopic: "Motor / accessories",
  },
  {
    slug: "4-20ma-scaling-calculator",
    name: "4–20 mA scaling calculator",
    short: "Convert a loop current to engineering units and PLC counts, and back again.",
    title: "4–20 mA Scaling Calculator for Sensors and PLC Inputs",
    description:
      "Convert 4–20 mA loop current to engineering units and Siemens normalised PLC values, or work out what current a value should produce. Includes fault-band checks.",
    h1: "4–20 mA scaling calculator",
    intro:
      "Turn a loop current into pressure, level, temperature or any other value, and see what a PLC analogue input should read. Useful at commissioning, and when a reading looks wrong.",
    how: [
      "A 4 to 20 mA signal spans 16 mA. The value is Low + (mA − 4) ÷ 16 × (High − Low). At 4 mA the transmitter reports the bottom of its range and at 20 mA the top. The live zero at 4 mA lets the system tell a real zero from a broken wire.",
      "NAMUR NE 43 treats 3.8 to 20.5 mA as the valid measuring range and signals below 3.6 mA or above 21 mA are treated as faults. A reading of 0 mA usually means a broken loop or no supply.",
      "Siemens analogue inputs on the S7-300, S7-1200 and S7-1500 present a 4 to 20 mA signal as a normalised value from 0 to 27648. Other brands use different raw ranges, so check your input module's manual.",
    ],
    faqs: [
      {
        q: "My PLC reads zero but the transmitter has power. What should I check?",
        a: "Measure the loop current with a meter in series. 0 mA points to a broken wire or missing loop supply. 4 mA with a zero reading is genuine. Also check that the input channel is configured for current and not voltage.",
      },
      {
        q: "Why can't my loop reach 20 mA?",
        a: "The loop supply may be too low for the total resistance in the circuit, including the input resistor, cable and any indicators. Check the supply voltage against the transmitter minimum and the burden.",
      },
    ],
    guides: ["4-20ma-loops-explained"],
    leadTopic: "Sensors / control components",
  },
  {
    slug: "downtime-cost-calculator",
    name: "Downtime and critical-spares calculator",
    short: "Compare the cost of waiting for a part with the cost of holding one.",
    title: "Downtime Cost and Critical Spares Break-Even Calculator",
    description:
      "Work out what waiting for a part costs your plant and how likely a failure must be before holding a spare pays for itself.",
    h1: "Downtime cost and critical-spares calculator",
    intro:
      "Is it worth keeping a spare on the shelf? Put in what an hour of stoppage costs, what the part costs and how long it takes to get, and see the break-even.",
    how: [
      "Exposure is the cost of the downtime while you wait: hours stopped × cost per hour. The break-even probability is the spare's price divided by that exposure. If you think the part is more likely than that to fail during the period, holding it pays for itself.",
      "The calculator ignores holding costs such as capital tied up and storage, so include them yourself if the spare is expensive or will be held for many years. It also assumes the whole line stops while you wait.",
      "Use your own cost per hour. Include lost production, labour standing idle, penalties and scrap, not only maintenance cost.",
    ],
    faqs: [
      {
        q: "How do I work out my cost per hour of downtime?",
        a: "Take the gross margin the line earns per hour, then add idle labour, scrap or spoilage on restart, and any contractual penalties. Production and finance usually have a figure already.",
      },
      {
        q: "Which spares should I stock first?",
        a: "Start with parts that would stop the whole line, that fail without warning and that have a long lead time. PLC CPUs, main drives, power supplies and key I/O modules are common candidates.",
      },
    ],
    guides: ["critical-spares-for-a-production-line", "obsolescence-planning-for-automation"],
    leadTopic: "Critical spares",
  },
  {
    slug: "ip-rating-decoder",
    name: "IP rating decoder",
    short: "Decode IP54, IP65, IP66 and more into plain language.",
    title: "IP Rating Decoder: What IP54, IP65, IP66 and IP67 Mean",
    description:
      "Decode any IP rating (IEC 60529) into dust and water protection in plain language. Quick pick for IP20, IP54, IP55, IP65, IP66 and IP67.",
    h1: "IP rating decoder",
    intro:
      "Enter an IP code from a nameplate or datasheet and see what it protects against. Handy when choosing a drive, enclosure, sensor or motor for a dusty or wet area.",
    how: [
      "The first digit is protection against solid objects and dust, from 0 to 6. The second is protection against water, from 0 to 9. An X means that aspect was not rated.",
      "An IP rating describes the enclosure when it is properly installed with cable glands and covers fitted. It is not a guarantee of how long a product lasts in harsh conditions.",
      "IP ratings are defined in IEC 60529. NEMA enclosure types are a different system and do not map exactly onto IP codes.",
    ],
    faqs: [
      {
        q: "What is the difference between IP65 and IP66?",
        a: "Both are dust-tight. IP65 withstands water jets from a 6.3 mm nozzle. IP66 withstands powerful jets from a 12.5 mm nozzle, so it suits wash-down areas better.",
      },
      {
        q: "Does a higher number always mean better?",
        a: "Not always. Water digits 7 and 8 cover immersion and do not automatically imply protection from jets. A product rated IP67 is not necessarily rated IP66 unless it states both.",
      },
    ],
    guides: ["choosing-a-replacement-vfd", "motor-nameplate-explained"],
    leadTopic: "Panel components",
  },
  {
    slug: "part-number-identifier",
    name: "Part number identifier",
    short: "Paste an order number and see which brand and product family it belongs to.",
    title: "Automation Part Number Identifier: Siemens, Allen-Bradley, Delta, Schneider",
    description:
      "Paste a Siemens 6ES7, Allen-Bradley 1756, Delta VFD or Schneider TM221 part number to see the product family. Includes the full prefix reference.",
    h1: "Automation part number identifier",
    intro:
      "Paste an order or catalogue number and see which brand and product family it belongs to. The full prefix reference is underneath, so you can look up a part by hand as well.",
    how: [
      "Manufacturers encode the product family in the first characters of the part number. For example Siemens SIMATIC modules begin 6ES7 and Allen-Bradley ControlLogix modules begin 1756.",
      "The prefix tells you the family, not the exact variant. The full number, including version and revision blocks, is what decides whether a replacement will fit.",
      "The list is a guide to common prefixes, not a complete catalogue, and manufacturers change numbering over time. Send us the full number from the label and we will check.",
    ],
    faqs: [
      {
        q: "Why does the tool say 'S7-1200 or older S7-200'?",
        a: "Both families use 6ES7 21x to 23x numbers. The product name on the label, or the rest of the order number, settles which you have. Do not order on the prefix alone.",
      },
      {
        q: "My number isn't recognised. What now?",
        a: "Send it anyway. Many parts, such as third-party and older components, are not in a short prefix list, and we can still check them.",
      },
    ],
    guides: ["read-a-plc-module-nameplate", "siemens-order-numbers-explained"],
    leadTopic: "Part identification",
  },
  {
    slug: "motor-speed-poles-calculator",
    name: "Motor speed and poles calculator",
    short: "Work out poles from nameplate rpm, or synchronous speed from poles and frequency.",
    title: "Motor Speed and Poles Calculator (Synchronous Speed rpm)",
    description:
      "Find the number of poles from a motor's rpm, or the synchronous speed for a given pole count and supply frequency, including drive operation at other frequencies.",
    h1: "Motor speed and poles calculator",
    intro:
      "Read a worn nameplate, or work out how fast a motor will turn at a different drive frequency. Enter the nameplate rpm to find the pole count, or choose poles and frequency to find the speed.",
    how: [
      "Synchronous speed in rpm is 120 × frequency ÷ poles. On the 50 Hz South African supply that gives 3000 rpm for two poles, 1500 for four, 1000 for six and 750 for eight.",
      "A loaded induction motor runs a few per cent below synchronous speed. A four-pole 50 Hz motor typically shows 1400 to 1485 rpm on its nameplate: lower for small motors, closer to 1500 for large ones.",
      "On a variable frequency drive the speed scales with frequency. Running above the base frequency reduces torque, and the motor and its load must be suitable for the higher speed.",
    ],
    faqs: [
      {
        q: "My nameplate says 1450 rpm. How many poles is that?",
        a: "Four. The next synchronous speed above 1450 rpm at 50 Hz is 1500 rpm, which is a four-pole motor.",
      },
      {
        q: "Can I run a motor above 50 Hz from a drive?",
        a: "Often yes within limits, but available torque falls above base frequency and bearings, balance and the driven machine limit the safe speed. Check with the motor manufacturer first.",
      },
    ],
    guides: ["motor-nameplate-explained", "choosing-a-replacement-vfd"],
    leadTopic: "Motor / accessories",
  },
  {
    slug: "power-supply-sizing-calculator",
    name: "24 V DC power supply sizing",
    short: "Add up panel loads, add headroom and get the next standard supply size.",
    title: "24 V DC Power Supply Sizing Calculator for Control Panels",
    description:
      "Add up the 24 V loads in your control panel, apply headroom and find the next standard power supply rating. Includes a printable breakdown.",
    h1: "24 V DC power supply sizing calculator",
    intro:
      "List the loads on a panel's 24 V rail, add headroom, and see the supply rating to look for. Fill in figures from each datasheet. The example values shown are placeholders.",
    how: [
      "Add the maximum current of every load: PLC CPU and I/O, relays and contactor coils, sensors, HMI and network gear. Use the datasheet maximum, not a typical figure.",
      "Add headroom of 20 to 30 per cent for future additions, inrush and ageing, then choose the next standard supply rating. Common ratings are 2.5, 5, 10, 20 and 40 A.",
      "Supplies derate at high ambient temperature, so check the derating curve for your panel. Keep sensors and field loads on a separate protected output from the PLC where possible.",
    ],
    faqs: [
      {
        q: "How much headroom should a 24 V supply have?",
        a: "Twenty to thirty per cent is a common starting point. Add more if the panel will be extended, if loads have high inrush, or if the panel runs hot.",
      },
      {
        q: "Is it better to use one big supply or several smaller ones?",
        a: "Separate supplies for the PLC and for field loads stop a field short circuit from dropping the controller. Many panels use a main supply with electronic protection on each branch.",
      },
    ],
    guides: ["24v-power-supplies-in-control-panels", "load-shedding-and-your-control-system"],
    leadTopic: "Panel components",
  },
  {
    slug: "obsolescence-risk-assessment",
    name: "Obsolescence risk check",
    short: "Answer six questions to see how exposed a part or machine is, and what to do about it.",
    title: "Obsolescence Risk Check for PLCs, Drives and HMIs",
    description:
      "Free six-question check of how exposed a controller, drive or HMI is to obsolescence, with a plain list of what to do next.",
    h1: "Obsolescence risk check",
    intro:
      "Answer six questions about a part or machine and see how exposed it is if the part fails or is no longer sold new, with a short list of what to do next. It takes about a minute.",
    how: [
      "The check adds up points for age, whether the exact part is still sold new, how many spares you hold, how long the machine can be down, whether you have a tested backup, and whether its failure stops a whole line.",
      "A score of 9 or more out of 14 is shown as high, 5 to 8 as medium and below 5 as low. The scale is a rough guide to how exposed you are, not a statement about any product.",
      "Only the manufacturer can say whether a product is discontinued, and the status applies to an exact order number. Use its lifecycle notices for the final answer.",
    ],
    faqs: [
      {
        q: "Does a high score mean the part is discontinued?",
        a: "No. It means you would be exposed if it failed: it may be old, hard to replace, without a spare or without a backup. Check the manufacturer's lifecycle notice for the exact order number.",
      },
      {
        q: "What should I do first if the result is high?",
        a: "Back up the program or parameters, then find out what a replacement would take: source, condition, lead time and price. Send us the order number and we will check availability.",
      },
      {
        q: "Can I run it for each machine?",
        a: "Yes. Run it for each critical part and keep the results in the critical spares register template.",
      },
    ],
    guides: ["what-to-do-when-a-part-is-discontinued", "critical-spares-for-a-production-line", "obsolescence-planning-for-automation"],
    leadTopic: "Obsolete / hard-to-find part",
  },
];

export const getTool = (slug: string) => tools.find((t) => t.slug === slug);

/* ------------------------------------------------------------------ */
/* Part number prefixes                                                */
/* ------------------------------------------------------------------ */

export type PrefixEntry = {
  brand: "Siemens" | "Allen-Bradley" | "Delta" | "Schneider Electric";
  prefixes: string[];
  family: string;
  kind: string;
  note?: string;
};

const S = "Siemens" as const;
const AB = "Allen-Bradley" as const;
const D = "Delta" as const;
const SE = "Schneider Electric" as const;

export const prefixes: PrefixEntry[] = [
  // ---- Siemens ----
  { brand: S, prefixes: ["6ES7 21", "6ES7 22", "6ES7 23"], family: "S7-1200 (or older S7-200)", kind: "PLC CPUs and modules", note: "Both families share these numbers. Check the product name on the label." },
  { brand: S, prefixes: ["6ES7 288"], family: "S7-200 SMART", kind: "PLC CPUs and expansion" },
  { brand: S, prefixes: ["6ES7 3"], family: "S7-300", kind: "PLC CPUs, signal modules, power supplies" },
  { brand: S, prefixes: ["6ES7 4"], family: "S7-400", kind: "PLC CPUs and modules" },
  { brand: S, prefixes: ["6ES7 5"], family: "S7-1500 and ET 200MP", kind: "PLC CPUs and I/O modules" },
  { brand: S, prefixes: ["6ES7 1"], family: "ET 200 distributed I/O", kind: "Interface modules and I/O (ET 200S, ET 200SP, ET 200M)" },
  { brand: S, prefixes: ["6ES7 953", "6ES7 954"], family: "SIMATIC memory cards", kind: "Micro Memory Cards (S7-300) and memory cards (S7-1200, S7-1500)" },
  { brand: S, prefixes: ["6ES7 24"], family: "S7-1200 communication modules (CM 1241)", kind: "Serial and communication modules" },
  { brand: S, prefixes: ["6ES7 972"], family: "PROFIBUS connectors", kind: "Bus connectors and accessories" },
  { brand: S, prefixes: ["6AG1"], family: "SIPLUS", kind: "Extended-environment versions of standard Siemens products" },
  { brand: S, prefixes: ["6ES5"], family: "SIMATIC S5 (legacy)", kind: "Older PLC modules" },
  { brand: S, prefixes: ["6AV2", "6AV6"], family: "SIMATIC HMI", kind: "Operator panels (KTP, TP, OP, MP)" },
  { brand: S, prefixes: ["6AV7"], family: "SIMATIC Panel PC", kind: "Industrial PCs and displays" },
  { brand: S, prefixes: ["6SL3"], family: "SINAMICS drives", kind: "G120, V20 and S120 components" },
  { brand: S, prefixes: ["6SE6"], family: "MICROMASTER 4", kind: "AC drives (420, 430, 440)" },
  { brand: S, prefixes: ["6SE7"], family: "MASTERDRIVES", kind: "Older drive systems" },
  { brand: S, prefixes: ["6EP"], family: "SITOP", kind: "24 V DC power supplies" },
  { brand: S, prefixes: ["6GK5"], family: "SCALANCE", kind: "Industrial Ethernet switches and wireless" },
  { brand: S, prefixes: ["6GK7"], family: "Communication processors", kind: "CP modules for S7 PLCs" },
  { brand: S, prefixes: ["6XV1"], family: "Industrial communication cable", kind: "PROFIBUS and Ethernet cabling" },
  { brand: S, prefixes: ["6FC5"], family: "SINUMERIK", kind: "CNC control components" },
  { brand: S, prefixes: ["3RT"], family: "SIRIUS contactors", kind: "Power contactors" },
  { brand: S, prefixes: ["3RH"], family: "SIRIUS contactor relays", kind: "Control relays" },
  { brand: S, prefixes: ["3RV"], family: "SIRIUS motor protection breakers", kind: "Motor starter protectors" },
  { brand: S, prefixes: ["3RU", "3RB"], family: "SIRIUS overload relays", kind: "Thermal and electronic overloads" },
  { brand: S, prefixes: ["3RW"], family: "SIRIUS soft starters", kind: "Soft starters" },
  { brand: S, prefixes: ["3RP"], family: "SIRIUS timing relays", kind: "Timers" },
  { brand: S, prefixes: ["3UG"], family: "SIRIUS monitoring relays", kind: "Voltage, phase and current monitoring" },
  { brand: S, prefixes: ["3SE"], family: "SIRIUS position and safety switches", kind: "Limit and safety switches" },
  { brand: S, prefixes: ["3SU"], family: "SIRIUS commanding and signalling", kind: "Pushbuttons and indicator lights" },
  { brand: S, prefixes: ["3VA"], family: "SENTRON moulded-case breakers", kind: "Circuit protection" },
  { brand: S, prefixes: ["3NA"], family: "Low-voltage fuses", kind: "HRC fuses" },
  { brand: S, prefixes: ["1LA", "1LE", "1LG"], family: "SIMOTICS low-voltage motors", kind: "Three-phase induction motors" },
  { brand: S, prefixes: ["1FK", "1FT"], family: "SIMOTICS servo motors", kind: "Servo motors" },

  // ---- Allen-Bradley ----
  { brand: AB, prefixes: ["1756"], family: "ControlLogix", kind: "Controllers, chassis, power supplies, I/O and communication modules" },
  { brand: AB, prefixes: ["1769"], family: "CompactLogix and Compact I/O", kind: "Controllers, I/O, power supplies" },
  { brand: AB, prefixes: ["5069"], family: "Compact 5000 / CompactLogix 5380", kind: "Controllers and I/O" },
  { brand: AB, prefixes: ["1794"], family: "FLEX I/O", kind: "Distributed I/O" },
  { brand: AB, prefixes: ["1734"], family: "POINT I/O", kind: "Distributed I/O" },
  { brand: AB, prefixes: ["1732", "1738"], family: "ArmorBlock / ArmorPOINT", kind: "Machine-mounted I/O" },
  { brand: AB, prefixes: ["1761"], family: "MicroLogix 1000", kind: "Small controllers" },
  { brand: AB, prefixes: ["1762"], family: "MicroLogix 1200", kind: "Small controllers and expansion" },
  { brand: AB, prefixes: ["1763"], family: "MicroLogix 1100", kind: "Small controllers" },
  { brand: AB, prefixes: ["1764"], family: "MicroLogix 1500", kind: "Controllers and processors" },
  { brand: AB, prefixes: ["1766"], family: "MicroLogix 1400", kind: "Small controllers" },
  { brand: AB, prefixes: ["1747"], family: "SLC 500", kind: "Processors and chassis" },
  { brand: AB, prefixes: ["1746"], family: "SLC 500 I/O", kind: "I/O modules" },
  { brand: AB, prefixes: ["1785"], family: "PLC-5", kind: "Legacy processors" },
  { brand: AB, prefixes: ["1771"], family: "PLC-5 I/O", kind: "Legacy I/O modules" },
  { brand: AB, prefixes: ["2080"], family: "Micro800", kind: "Controllers and plug-in modules" },
  { brand: AB, prefixes: ["2711P"], family: "PanelView Plus", kind: "Operator terminals" },
  { brand: AB, prefixes: ["2711C"], family: "PanelView Component", kind: "Operator terminals" },
  { brand: AB, prefixes: ["2711R"], family: "PanelView 800", kind: "Operator terminals" },
  { brand: AB, prefixes: ["22A", "22B"], family: "PowerFlex 4 and 40", kind: "AC drives" },
  { brand: AB, prefixes: ["20A", "20B"], family: "PowerFlex 70 and 700", kind: "AC drives" },
  { brand: AB, prefixes: ["20F", "20G"], family: "PowerFlex 750-series", kind: "AC drives (753, 755)" },
  { brand: AB, prefixes: ["25A", "25B"], family: "PowerFlex 523 and 525", kind: "AC drives" },
  { brand: AB, prefixes: ["1305", "1336"], family: "Legacy Allen-Bradley AC drives (1305, 1336)", kind: "Legacy AC drives" },
  { brand: AB, prefixes: ["2198", "2094"], family: "Kinetix", kind: "Servo drives" },
  { brand: AB, prefixes: ["100C"], family: "Contactors", kind: "IEC power contactors (100-C)" },
  { brand: AB, prefixes: ["140M"], family: "Motor protection circuit breakers", kind: "Circuit protection" },
  { brand: AB, prefixes: ["1606"], family: "Power supplies", kind: "24 V DC DIN-rail supplies" },
  { brand: AB, prefixes: ["1492"], family: "Terminal blocks", kind: "Terminals and wiring accessories" },
  { brand: AB, prefixes: ["1783"], family: "Stratix", kind: "Industrial Ethernet switches" },

  // ---- Delta ----
  { brand: D, prefixes: ["DVP"], family: "DVP series", kind: "PLC controllers and expansion modules" },
  { brand: D, prefixes: ["AS2", "AS3"], family: "AS series PLC", kind: "Controllers and expansion modules" },
  { brand: D, prefixes: ["VFD"], family: "VFD series", kind: "AC drives (EL, E, B, M, MS300, C2000, CP2000 families)" },
  { brand: D, prefixes: ["DOP"], family: "DOP series", kind: "HMI operator panels" },
  { brand: D, prefixes: ["ASD"], family: "ASDA servo drives", kind: "Servo drives" },
  { brand: D, prefixes: ["ECM"], family: "ECMA servo motors", kind: "Servo motors" },
  { brand: D, prefixes: ["DTA", "DTB", "DTC"], family: "Temperature controllers", kind: "Process temperature controllers" },
  { brand: D, prefixes: ["DRP"], family: "DRP series", kind: "24 V DC DIN-rail power supplies" },

  // ---- Schneider Electric ----
  { brand: SE, prefixes: ["TM221"], family: "Modicon M221", kind: "Compact controllers" },
  { brand: SE, prefixes: ["TM241"], family: "Modicon M241", kind: "Logic controllers" },
  { brand: SE, prefixes: ["TM251"], family: "Modicon M251", kind: "Logic controllers" },
  { brand: SE, prefixes: ["TM258"], family: "Modicon M258", kind: "Logic controllers" },
  { brand: SE, prefixes: ["TM3"], family: "Modicon TM3", kind: "Expansion I/O modules" },
  { brand: SE, prefixes: ["TM5"], family: "Modicon TM5", kind: "Expansion I/O modules" },
  { brand: SE, prefixes: ["BMXP34"], family: "Modicon M340 CPUs", kind: "Controllers" },
  { brand: SE, prefixes: ["BMX"], family: "Modicon M340", kind: "Modules, racks and power supplies" },
  { brand: SE, prefixes: ["BMEP58"], family: "Modicon M580 CPUs", kind: "Controllers" },
  { brand: SE, prefixes: ["BME"], family: "Modicon M580", kind: "Modules and communication" },
  { brand: SE, prefixes: ["140C", "140D", "140A", "140X", "140E", "140N"], family: "Modicon Quantum", kind: "Legacy PLC modules", note: "140N modules are communication modules" },
  { brand: SE, prefixes: ["TSX"], family: "Modicon Premium and Micro", kind: "Legacy PLC modules" },
  { brand: SE, prefixes: ["TWD"], family: "Twido", kind: "Legacy compact PLCs" },
  { brand: SE, prefixes: ["ATV"], family: "Altivar", kind: "AC drives (12, 312, 320, 340, 600, 900 families)" },
  { brand: SE, prefixes: ["ATS"], family: "Altistart", kind: "Soft starters" },
  { brand: SE, prefixes: ["LXM"], family: "Lexium", kind: "Servo drives" },
  { brand: SE, prefixes: ["LC1", "LC2"], family: "TeSys contactors", kind: "Power contactors" },
  { brand: SE, prefixes: ["LRD", "LR3"], family: "TeSys overload relays", kind: "Thermal and electronic overloads" },
  { brand: SE, prefixes: ["GV2", "GV3"], family: "TeSys motor circuit breakers", kind: "Motor protection" },
  { brand: SE, prefixes: ["XB4", "XB5"], family: "Harmony pushbuttons", kind: "Pushbuttons and selector switches" },
  { brand: SE, prefixes: ["XCK", "XCM"], family: "OsiSense limit switches", kind: "Position switches" },
  { brand: SE, prefixes: ["XS", "XT", "XU"], family: "OsiSense sensors", kind: "Inductive, capacitive and photoelectric sensors" },
  { brand: SE, prefixes: ["ABL"], family: "Phaseo", kind: "24 V DC power supplies" },
  { brand: SE, prefixes: ["HMI"], family: "Magelis", kind: "Operator panels" },
  { brand: SE, prefixes: ["XBT"], family: "Magelis XBT", kind: "Older operator panels" },
  { brand: SE, prefixes: ["RXM", "RXG", "RUM", "RSB"], family: "Zelio relays", kind: "Plug-in and interface relays" },
  { brand: SE, prefixes: ["SR2", "SR3"], family: "Zelio Logic", kind: "Smart relays" },
];

export const norm = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, "");

export type PrefixMatch = { entry: PrefixEntry; prefix: string; exact: boolean };

export function identifyPart(input: string): PrefixMatch | null {
  const q = norm(input);
  if (q.length < 3) return null;
  let best: PrefixMatch | null = null;
  for (const entry of prefixes) {
    for (const p of entry.prefixes) {
      const np = norm(p);
      if (q.startsWith(np) && (!best || np.length > norm(best.prefix).length)) {
        best = { entry, prefix: p, exact: true };
      }
    }
  }
  if (best) return best;
  // Fallback: a long prefix inside a longer string (e.g. "SIEMENS 6ES7 313...")
  for (const entry of prefixes) {
    for (const p of entry.prefixes) {
      const np = norm(p);
      if (np.length >= 4 && q.includes(np) && (!best || np.length > norm(best.prefix).length)) {
        best = { entry, prefix: p, exact: false };
      }
    }
  }
  return best;
}

/* ------------------------------------------------------------------ */
/* Downloads                                                           */
/* ------------------------------------------------------------------ */

export const downloads = [
  {
    file: "/downloads/critical-spares-register.csv",
    name: "Critical spares register template",
    description:
      "A spreadsheet-ready register with columns for order number, version, stock level, lead time, downtime cost and lifecycle status. Opens in Excel or Google Sheets.",
    format: "CSV",
  },
];
