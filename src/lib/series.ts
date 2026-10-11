import type { Landing } from "./content";

/** Landing pages for specific platforms that people search for by name. */
export const series: Landing[] = [
  {
    slug: "siemens-s7-300-spares",
    kind: "series",
    name: "Siemens S7-300",
    title: "Siemens S7-300 Spares in South Africa: CPUs, I/O and Power Supplies",
    description:
      "Siemens S7-300 PLC spares: CPUs, signal modules, PS 307 power supplies, interface modules and memory cards. Send the 6ES7 order number for availability and price.",
    h1: "Siemens S7-300 spares: CPUs, signal modules and power supplies",
    intro:
      "The S7-300 is a modular PLC found across South African plants. We source CPUs, signal and function modules, power supplies and communication modules. Send the full 6ES7 order number from the module.",
    content:
      "Introduced in the mid-1990s, the S7-300 became one of the most widely installed PLC platforms in Southern African manufacturing, mining, water treatment and materials handling. Its modular rail-mounted design allowed engineers to build a controller sized precisely to the application, from a single-rack machine controller to multi-rack systems distributed across a plant. Many of these systems have now been running for twenty years or more, and the spares question is a daily reality for maintenance teams who need to keep ageing equipment reliable.\n\nTypical failure points on a mature S7-300 installation include the power supplies, which age with their electrolytic capacitors, and front connectors that are repeatedly removed and refitted during maintenance. CPUs generally give warning through diagnostic LEDs before failing outright, but a power surge or lightning event on an unprotected supply can take a CPU and its Micro Memory Card offline without notice. Signal modules are usually robust, though analogue modules in particular can drift or fail channel by channel, and a failed input card can look like a field device fault to operators who are not familiar with the system.\n\nAs Siemens continues to steer new projects toward the S7-1500, availability of some S7-300 parts has tightened, and certain CPUs and modules are now only obtainable as surplus or refurbished stock. For plants still running S7-300 systems, the practical approach is an obsolescence review of the installed base, identifying the modules that matter most to production and securing spares before they are needed. Where a replacement is no longer available, a staged migration to a current platform can be planned and budgeted rather than forced by an unplanned failure.",
    coversLabel: "Typical S7-300 requests",
    covers: [
      "CPUs such as the 312, 313C, 314 and 315 families",
      "Digital and analogue signal modules (SM 321, 322, 331, 332)",
      "Power supplies (PS 307)",
      "Interface modules (IM 360, 361) and communication processors (CP 343)",
      "Front connectors, bus connectors and Micro Memory Cards",
    ],
    highlights: [
      {
        title: "Match the full 6ES7 number",
        body: "Two S7-300 modules with similar names can differ in variant and version. The complete order number, including the last block, is what we match.",
      },
      {
        title: "An ageing platform",
        body: "Siemens has been moving customers to the S7-1500, so some S7-300 parts are harder to find new. Send the number and we will tell you what we can source and, where it makes sense, what a staged migration looks like.",
      },
      {
        title: "Memory cards and programs",
        body: "A CPU usually needs a compatible Micro Memory Card, and the program has to come from your backup. Tell us early if you do not have one.",
      },
    ],
    faqs: [
      {
        q: "Can I get an S7-300 CPU with my program already on it?",
        a: "A replacement CPU does not contain your program. You need your backup, and our PLC programming and support team can help you load and test it.",
      },
      {
        q: "Is the S7-300 still available new?",
        a: "Availability changes by part and over time. Send the order number and we will tell you what we can source and whether an alternative exists.",
      },
      {
        q: "What memory card does my S7-300 CPU need?",
        a: "Most S7-300 CPUs use a Micro Memory Card (MMC) sized to the CPU. Some older CPUs also work with a Flash card. Tell us the CPU order number and we will confirm the right card.",
      },
      {
        q: "Can I replace an S7-300 signal module without downloading the program?",
        a: "Yes. The program lives in the CPU, not the I/O. Swap the module, restore the front connector wiring, and the station returns online.",
      },
      {
        q: "What is the difference between the PS 307 2A, 5A and 10A?",
        a: "The number is the output current. Calculate the load of the CPU and modules plus a margin, then choose the next size up. Oversizing slightly is safer than running a supply near its limit.",
      },
      {
        q: "Do you supply front connectors for S7-300 modules?",
        a: "Yes. Send the signal module order number and we will match the correct connector, 20-pin or 40-pin as applicable.",
      },
      {
        q: "Can you migrate an S7-300 program to an S7-1500?",
        a: "This is a major engineering task. We can advise on the process and connect you with programming support for the conversion.",
      },
      {
        q: "My S7-300 CPU shows a red SF LED. What now?",
        a: "A red SF LED means a fault such as a hardware error, lost module or program issue. Note the pattern, check the diagnostic buffer, and send us the reading with the CPU order number.",
      },
      {
        q: "Are refurbished S7-300 modules tested?",
        a: "Yes. Refurbished modules are tested before despatch, and we stand behind them with a warranty. Ask about the warranty terms when you order.",
      },
      {
        q: "Can I use a higher-rated power supply than my system needs?",
        a: "Yes. The PS 307 is regulated, so a larger supply simply provides headroom. Just make sure the physical size and mounting fit your cabinet.",
      },
    ],
    formBrand: "Siemens",
    leadTopic: "Siemens S7-300",
  },
  {
    slug: "siemens-s7-1200-spares",
    kind: "series",
    name: "Siemens S7-1200",
    title: "Siemens S7-1200 Spares in South Africa: CPUs, Signal Modules and Boards",
    description:
      "Siemens S7-1200 PLC spares: CPU 1211C to 1217C, SM 1221 to 1234 signal modules, signal boards, communication modules and memory cards.",
    h1: "Siemens S7-1200 spares: CPUs, signal modules and boards",
    intro:
      "A compact PLC that machine builders and plants use widely. We source CPUs, signal modules, signal boards and communication modules. Send the 6ES7 order number and the CPU variant.",
    content:
      "The S7-1200 arrived in 2010 as Siemens' answer to the growing demand for a low-cost, compact controller that did not compromise on capability. Built around a single integrated unit with onboard Ethernet and a removable terminal block, it brought PROFINET connectivity and TIA Portal programming to applications that would previously have required a larger controller. For machine builders and system integrators in South Africa, it quickly became the default choice for standalone machines, pump stations, packaging lines and small process skids.\n\nExpansion is handled through signal modules that clip onto the right-hand side of the CPU, adding digital or analogue I/O without growing the footprint significantly, while signal boards plug directly onto the front of the CPU to add a handful of points for simple applications. Communication modules such as the CM 1241 enable serial, PROFIBUS and other industrial networks, allowing the S7-1200 to sit alongside older equipment on mixed networks. This modularity within a compact envelope is what makes the platform so versatile across the range of applications seen in South African industry.\n\nBecause the S7-1200 is programmed exclusively in TIA Portal, the compatibility chain between the CPU firmware version, the TIA Portal version and the hardware configuration is a common source of confusion when replacing a controller. The good news is that the platform is current and well supported, with spare CPUs and modules generally available from stock or short lead times. For plants standardising on Siemens, the S7-1200 fills the gap between small machine control and the larger S7-1500 range, and its widespread installed base means most maintenance engineers in the region are already familiar with it.",
    coversLabel: "Typical S7-1200 requests",
    covers: [
      "CPU 1211C, 1212C, 1214C, 1215C and 1217C",
      "Signal modules (SM 1221, 1222, 1223, 1231, 1232, 1234)",
      "Signal boards and communication boards",
      "Communication modules (CM 1241) and PM 1207 power modules",
      "SIMATIC memory cards",
    ],
    highlights: [
      {
        title: "Know the CPU variant",
        body: "The variant code, for example DC/DC/DC or AC/DC/RLY, describes the supply, the inputs and the outputs. A replacement must match all three.",
      },
      {
        title: "Firmware and TIA Portal version",
        body: "S7-1200 projects are tied to a TIA Portal version and CPU firmware. Check the firmware on the label so the replacement works with your software.",
      },
    ],
    faqs: [
      {
        q: "How do I find the firmware version of my S7-1200?",
        a: "It is printed on the label, and you can read it from TIA Portal when connected. Include it when you send the order number.",
      },
      {
        q: "Which TIA Portal version do I need for my S7-1200?",
        a: "The CPU label and the existing project show the version. A project created in a newer TIA Portal cannot be downloaded to a CPU with older firmware. Check the compatibility chart or send us the details.",
      },
      {
        q: "What is a signal board on the S7-1200?",
        a: "A small module that plugs directly onto the front of the CPU, adding I/O without increasing the footprint. Each CPU supports one signal board. We stock common types.",
      },
      {
        q: "Can I add communication modules to the S7-1200?",
        a: "Yes. Up to three communication modules (CM) can be added to the left of the CPU for serial, PROFIBUS or other networks. Check the CPU firmware supports the CM you choose.",
      },
      {
        q: "My S7-1200 will not go into RUN. What should I check?",
        a: "Check for a hardware configuration mismatch, a missing program block or a wiring fault. If a replacement was fitted, confirm the hardware configuration matches the modules actually installed.",
      },
      {
        q: "How many devices can I connect to an S7-1200 over PROFINET?",
        a: "It depends on the CPU and firmware. The 1214C and above support more devices. Check the CPU specifications or send us your CPU order number for confirmation.",
      },
      {
        q: "Do you supply S7-1200 power supplies?",
        a: "Yes, the PM 1207 and compatible supplies. Send the CPU order number so we confirm the rating is adequate for your configuration.",
      },
      {
        q: "Can I load a program from a memory card into a new S7-1200 CPU?",
        a: "Yes, if the card was saved as a transfer card from a compatible CPU. A normal program card may not transfer cleanly. Ask us about your card type before ordering.",
      },
      {
        q: "Is the S7-1200 a good choice for a new machine?",
        a: "Yes, it is current and widely supported. We can advise on the CPU variant and modules for your application.",
      },
      {
        q: "What warranty do you offer on S7-1200 parts?",
        a: "New parts carry the manufacturer's warranty. Refurbished and surplus parts carry our own warranty. Ask for the terms when you order.",
      },
    ],
    formBrand: "Siemens",
    leadTopic: "Siemens S7-1200",
  },
  {
    slug: "siemens-s7-1500-spares",
    kind: "series",
    name: "Siemens S7-1500",
    title: "Siemens S7-1500 Spares in South Africa: CPUs, I/O and ET 200SP",
    description:
      "Siemens S7-1500 PLC spares: CPU 1511 to 1518, digital and analogue I/O, power supplies, communication modules and ET 200SP distributed I/O.",
    h1: "Siemens S7-1500 spares: CPUs, I/O modules and ET 200SP",
    intro:
      "Siemens' current high-performance controller range. We source CPUs, I/O modules, power supplies and communication modules, plus ET 200SP distributed I/O. Send the order number from the module.",
    content:
      "The S7-1500 is Siemens' flagship controller platform, launched in 2012 to succeed the S7-300 and S7-400 ranges and now the reference architecture for new Siemens automation projects worldwide. Its CPUs integrate a display, an Ethernet port and PROFINET interfaces directly onto the controller, delivering processing performance that significantly outclasses the S7-300 on scan times, motion control and communication throughput. For South African plants undertaking greenfield projects or brownfield upgrades, the S7-1500 is the platform Siemens specifies, and its growing installed base means demand for spares is increasing steadily.\n\nA key design concept of the S7-1500 is the separation of the controller from the I/O through PROFINET, with the ET 200SP family serving as the distributed I/O solution. ET 200SP uses a modular design with BaseUnits and plug-in I/O modules that can be changed without disturbing the wiring, which reduces downtime during maintenance significantly compared to traditional hard-wired I/O. The platform also supports fail-safe CPUs and I/O for safety applications, integrating safety and standard control in a single system rather than requiring separate safety controllers.\n\nFor plants migrating from S7-300 to S7-1500, the transition is not a simple hardware swap because the two platforms use different programming concepts, hardware configurations and network architectures. Siemens provides migration tools within TIA Portal that convert S7-300 projects to S7-1500 format, but the conversion still requires engineering review and commissioning. The S7-1500's status as Siemens' current platform means long-term availability is assured, making it a safer investment for plants planning their automation future.",
    coversLabel: "Typical S7-1500 requests",
    covers: [
      "CPU 1511, 1513, 1515, 1516 and 1518, including fail-safe (F) variants",
      "Digital and analogue I/O modules",
      "System and load power supplies",
      "Communication modules and processors",
      "ET 200SP interface modules, I/O modules and BaseUnits",
      "SIMATIC memory cards",
    ],
    highlights: [
      {
        title: "Fail-safe CPUs need care",
        body: "Replacing a fail-safe CPU involves the safety program and its signature. Talk to us before swapping one.",
      },
      {
        title: "Versions and TIA Portal",
        body: "Match the firmware and hardware version to your TIA Portal project so the replacement can be configured without surprises.",
      },
    ],
    faqs: [
      {
        q: "Can you supply ET 200SP modules as well?",
        a: "We can quote them. Send the order numbers for the interface module, I/O modules and BaseUnits so the set is complete.",
      },
      {
        q: "What is the difference between the S7-1500 standard and F CPUs?",
        a: "F CPUs are fail-safe and can run safety-related program blocks. Standard CPUs cannot. Match the F or non-F designation in your order number.",
      },
      {
        q: "Can I replace an S7-1500 I/O module without reconfiguring?",
        a: "If the replacement is the same order number and hardware version, it can be swapped without changes. Send us the details to confirm the version.",
      },
      {
        q: "Do you stock ET 200SP BaseUnits?",
        a: "Yes. Send the I/O module order number and we will supply the matching BaseUnit, as the two must be paired.",
      },
      {
        q: "My S7-1500 will not start. What should I check?",
        a: "Check the 24 V supply, the PROFINET wiring and the diagnostic LEDs. Note the LED pattern and send us the CPU order number for advice.",
      },
      {
        q: "Can I expand an S7-1500 with ET 200SP I/O?",
        a: "Yes. ET 200SP connects over PROFINET and can be distributed around the machine. We can advise on the interface modules and modules needed.",
      },
      {
        q: "What memory card does an S7-1500 use?",
        a: "A SIMATIC memory card sized for the CPU. Some CPUs also support a program card for transfer. Send the CPU order number to confirm.",
      },
      {
        q: "How do I back up an S7-1500 program?",
        a: "Use TIA Portal to back up the project, and consider also saving a memory card backup. Keep both with the machine documentation.",
      },
      {
        q: "Is the S7-1500 backward compatible with S7-300?",
        a: "No, it is a new platform with different hardware and software. A migration is a project. We can advise on the steps.",
      },
      {
        q: "What warranty do you offer on S7-1500 parts?",
        a: "New parts carry the manufacturer's warranty. Refurbished and surplus parts carry our own warranty. Ask for the terms when you order.",
      },
    ],
    formBrand: "Siemens",
    leadTopic: "Siemens S7-1500",
  },
  {
    slug: "siemens-sinamics-micromaster-drives",
    kind: "series",
    name: "Siemens SINAMICS & MICROMASTER drives",
    title: "Siemens SINAMICS and MICROMASTER Drive Spares in South Africa",
    description:
      "Siemens drive spares: SINAMICS G120, G120C and V20, MICROMASTER 420, 430 and 440, control units, power modules and operator panels.",
    h1: "Siemens SINAMICS and MICROMASTER drive spares",
    intro:
      "Variable frequency drives from the Siemens range. Send the label from the drive and, if it is modular, from both the control unit and the power module.",
    content:
      "The SINAMICS family represents Siemens' unified drive platform, replacing earlier ranges with a common hardware and software architecture. The G120 is the workhorse of the range for standard applications, available in a modular form with separate control unit and power module that allows only the failed half to be replaced, reducing spare parts inventory for plants running multiple drive sizes. The G120C offers a compact monolithic design for smaller powers, while the V20 targets simple pump and fan applications where cost matters more than advanced functionality. Together these families cover everything from basic speed control to complex positioning and safety-integrated drive tasks.\n\nThe MICROMASTER 4 family, comprising the 420, 430 and 440, dominated the small-to-medium drive market from the late 1990s onward and remains one of the most common drive families in South African industry. These drives are now in a mature phase of their lifecycle, with Siemens focusing development on SINAMICS and MICROMASTER units increasingly sourced as surplus or refurbished stock. The practical advantage of this large installed base is that many plants have decades of operational experience with the family, and parameter backup and commissioning are well understood by local drive technicians.\n\nOne of the strongest features shared across the SINAMICS range is the ability to save and restore drive parameters using a basic operator panel or memory card. This means a replacement drive can be commissioned in minutes once the parameter file is available, which is a significant advantage during unplanned downtime. For MICROMASTER 4 units, the parameter transfer process is similarly straightforward using the optional operator panel. In the South African context, where supply chains for imported drives can be slow, having parameter backup practices in place makes the difference between a quick restart and a prolonged outage.",
    coversLabel: "Typical Siemens drive requests",
    covers: [
      "SINAMICS G120 and G120C drives",
      "SINAMICS V20 drives",
      "MICROMASTER 420, 430 and 440 (older family)",
      "Control units, power modules and operator panels such as BOP-2",
      "Line reactors, filters and braking resistors",
    ],
    highlights: [
      {
        title: "Modular drives, two labels",
        body: "A G120 is a control unit plus a power module. Often only one half has failed, so send both labels and we can work out which part you need.",
      },
      {
        title: "Parameters can be copied",
        body: "These drives let you save settings to an operator panel or card, which speeds up commissioning a replacement.",
      },
      {
        title: "Older MICROMASTER units",
        body: "MICROMASTER 4 has been succeeded by newer SINAMICS drives. Availability varies, so send the label and we will check.",
      },
    ],
    faqs: [
      {
        q: "Do I need the power module and the control unit?",
        a: "Only the part that failed, if the other is healthy and compatible. Send both labels and describe the fault so we can identify which one.",
      },
      {
        q: "What is the difference between the control unit and the power module?",
        a: "The control unit handles the control logic and communication. The power module handles the power stage. On a modular drive like the G120 they are separate parts.",
      },
      {
        q: "Can I copy parameters between SINAMICS drives?",
        a: "Yes, using an operator panel or memory card to save and restore settings. This speeds up commissioning a replacement.",
      },
      {
        q: "What is a BOP-2?",
        a: "The basic operator panel-2, a simple panel for commissioning and controlling SINAMICS G120 drives. We can supply replacements.",
      },
      {
        q: "My drive trips on overcurrent. What could it be?",
        a: "Check the motor and cable for insulation faults, then the mechanical load. If the drive itself is suspect, send us the catalogue number for advice.",
      },
      {
        q: "Do you supply braking resistors for SINAMICS drives?",
        a: "Yes, for G120 and other families. Send the drive catalogue number and we will match a resistor of the right rating.",
      },
      {
        q: "Can a MICROMASTER 440 be replaced by a SINAMICS G120?",
        a: "Often yes, but the wiring and parameters differ. Send both labels and our engineers can advise on the changeover.",
      },
      {
        q: "What is the difference between G120 and G120C?",
        a: "The G120C is a compact version with a different form factor and power range. Check your label or send the catalogue number.",
      },
      {
        q: "Do you supply EMC filters for these drives?",
        a: "Yes. Filter selection depends on the drive size and application. Send the catalogue number for a recommendation.",
      },
      {
        q: "How do I know if my drive needs a line reactor?",
        a: "It is recommended on some supplies and for larger drives to reduce harmonics. Ask for advice with your catalogue number and supply details.",
      },
    ],
    formBrand: "Siemens",
    leadTopic: "Siemens drives",
  },
  {
    slug: "allen-bradley-controllogix-spares",
    kind: "series",
    name: "Allen-Bradley ControlLogix",
    title: "Allen-Bradley ControlLogix Spares in South Africa (1756)",
    description:
      "Allen-Bradley ControlLogix spares: 1756 controllers, chassis, power supplies, I/O and EtherNet/IP or ControlNet modules. Send the catalogue number for availability.",
    h1: "Allen-Bradley ControlLogix spares (1756)",
    intro:
      "ControlLogix controllers, chassis, power supplies, I/O and communication modules. Send the full 1756 catalogue number and, for controllers, the firmware revision.",
    content:
      "ControlLogix is Rockwell Automation's modular control platform, introduced in 1997 to replace the PLC-5 and SLC 500 for larger applications and now the backbone of many South African mining, minerals processing and heavy manufacturing plants. The platform's defining feature is its chassis-based architecture, where the controller, communication modules and I/O modules share a common backplane that handles both data exchange and power distribution. This modular design means a single failed module can be replaced without rewiring the system, and the chassis can be expanded by simply adding modules to empty slots.\n\nThe controller generations within ControlLogix span the 5560 (L6x), 5570 (L7x) and 5580 (L8x) series, each delivering greater memory, processing speed and integrated communication than its predecessor. The 5580 generation in particular introduced significantly enhanced cybersecurity features, improved motion control and greater processing throughput, making it suitable for the most demanding applications in mining and process industries. Firmware compatibility between the controller and the programming software in Studio 5000 is critical, and a mismatch is one of the most common reasons a replacement controller appears not to work.\n\nElectronic keying is a ControlLogix feature that prevents a module from being replaced with an incorrect type, protecting against configuration errors that could damage equipment or cause unsafe operation. The system also supports redundancy options for critical applications, with paired controllers and redundant communication networks for processes where downtime is measured in lost revenue per minute. For South African plants running ControlLogix, the availability of spare modules and the ability to source controllers at specific firmware revisions are ongoing concerns as the installed base ages, particularly for the earlier 5560 and 5570 generations.",
    coversLabel: "Typical ControlLogix requests",
    covers: [
      "Controllers in the 5560, 5570 and 5580 generations (1756-L6x, L7x, L8x)",
      "Chassis (1756-A4, A7, A10, A13, A17) and power supplies (1756-PA72, PB72)",
      "Digital and analogue I/O modules",
      "EtherNet/IP and ControlNet communication modules",
      "SD memory cards for supported controllers",
    ],
    highlights: [
      {
        title: "Firmware revision matters",
        body: "A Logix project is tied to the major firmware revision of the controller. A replacement may need to be flashed to match, so tell us the revision in use.",
      },
      {
        title: "Keying and slot positions",
        body: "I/O modules are usually electronically keyed in the project. List catalogue numbers and revisions so a replacement is accepted without changing the configuration.",
      },
    ],
    faqs: [
      {
        q: "Can you supply a controller at a specific firmware revision?",
        a: "Ask when you send the catalogue number. Revision can often be changed with the right software, and we can advise on how.",
      },
      {
        q: "Can I use any ControlLogix chassis with my controller?",
        a: "Any 1756 chassis works, but slot count and power budget must suit the configuration. Send the catalogue numbers to confirm.",
      },
      {
        q: "How do I find the firmware revision of my ControlLogix controller?",
        a: "It is printed on the label and shown in Studio 5000 when connected. Include it when you send the catalogue number.",
      },
      {
        q: "What is electronic keying on ControlLogix I/O?",
        a: "A safety feature that prevents a module being replaced by the wrong type. The keying is set in the project. Match the keying or change it in the configuration.",
      },
      {
        q: "Can I replace a ControlNet module without reconfiguring?",
        a: "Yes, if the replacement is the same catalogue number and revision. The network settings come from the project. Send us the details.",
      },
      {
        q: "Do you supply 1756 power supplies?",
        a: "Yes, the PA72, PB72 and similar. Send the catalogue number and confirm the rating suits your chassis load.",
      },
      {
        q: "What SD card do I need for a ControlLogix controller?",
        a: "SD card support varies by controller generation. Send the controller catalogue number and we will confirm.",
      },
      {
        q: "My controller shows a fault. How do I read the diagnostics?",
        a: "Check the major fault code on the front and in Studio 5000. Send us the code and the catalogue number for advice.",
      },
      {
        q: "Can I mix ControlNet and EtherNet/IP on the same chassis?",
        a: "Yes, with suitable communication modules. Each network needs its own module. Send us your layout for advice.",
      },
      {
        q: "What warranty do you offer on ControlLogix parts?",
        a: "New parts carry the manufacturer's warranty. Refurbished and surplus parts carry our own warranty. Ask for the terms when you order.",
      },
    ],
    formBrand: "Allen-Bradley",
    leadTopic: "ControlLogix",
  },
  {
    slug: "allen-bradley-compactlogix-spares",
    kind: "series",
    name: "Allen-Bradley CompactLogix",
    title: "Allen-Bradley CompactLogix and Compact I/O Spares in South Africa",
    description:
      "Allen-Bradley CompactLogix spares: 1769 and 5069 controllers, Compact I/O modules, power supplies and end caps. Send the catalogue number.",
    h1: "Allen-Bradley CompactLogix and Compact I/O spares",
    intro:
      "Mid-range Rockwell controllers and the I/O that sits beside them. Send the catalogue number, which starts 1769 or 5069, and the firmware revision.",
    content:
      "CompactLogix occupies the space between the small MicroLogix controllers and the larger ControlLogix platform, offering processing power and communication capability in a compact, DIN-rail or panel-mountable package. The 1769 controllers belong to the CompactLogix 5370 generation, which introduced faster processors, more integrated memory and enhanced EtherNet/IP performance compared to its predecessors. The 5069 controllers represent the CompactLogix 5380 generation, launched with greater processing speed, increased memory and improved security features. Both generations remain widely installed across South African packaging, materials handling and general machinery applications.\n\nCompactLogix systems are typically expanded using Compact I/O modules, with the 1769-series Compact I/O designed for the 5370 controllers and the 5069-series Compact 5000 I/O designed for the 5380 controllers. These two I/O families are not interchangeable despite their similar appearance, a fact that causes confusion when sourcing spares. A Compact I/O bank requires a power supply, a series of I/O modules and an end cap to function, and the power budget must be calculated carefully because each module consumes current from the power supply's rating.\n\nThe CompactLogix platform is programmed using Studio 5000 Logix Designer, and firmware revision matching between the controller and the project file is essential for successful download. In South Africa, CompactLogix is particularly popular with OEM machine builders who export equipment to mining and industrial customers across the continent, meaning the installed base extends well beyond South Africa's borders. For plants running CompactLogix, the key spares considerations are controller availability, I/O module compatibility and ensuring the correct end caps and power supplies are specified when expanding or replacing a system.",
    coversLabel: "Typical CompactLogix requests",
    covers: [
      "CompactLogix 5370 controllers (1769-L1x, L2x, L3x)",
      "CompactLogix 5380 controllers (5069-L3xx)",
      "Compact I/O (1769) and Compact 5000 I/O (5069)",
      "Power supplies and end caps (1769-PA2, PB2, ECR)",
      "Communication and memory options",
    ],
    highlights: [
      {
        title: "Two families, similar names",
        body: "1769 and 5069 products look alike and are not interchangeable. The catalogue number prefix tells them apart.",
      },
      {
        title: "Count the whole rack",
        body: "Compact I/O banks need a power supply and an end cap as well as the modules. List every item so nothing is missed.",
      },
    ],
    faqs: [
      {
        q: "Are 1769 and 5069 modules compatible?",
        a: "No. They are separate families, so match the catalogue number prefix of what is installed.",
      },
      {
        q: "Can I use Compact I/O with a 5380 controller?",
        a: "Yes, the 5069 I/O is designed for the 5380. The older 1769 Compact I/O works with the 5370. Match the I/O family to the controller.",
      },
      {
        q: "How many modules can I add to a Compact I/O bank?",
        a: "It depends on the power supply rating and the module consumption. Send the list and we can check the budget.",
      },
      {
        q: "What end cap do I need for Compact I/O?",
        a: "The 1769-ECR right end cap for 1769 banks, or the matching 5069 end cap for 5069 banks. A missing end cap can cause issues.",
      },
      {
        q: "Can I replace a CompactLogix controller without losing the program?",
        a: "The program is in the controller. If you have a backup, we can reload it. Send the catalogue number and advise on the transfer method.",
      },
      {
        q: "My Compact I/O is not responding. What should I check?",
        a: "Check the power supply, the end cap and the module seating. If a module was replaced, confirm it matches the original catalogue number.",
      },
      {
        q: "Do you supply CompactLogix power supplies?",
        a: "Yes, the PA2, PB2 and similar. Send the catalogue number and confirm the rating suits your bank.",
      },
      {
        q: "Can I use a 5069 controller in place of a 1769?",
        a: "No, they are separate families. The 5069 is the newer CompactLogix 5380. Match the family to what is installed.",
      },
      {
        q: "What firmware does my CompactLogix need?",
        a: "The firmware revision is set by the Studio 5000 project. Send the catalogue number and the project revision for advice.",
      },
      {
        q: "What warranty do you offer on CompactLogix parts?",
        a: "New parts carry the manufacturer's warranty. Refurbished and surplus parts carry our own warranty. Ask for the terms when you order.",
      },
    ],
    formBrand: "Allen-Bradley",
    leadTopic: "CompactLogix",
  },
  {
    slug: "allen-bradley-micrologix-slc-spares",
    kind: "series",
    name: "Allen-Bradley MicroLogix & SLC 500",
    title: "Allen-Bradley MicroLogix and SLC 500 Spares in South Africa",
    description:
      "Allen-Bradley MicroLogix 1000, 1100, 1200, 1400 and 1500, SLC 500 and PLC-5 spares: controllers, I/O, power supplies and communication modules.",
    h1: "Allen-Bradley MicroLogix, SLC 500 and PLC-5 spares",
    intro:
      "Long-running Rockwell platforms that many plants still depend on. Send the catalogue number and we will check what we can source.",
    content:
      "The MicroLogix, SLC 500 and PLC-5 families represent decades of Rockwell Automation controller history, and their combined installed base in South Africa is enormous. MicroLogix controllers served as affordable fixed-format controllers for small machines, with the 1000, 1100, 1200, 1400 and 1500 models covering everything from simple replacement relay logic to modest process control tasks. The SLC 500 offered modular rack-based expansion for applications needing more I/O or distributed control, while the PLC-5 served as the high-end processor for larger systems throughout the 1980s and 1990s. All three families are now in mature or legacy phases of their product lifecycles.\n\nThe practical implication for maintenance engineers is that many parts for these platforms are no longer manufactured as new, and availability depends on surplus stock, refurbished units or carefully sourced alternatives. MicroLogix 1000 controllers in particular are still widely available on the surplus market, and SLC 500 processors and I/O modules remain obtainable through specialist suppliers. The PLC-5 family is the most challenging to support, with modules increasingly scarce and repairs often the only option for failed cards. For plants running these systems, maintaining a small stock of critical spares and having a documented obsolescence plan is essential.\n\nSoftware support is another consideration: MicroLogix and SLC 500 systems are programmed using RSLogix 500, while PLC-5 systems use RSLogix 5. These software packages are no longer sold by Rockwell Automation, and finding licensed copies can be difficult. The combination of ageing hardware and increasingly unavailable software makes these platforms candidates for planned migration rather than indefinite life extension. South African plants running MicroLogix or SLC 500 should consider a gradual replacement strategy, prioritising the systems that are most critical to production and most difficult to support.",
    coversLabel: "Typical requests",
    covers: [
      "MicroLogix 1000, 1100, 1200, 1400 and 1500 controllers",
      "SLC 500 processors (1747) and I/O modules (1746)",
      "PLC-5 processors (1785) and I/O (1771)",
      "Power supplies, chassis and communication modules",
      "Memory and real-time clock modules",
    ],
    highlights: [
      {
        title: "Legacy platforms",
        body: "These are well-established systems, and some parts are no longer sold new, so availability can depend on surplus or refurbished stock. Sourcing a spare is often easier than planning a migration at the moment of failure.",
      },
      {
        title: "Software for older systems",
        body: "MicroLogix and SLC 500 controllers are normally programmed with RSLogix 500. Keep a backup of the program and the software version in use.",
      },
    ],
    faqs: [
      {
        q: "Should I upgrade or just replace the failed part?",
        a: "It depends on how many parts are ageing and how critical the machine is. Our guide on obsolescence planning sets out the options, and an engineer can advise on yours.",
      },
      {
        q: "What software do I use to program a MicroLogix 1100?",
        a: "RSLogix 5000 for the 1100, or RSLogix 500 for the older 1000. Send the catalogue number to confirm.",
      },
      {
        q: "Can I get a MicroLogix with my program pre-loaded?",
        a: "We can help with programming and loading. Send the backup and the catalogue number for advice.",
      },
      {
        q: "Do you supply 1747 SLC 500 processors?",
        a: "Yes. Send the catalogue number such as 1747-L542 and we will check availability.",
      },
      {
        q: "What power supply does an SLC 500 rack need?",
        a: "It depends on the modules fitted. Send the list of modules and we can recommend the right supply.",
      },
      {
        q: "My SLC 500 shows a fault. How do I read the code?",
        a: "The fault code is on the front panel and in RSLogix 500. Send us the code and the catalogue number for advice.",
      },
      {
        q: "Can I expand an SLC 500 with more I/O?",
        a: "Yes, with the right modules and possibly a larger power supply or additional chassis. Send your configuration for advice.",
      },
      {
        q: "What is the difference between MicroLogix and SLC 500?",
        a: "MicroLogix is the smaller integrated controller range. SLC 500 is modular with separate processors, racks and I/O. Send the catalogue number to confirm which you have.",
      },
      {
        q: "Do you supply memory modules for SLC 500?",
        a: "Yes, such as the 1747-M13. These hold the program. Send the catalogue number to match.",
      },
      {
        q: "Are MicroLogix 1000 controllers still available?",
        a: "Availability varies as they are mature products. Send the catalogue number and we will check what we can source.",
      },
    ],
    formBrand: "Allen-Bradley",
    leadTopic: "MicroLogix / SLC 500",
  },
  {
    slug: "allen-bradley-powerflex-drives",
    kind: "series",
    name: "Allen-Bradley PowerFlex drives",
    title: "Allen-Bradley PowerFlex Drive Spares in South Africa",
    description:
      "Allen-Bradley PowerFlex drive spares and replacements: PowerFlex 4, 40, 70, 700, 523, 525 and 750-series. Send the catalogue number from the drive.",
    h1: "Allen-Bradley PowerFlex drive spares",
    intro:
      "PowerFlex AC drives from compact to high-performance. Send the catalogue number from the drive label and the motor nameplate.",
    content:
      "The PowerFlex family is Rockwell Automation's comprehensive range of AC variable frequency drives, covering applications from simple fan and pump control through to complex multi-axis motion control. The catalogue number prefix identifies the family: 22A and 22B for the compact PowerFlex 4 and 40, 20A and 20B for the PowerFlex 70 and 700, 25A and 25B for the PowerFlex 523 and 525, and 20F and 20G for the PowerFlex 750-series. This systematic naming allows engineers to identify the drive family from the part number alone, which helps when sourcing replacements or specifying spares.\n\nThe PowerFlex 523 and 525 are among the most popular drives in the South African market, offering a balance of features, compactness and cost that suits a wide range of industrial applications. The 525 adds embedded safety and greater application flexibility compared to the 523, while both share the same programming interface and parameter structure. The PowerFlex 750-series represents the high end of the range, with modular communication and I/O options that plug into the drive's ports, allowing the drive to be configured precisely to the application. On these drives, the catalogue number encodes not just the power rating and voltage class but also the enclosure type, filter configuration and any factory-fitted options.\n\nA significant advantage of the PowerFlex range is parameter portability. Drives can be configured using DriveExecutive or Connected Components Workbench, and the parameter file can be saved and transferred to a replacement drive to restore full functionality quickly. This is especially valuable during unplanned outages on production-critical equipment. For older PowerFlex 4 and 40 drives that are no longer in production, the surplus and refurbished market remains active in South Africa, and many units continue to provide reliable service when properly tested and refurbished.",
    coversLabel: "Typical PowerFlex requests",
    covers: [
      "PowerFlex 4 and 40 (catalogue numbers starting 22A, 22B)",
      "PowerFlex 70 and 700 (20A, 20B)",
      "PowerFlex 523 and 525 (25A, 25B)",
      "PowerFlex 750-series (20F, 20G)",
      "Communication cards, keypads and option modules",
    ],
    highlights: [
      {
        title: "The prefix identifies the family",
        body: "The first three characters of the catalogue number tell you which PowerFlex family you have, which decides what options and parts fit.",
      },
      {
        title: "Options and ports",
        body: "On the 750-series, communication and I/O options sit in the drive's ports. List them with the label so we can match them.",
      },
    ],
    faqs: [
      {
        q: "What do you need to quote a PowerFlex drive?",
        a: "The catalogue number from the drive label, the motor nameplate, and any option modules fitted.",
      },
      {
        q: "What is the difference between PowerFlex 4 and PowerFlex 40?",
        a: "The 40 is a more advanced drive with more features and a higher power range. Send the catalogue number to confirm which you have.",
      },
      {
        q: "Can I add a communication card to a PowerFlex?",
        a: "Yes, on supported models. The card fits in a slot on the drive. Send the catalogue number and we will check options.",
      },
      {
        q: "How do I back up PowerFlex parameters?",
        a: "Use DriveExecutive or the keypad to save parameters to a file or the memory card. This speeds up commissioning a replacement.",
      },
      {
        q: "My PowerFlex is tripping on overcurrent. What now?",
        a: "Check the motor and cable, then the load. If the drive is suspect, send the catalogue number and the fault code for advice.",
      },
      {
        q: "Do you supply PowerFlex keypads?",
        a: "Yes, for the families that support them. Send the catalogue number to match the correct keypad.",
      },
      {
        q: "What is a 20F code in a PowerFlex part number?",
        a: "It indicates the PowerFlex 750-series family. Send the full catalogue number for a precise match.",
      },
      {
        q: "Can a PowerFlex 700 replace a PowerFlex 40?",
        a: "Often yes, but the wiring and parameters differ. Send both catalogue numbers and our engineers can advise.",
      },
      {
        q: "Do you stock PowerFlex braking resistors?",
        a: "Yes, for the applicable families. Send the catalogue number and we will match the right resistor.",
      },
      {
        q: "What warranty do you offer on PowerFlex parts?",
        a: "New parts carry the manufacturer's warranty. Refurbished and surplus parts carry our own warranty. Ask for the terms when you order.",
      },
    ],
    formBrand: "Allen-Bradley",
    leadTopic: "PowerFlex",
  },
  {
    slug: "delta-dvp-as-plc-spares",
    kind: "series",
    name: "Delta DVP & AS PLCs",
    title: "Delta DVP and AS PLC Spares in South Africa",
    description:
      "Delta DVP and AS series PLC spares: controllers, expansion modules, DOP HMI panels and communication cards.",
    h1: "Delta DVP and AS PLC spares",
    intro:
      "Delta controllers are common on OEM machines. Send the model name from the label, including the suffix letters.",
    content:
      "Delta Electronics has established a strong presence in the South African automation market through its cost-effective DVP series PLCs, which are widely used by machine builders and OEMs who need reliable control without the premium pricing of European or American brands. The DVP family covers the range from the compact SS2 series for small machines through the capable ES2, EX2, SX2 and EH3 controllers to the motion-oriented SV2. Each model is available in multiple output configurations indicated by suffix letters, typically R for relay outputs and T for transistor outputs, and matching the suffix correctly is essential when ordering a replacement controller.\n\nThe AS series represents Delta's higher-performance option, offering faster processing, greater memory capacity and enhanced communication features for applications that have outgrown the DVP range. Both families are programmed using ISPSoft, Delta's integrated programming environment that supports ladder logic, structured text and function block diagramming. The AS series also supports a wider range of communication protocols, making it suitable for distributed I/O architectures and integration with Delta's own VFD drives over Modbus, a combination that is extremely common in South African machinery.\n\nThe DOP series HMI panels from Delta provide operator interface capabilities that pair naturally with DVP and AS controllers, offering touch-screen functionality at a competitive price point. The widespread use of Delta equipment in locally manufactured machinery means that familiarity with DVP programming and troubleshooting is well established among South African automation technicians. For maintenance teams, the most common failure points on DVP systems are the power supply terminals and the output devices themselves, particularly relay outputs that switch high inrush loads, so keeping a spare controller and a couple of I/O modules on the shelf is a practical strategy.",
    coversLabel: "Typical Delta PLC requests",
    covers: [
      "DVP-SS2, SA2, SX2, ES2, EX2, EH3 and SV2 controllers",
      "AS series controllers",
      "Expansion I/O and analogue modules",
      "DOP series HMI panels",
      "Communication cards and cables",
    ],
    highlights: [
      {
        title: "Suffix letters matter",
        body: "On many DVP models a trailing R means relay outputs and T means transistor outputs. Ordering the wrong one is a common mistake.",
      },
      {
        title: "Programming software",
        body: "DVP and AS controllers are programmed with Delta software such as ISPSoft, with WPLSoft used on older DVP. Keep your backup and software version.",
      },
    ],
    faqs: [
      {
        q: "How do I tell relay from transistor output models?",
        a: "Check the full model name on the label. A trailing R or T usually indicates the output type. Send the full name and we will check.",
      },
      {
        q: "What software programs the DVP-ES2?",
        a: "ISPSoft for the ES2 and newer. Older DVP models used WPLSoft. Send the model to confirm.",
      },
      {
        q: "Can I add expansion modules to a DVP-14SS2?",
        a: "Yes, up to the limit of the CPU. Check the manual for the maximum number and types. Send your CPU model for advice.",
      },
      {
        q: "My DVP will not run. What should I check?",
        a: "Check the 24 V supply, the RUN/STOP switch and the error code on the display. Send us the model and the code for advice.",
      },
      {
        q: "What is the difference between DVP-EX2 and DVP-EH3?",
        a: "The EH3 is the high-end model with more I/O and features. Send the full model name to confirm which you have.",
      },
      {
        q: "Do you supply DOP HMI panels?",
        a: "Yes. Send the DOP model number and we will check availability.",
      },
      {
        q: "Can I connect a Delta VFD to a DVP PLC?",
        a: "Yes, typically over Modbus RTU. Send both model numbers and we can advise on wiring and settings.",
      },
      {
        q: "What communication options does the AS series have?",
        a: "The AS series supports various communication modules and protocols. Send the model number for details.",
      },
      {
        q: "How do I load a program into a replacement DVP?",
        a: "Use the Delta software with your backup file. Send the model and we can advise on the connection cable.",
      },
      {
        q: "What warranty do you offer on Delta PLC parts?",
        a: "New parts carry the manufacturer's warranty. Refurbished and surplus parts carry our own warranty. Ask for the terms when you order.",
      },
    ],
    formBrand: "Delta",
    leadTopic: "Delta PLC",
  },
  {
    slug: "delta-vfd-drives",
    kind: "series",
    name: "Delta VFD drives",
    title: "Delta VFD Drive Spares in South Africa: EL, MS300, C2000 and More",
    description:
      "Delta VFD drive spares and replacements: VFD-EL, VFD-E, VFD-B, VFD-M, MS300, C2000 and CP2000. Send the model code from the drive.",
    h1: "Delta VFD drive spares",
    intro:
      "Delta AC drives for pumps, fans, conveyors and machines. Send the full model code from the drive label and the motor nameplate.",
    content:
      "Delta Electronics offers one of the broadest ranges of variable frequency drives on the market, with families targeting every segment from simple single-phase pumps to complex multi-motor process applications. The model code system is straightforward once understood: the digits after VFD encode the power rating, the following letters indicate the family, and the trailing digits describe the supply voltage class, with 43 typically denoting three-phase 400 V and 21 indicating single-phase 230 V. This coding allows accurate identification of a drive from its label even when documentation has been lost.\n\nThe VFD-EL and VFD-E families target simple pump and fan applications where basic speed control is sufficient, while the VFD-B and VFD-M offer more features for general industrial use. The MS300 is a compact current-source drive popular in OEM machinery, and the C2000 and CP2000 families provide advanced vector control for demanding applications such as cranes, hoists and extruders. Across the range, Delta drives offer strong communication capabilities including Modbus RTU as standard, with optional cards for CANopen, PROFIBUS and EtherNet/IP, making them easy to integrate into both standalone machines and larger control systems.\n\nThe widespread use of Delta VFDs in South African industry means that local technicians are generally familiar with the parameter structure and keypad operation, which simplifies maintenance and troubleshooting. Common failure modes on ageing drives include DC bus capacitor degradation, which manifests as overvoltage trips or erratic behaviour, and IGBT module failure, which usually results in immediate overcurrent trips. For older models that are no longer in production, such as the VFD-M and early VFD-B, the surplus and refurbished market provides a practical route to keeping equipment running.",
    coversLabel: "Typical Delta drive requests",
    covers: [
      "VFD-EL, VFD-E, VFD-B, VFD-M and VFD-S drives",
      "MS300 compact drives",
      "C2000 and CP2000 drives",
      "Keypads, communication cards and EMI filters",
      "Braking resistors and reactors",
    ],
    highlights: [
      {
        title: "Read the model code",
        body: "A code such as VFD022EL43A encodes the power rating and supply class. Typically 43 indicates a three-phase 400 V class and 21 a single-phase 230 V class. Send the full code and we will check.",
      },
      {
        title: "Keypads and options",
        body: "A drive that appears faulty may only need a keypad or card. Tell us what is showing on the display.",
      },
    ],
    faqs: [
      {
        q: "Can you match a discontinued Delta drive?",
        a: "Send the model code. We will check availability and, if it is no longer sold, suggest a replacement and what changes in wiring or parameters.",
      },
      {
        q: "What does the model code VFD022EL43A mean?",
        a: "022 is the power rating, EL is the family, and 43 indicates a three-phase 400 V class. Send the full code and we will confirm.",
      },
      {
        q: "Can I replace a VFD-EL with a newer drive?",
        a: "Often yes, but check the power rating and the motor. Send both model numbers and we will advise.",
      },
      {
        q: "My VFD is showing an overvoltage fault. What now?",
        a: "Check the supply and the load. A braking resistor may be needed for high-inertia loads. Send the model and we will advise.",
      },
      {
        q: "Do you supply keypads for Delta VFDs?",
        a: "Yes, for the families that support them. Send the model to match the right keypad.",
      },
      {
        q: "Can I connect a Delta VFD to a PLC?",
        a: "Yes, typically over Modbus RTU or similar. Send the VFD model and the PLC model for wiring advice.",
      },
      {
        q: "What is the difference between VFD-B and VFD-M?",
        a: "The B is the more feature-rich general-purpose drive. The M is the compact economy model. Send the code to confirm.",
      },
      {
        q: "Do you supply communication cards for Delta VFDs?",
        a: "Yes, for the families that support them. Send the model number for options.",
      },
      {
        q: "How do I know if my drive needs a braking resistor?",
        a: "If the load has high inertia or requires fast stopping, a resistor helps absorb the energy. Ask for advice with your model.",
      },
      {
        q: "What warranty do you offer on Delta VFD parts?",
        a: "New parts carry the manufacturer's warranty. Refurbished and surplus parts carry our own warranty. Ask for the terms when you order.",
      },
    ],
    formBrand: "Delta",
    leadTopic: "Delta VFD",
  },
  {
    slug: "schneider-modicon-plc-spares",
    kind: "series",
    name: "Schneider Modicon PLCs",
    title: "Schneider Electric Modicon PLC Spares in South Africa: M221, M241, M340, M580",
    description:
      "Schneider Electric Modicon PLC spares: M221, M241, M251, M340, M580, Quantum and Premium. Controllers, I/O, racks and power supplies.",
    h1: "Schneider Modicon PLC spares",
    intro:
      "Modicon controllers from compact machine PLCs to larger process systems. Send the reference printed on the module.",
    content:
      "The Modicon brand is one of the most respected names in industrial automation, with a history stretching back to the invention of the PLC in 1968. Today's Modicon range spans the compact M221 for simple machine control, the more capable M241 and M251 for mid-range applications, the modular M340 for distributed I/O architectures and the high-performance M580 for large process systems. Each family uses its own programming environment: EcoStruxure Machine Expert - Basic for the M221, EcoStruxure Machine Expert for the M241 and M251, and EcoStruxure Control Expert for the M340 and M580. This software separation means that the programming knowledge required differs significantly between the compact and process ranges.\n\nThe M340 and M580 platforms are designed for modular, rack-based installations with distributed I/O over Ethernet, making them well suited to water treatment, mining and large manufacturing plants. The M580 in particular offers advanced redundancy capabilities and high-availability architectures that are essential for continuous process industries. Schneider's legacy Modicon Quantum and Premium families, identifiable by their 140-series and TSX-series references, remain installed in significant numbers across South African industry, particularly in mining and minerals processing where these platforms were heavily specified during the 1990s and 2000s.\n\nFor the legacy Quantum and Premium families, availability of new parts is increasingly limited as Schneider focuses on its current platforms. However, the installed base is large enough that a substantial surplus and refurbished market exists, and many modules remain available through specialist suppliers. For plants running these legacy systems, the combination of EcoStruxure Control Expert programming, the established installed base and Schneider's ongoing support for spares means that maintaining these systems remains practical, though a long-term migration strategy should be considered for the most critical applications.",
    coversLabel: "Typical Modicon requests",
    covers: [
      "Modicon M221, M241 and M251 controllers (TM221, TM241, TM251)",
      "TM3 expansion modules",
      "Modicon M340 CPUs and modules (BMX)",
      "Modicon M580 CPUs and modules (BME)",
      "Legacy Quantum (140) and Premium (TSX) modules",
    ],
    highlights: [
      {
        title: "Different software per family",
        body: "The M221 uses EcoStruxure Machine Expert - Basic, formerly SoMachine Basic. M241 and M251 use EcoStruxure Machine Expert. M340 and M580 use EcoStruxure Control Expert, formerly Unity Pro. Tell us which you use.",
      },
      {
        title: "Legacy modules",
        body: "Quantum and Premium systems are long-established. Send the reference and we will check what is available.",
      },
    ],
    faqs: [
      {
        q: "What do you need to identify a Modicon module?",
        a: "The full reference printed on the module, for example TM221CE24R or BMXP342020, plus a photo of the label.",
      },
      {
        q: "What is the difference between M221 and M241?",
        a: "The M241 is the more powerful option with more I/O and communication options. Send the reference to confirm which you have.",
      },
      {
        q: "Can I use TM3 modules with an M241?",
        a: "Yes, the TM3 expansion modules work with supported Modicon controllers. Check the compatibility list or send the reference.",
      },
      {
        q: "My M340 will not run. What should I check?",
        a: "Check the power supply, the CPU status LEDs and the error code. Send the reference and the code for advice.",
      },
      {
        q: "Do you supply BMX I/O modules?",
        a: "Yes. Send the reference such as BMXDDI1602 and we will check availability.",
      },
      {
        q: "What software programs the M580?",
        a: "EcoStruxure Control Expert, formerly Unity Pro. The project file is needed for the program.",
      },
      {
        q: "Can I replace a Quantum 140 CPU?",
        a: "Yes, availability varies. Send the reference such as 140CPU65160 and we will check.",
      },
      {
        q: "What is the difference between Quantum and Premium?",
        a: "Both are legacy Modicon ranges with different hardware and software. Send the reference to confirm which you have.",
      },
      {
        q: "Do you supply Modicon racks and power supplies?",
        a: "Yes, such as the 140 XBP 01000 rack and matching power supplies. Send the reference for your configuration.",
      },
      {
        q: "What warranty do you offer on Modicon parts?",
        a: "New parts carry the manufacturer's warranty. Refurbished and surplus parts carry our own warranty. Ask for the terms when you order.",
      },
    ],
    formBrand: "Schneider",
    leadTopic: "Modicon PLC",
  },
  {
    slug: "schneider-altivar-drives",
    kind: "series",
    name: "Schneider Altivar drives",
    title: "Schneider Electric Altivar Drive Spares in South Africa: ATV320, ATV340, ATV600",
    description:
      "Schneider Electric Altivar drive spares and replacements: ATV12, ATV312, ATV320, ATV340, ATV600 and ATV900. Send the reference from the drive.",
    h1: "Schneider Altivar drive spares",
    intro:
      "Altivar variable speed drives for machines and process plants. Send the full reference from the drive label and the motor nameplate.",
    content:
      "The Altivar family encompasses Schneider Electric's full range of variable speed drives, divided into the Altivar Machine range for OEM and general industrial applications and the Altivar Process range for continuous process industries. The ATV320 and ATV340 serve the machine segment, offering compact form factors, integrated communication and application-specific functions such as hoist, conveyor and pump control. The ATV600 and ATV900 process drives are designed for the demanding requirements of water, mining, oil and gas and metals applications, with advanced control algorithms, process-specific function blocks and support for redundancy configurations.\n\nThe ATV320 is the direct successor to the very widely installed ATV312, which dominated the small drive market through the 2000s and remains extremely common in South African plants. While the ATV320 can often replace an ATV312 in an existing installation, the wiring configurations, parameter sets and mechanical dimensions differ, so a like-for-like swap without engineering review is not advisable. Schneider provides migration guides for the ATV312 to ATV320 transition, and these should be consulted before attempting a replacement. The ATV12 remains available for the simplest applications where only basic speed control is required.\n\nAltivar drives support a comprehensive range of communication options, with Modbus and CANopen integrated as standard on most models and optional cards available for EtherNet/IP, PROFIBUS DP, PROFINET and other industrial networks. This communication flexibility makes Altivar drives well suited for integration into larger control systems and SCADA environments. The parameter structure across the Altivar range is consistent in concept, so technicians familiar with one model can generally commission another, though the specific parameter assignments and application functions differ between the Machine and Process families.",
    coversLabel: "Typical Altivar requests",
    covers: [
      "Altivar Machine drives (ATV320, ATV340)",
      "Altivar Process drives (ATV600, ATV900 families)",
      "Altivar 12 and the older Altivar 312",
      "Communication cards, keypads and EMC filters",
      "Braking resistors and line chokes",
    ],
    highlights: [
      {
        title: "Successor products",
        body: "The ATV320 succeeded the older ATV312. Wiring and parameters differ, so we confirm the details before suggesting a replacement.",
      },
      {
        title: "Options change the reference",
        body: "A drive's reference can encode its voltage, enclosure and options. Send the whole string.",
      },
    ],
    faqs: [
      {
        q: "Can you help move from an ATV312 to a newer drive?",
        a: "We can quote the replacement. Send the label and the motor nameplate. Our engineers can advise on wiring and parameter differences and help commission the new drive.",
      },
      {
        q: "What is the difference between ATV320 and ATV340?",
        a: "The ATV340 is a higher-performance machine drive with more features. Send the reference to confirm.",
      },
      {
        q: "Can I replace an ATV312 with an ATV320?",
        a: "Often yes, but the wiring and parameters differ. Send both references and our engineers can advise on the changeover.",
      },
      {
        q: "My ATV600 is showing a fault. What now?",
        a: "Note the fault code on the display and check the manual. Send the reference and the code for advice.",
      },
      {
        q: "Do you supply communication cards for Altivar drives?",
        a: "Yes, for the families that support them. Send the reference for options.",
      },
      {
        q: "What is the difference between ATV600 and ATV900?",
        a: "The ATV900 is the process drive range for larger applications. Send the reference to confirm.",
      },
      {
        q: "How do I back up Altivar parameters?",
        a: "Use the keypad or a PC tool to save the parameter file. This helps when commissioning a replacement.",
      },
      {
        q: "Do you supply Altivar keypads?",
        a: "Yes, for the families that support them. Send the reference to match.",
      },
      {
        q: "Can I use a line reactor with an Altivar?",
        a: "Yes, recommended on some supplies to reduce harmonics. Send the reference and supply details for advice.",
      },
      {
        q: "What warranty do you offer on Altivar parts?",
        a: "New parts carry the manufacturer's warranty. Refurbished and surplus parts carry our own warranty. Ask for the terms when you order.",
      },
    ],
    formBrand: "Schneider",
    leadTopic: "Altivar",
  },
];
