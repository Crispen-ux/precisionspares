export type Term = { term: string; def: string; see?: string[] };

/** Plain-language definitions. Kept short so each can stand alone in search results. */
export const glossary: Term[] = [
  { term: "4–20 mA loop", def: "An analogue signalling standard where a current between 4 and 20 mA represents a measured value. 4 mA is the bottom of the range and 20 mA the top, so a reading of 0 mA signals a fault such as a broken wire.", see: ["Analogue input", "NAMUR NE 43"] },
  { term: "Analogue input", def: "A PLC input that reads a continuously varying signal, usually 0–10 V or 4–20 mA, from a sensor such as a pressure or temperature transmitter." },
  { term: "Backplane", def: "The bus inside a rack or chassis that connects the modules to each other and to the controller, carrying power and data between them." },
  { term: "Braking resistor", def: "A resistor connected to a drive that dissipates the energy a motor feeds back when it slows a high-inertia load quickly, preventing DC bus overvoltage trips.", see: ["DC bus", "Variable frequency drive"] },
  { term: "Catalogue number", def: "The manufacturer's code that identifies one specific product variant. Allen-Bradley uses this term, for example 1756-L71. Siemens calls it an order number or MLFB.", see: ["Order number", "MLFB"] },
  { term: "Circuit breaker", def: "A protective device that automatically interrupts current when it exceeds a set level. Miniature (MCB) and moulded-case (MCCB) breakers protect cables and equipment from overload and short circuit." },
  { term: "Commissioning", def: "Testing and adjusting new or replaced equipment so it runs correctly in the plant, including checking wiring, setting parameters and proving the control sequence." },
  { term: "Constant torque load", def: "A load, such as a conveyor or crusher, that needs roughly the same torque at all speeds. These need drives sized for heavy duty. Compare with variable torque loads such as fans and pumps.", see: ["Variable torque load"] },
  { term: "Contactor", def: "An electrically operated switch used to start and stop motors and other heavy loads. A small control signal on the coil switches a much larger current." },
  { term: "Control Unit", def: "In modular drives such as the Siemens SINAMICS G120, the part that holds the control logic, I/O and communication, separate from the Power Module that handles the motor current." },
  { term: "CPU", def: "The central processing unit of a PLC. It runs the user program, reads inputs, writes outputs and handles communication." },
  { term: "DC bus", def: "The internal DC link inside a variable frequency drive, between the rectifier and the inverter. Its voltage rises when a motor regenerates energy, which can cause an overvoltage trip." },
  { term: "Derating", def: "Reducing the allowed output of a device in demanding conditions such as high temperature or altitude. Drives and power supplies are commonly derated above their rated ambient temperature and above about 1000 m altitude." },
  { term: "Digital input / output", def: "A PLC channel that reads or switches a simple on/off signal, for example a limit switch input or a contactor coil output." },
  { term: "DIN rail", def: "A standardised metal rail, usually 35 mm wide, on which control panel components such as terminals, relays, breakers and power supplies are clipped." },
  { term: "Direct on line (DOL) starter", def: "The simplest motor starter, where the motor is connected straight to the supply through a contactor. It draws a high starting current, typically six to eight times full-load current.", see: ["Soft starter", "Star-delta starter"] },
  { term: "Discontinued", def: "A manufacturer status meaning a product is no longer made or sold. Spares may still exist in the market, and an upgrade path is normally published.", see: ["Obsolescence"] },
  { term: "Drop-in replacement", def: "A replacement part that fits and works without any changes to wiring, mounting or the program." },
  { term: "Earth fault", def: "An unwanted current path from a live conductor to earth. On a drive it commonly points to damaged motor cable or motor insulation." },
  { term: "EMC filter", def: "A filter fitted to a drive to reduce electrical noise (electromagnetic interference) conducted back to the supply or radiated by the motor cable." },
  { term: "Encoder", def: "A sensor that reports the position or speed of a shaft, used for closed-loop speed control and positioning with servos and drives." },
  { term: "EtherNet/IP", def: "An industrial network protocol that carries the Common Industrial Protocol over standard Ethernet. Widely used with Allen-Bradley and Rockwell Automation systems." },
  { term: "Fault finding", def: "Systematically diagnosing why a machine or control system is not working, to identify the actual cause rather than just replacing parts.", see: ["Commissioning"] },
  { term: "Fieldbus", def: "A digital communication network connecting controllers to field devices such as drives, sensors and remote I/O. PROFIBUS and Modbus RTU are examples." },
  { term: "Firmware", def: "The embedded software inside a device such as a PLC CPU or drive. Firmware version affects compatibility with engineering software and with replacement parts." },
  { term: "Full-load current (FLC)", def: "The current a motor draws when delivering its rated power at rated voltage. It is printed on the nameplate and is the figure used to size drives, starters and overloads." },
  { term: "Function block diagram (FBD)", def: "A graphical PLC programming language where functions are drawn as connected blocks. One of the languages defined in IEC 61131-3.", see: ["Ladder logic", "Structured text"] },
  { term: "HMI", def: "Human-machine interface. A screen or panel where operators see the state of a machine or process, change setpoints and acknowledge alarms." },
  { term: "IE efficiency class", def: "A classification of motor efficiency defined in IEC 60034-30-1, from IE1 (standard) up to IE4 (super premium)." },
  { term: "Insulation resistance test", def: "A test, often called a megger test, that measures the resistance of motor or cable insulation to earth. It should be done with the drive disconnected, because the test voltage can damage drive electronics." },
  { term: "IP rating", def: "A two-digit code from IEC 60529 describing protection against solids (first digit) and water (second digit). IP65 is dust-tight and protected against water jets.", see: ["Ingress protection"] },
  { term: "I/O module", def: "A PLC module that provides inputs and outputs, either digital or analogue, connecting the controller to field devices." },
  { term: "Ladder logic", def: "A graphical PLC programming language that resembles electrical relay diagrams. One of the languages defined in IEC 61131-3.", see: ["Function block diagram", "Structured text"] },
  { term: "Last-time buy", def: "A final opportunity to order a product before it is discontinued, usually announced by the manufacturer. Used to stock spares for the remaining life of an installation." },
  { term: "Line reactor", def: "An inductor fitted on the supply side of a drive to reduce harmonic currents and protect the drive from supply spikes." },
  { term: "Lifecycle status", def: "A manufacturer's classification of where a product is in its life, commonly active, phase-out and discontinued. Names differ between brands." },
  { term: "Load shedding", def: "Planned interruption of electricity supply to reduce demand. For control systems, the risk is mostly at power restoration, when surges and dips can damage equipment." },
  { term: "Megger", def: "An instrument that measures insulation resistance using a high test voltage. See insulation resistance test." },
  { term: "MLFB", def: "The Siemens machine-readable product designation, better known as the order number, for example 6ES7 313-5BG04-0AB0.", see: ["Order number"] },
  { term: "Modbus", def: "A simple, widely supported communication protocol. Modbus RTU runs over serial RS-485 and Modbus TCP runs over Ethernet." },
  { term: "Motor protection circuit breaker", def: "A breaker designed to protect a motor and its cable against overload and short circuit, often combining the functions of a fuse and an overload relay." },
  { term: "NAMUR NE 43", def: "A standard that defines how analogue transmitters signal faults. Currents below 3.6 mA or above 21 mA indicate a fault, and 3.8 to 20.5 mA is the valid measuring range." },
  { term: "Nameplate", def: "The label on a motor, drive or module that lists its ratings and identification numbers. The most useful starting point when ordering a replacement." },
  { term: "Obsolescence", def: "When a component can no longer be bought new from the manufacturer. Obsolescence planning means identifying these parts early and deciding between stocking spares and upgrading." },
  { term: "Order number", def: "The manufacturer's code for a specific product variant. Siemens calls it the order number or MLFB. Quote the full number, including version blocks, when asking for a replacement.", see: ["Catalogue number", "MLFB"] },
  { term: "Overload relay", def: "A device that protects a motor from sustained overcurrent by tripping a contactor. Thermal overloads use a heating element, electronic ones measure current." },
  { term: "PID control", def: "Proportional-integral-derivative control, a feedback method used to hold a process value such as temperature or pressure at a setpoint." },
  { term: "PLC", def: "Programmable logic controller. A rugged industrial computer that reads inputs, runs a program and drives outputs to control machines and processes." },
  { term: "Power Module", def: "In modular drives, the part that contains the power electronics and connects to the motor and supply. It is paired with a Control Unit." },
  { term: "Power factor", def: "The ratio of real power to apparent power in an AC circuit. Motors typically run at a power factor of 0.8 to 0.9 at full load." },
  { term: "PROFIBUS", def: "A long-established fieldbus standard, widely used with Siemens systems. Cabled with a dedicated shielded cable and terminated at each end." },
  { term: "PROFINET", def: "An industrial Ethernet standard from the PROFIBUS organisation, used with Siemens and many other systems for real-time control and diagnostics." },
  { term: "Redundant power supply", def: "Two power supplies connected through a redundancy module so that one can fail without interrupting the 24 V rail." },
  { term: "Retrofit", def: "Upgrading part of an existing installation with newer equipment, often replacing an obsolete controller or drive while keeping the rest of the system." },
  { term: "SCADA", def: "Supervisory control and data acquisition. Software that monitors and controls a plant or process, collecting data from many PLCs and presenting it to operators." },
  { term: "Service factor", def: "A multiplier on a motor's rated power that indicates how much overload it can tolerate continuously. A service factor of 1.0 means no allowance for overload." },
  { term: "Servo drive", def: "A drive that controls a servo motor with precise closed-loop control of position, speed and torque, using feedback from an encoder." },
  { term: "Soft starter", def: "A device that ramps up the voltage to a motor at start, reducing starting current and mechanical shock. Unlike a drive, it does not control speed while running.", see: ["Direct on line starter", "Variable frequency drive"] },
  { term: "Star-delta starter", def: "A starter that connects the motor windings in star for starting and then in delta for running, reducing starting current to about a third of direct on line." },
  { term: "Structured text (ST)", def: "A text-based PLC programming language, similar to Pascal. One of the languages defined in IEC 61131-3." },
  { term: "Surge protective device (SPD)", def: "A device that diverts voltage surges, from lightning or switching, away from sensitive equipment. Fitted at the incoming supply and, in stages, closer to the equipment." },
  { term: "Synchronous speed", def: "The speed of the rotating magnetic field in an AC motor, equal to 120 × frequency ÷ poles. At 50 Hz it is 1500 rpm for a four-pole motor." },
  { term: "TIA Portal", def: "The Siemens engineering software used to configure and program S7-1200 and S7-1500 PLCs, HMIs and drives." },
  { term: "Variable frequency drive (VFD)", def: "A drive that controls an AC motor's speed and torque by varying the frequency and voltage it supplies. Also called a variable speed drive or inverter." },
  { term: "Variable torque load", def: "A load, such as a centrifugal fan or pump, whose torque demand falls sharply at lower speed. These can often use a drive's normal-duty rating.", see: ["Constant torque load"] },
  { term: "Watchdog", def: "A timer in a controller that detects if the program has stopped running normally and forces a safe state or restart." },
];

export const glossaryByLetter = () => {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term, "en", { sensitivity: "base" }));
  const map = new Map<string, Term[]>();
  for (const t of sorted) {
    const first = t.term.match(/[A-Za-z0-9]/)?.[0]?.toUpperCase() ?? "#";
    const k = /[0-9]/.test(first) ? "#" : first;
    map.set(k, [...(map.get(k) ?? []), t]);
  }
  return [...map.entries()];
};

export const termId = (t: string) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
