import type { ComponentType } from "react";
import { MotorCurrentCalculator } from "./MotorCurrentCalculator";
import { KwHpConverter } from "./KwHpConverter";
import { Scaling4to20 } from "./Scaling4to20";
import { DowntimeCalculator } from "./DowntimeCalculator";
import { IpDecoder } from "./IpDecoder";
import { PartIdentifier } from "./PartIdentifier";
import { MotorSpeedPoles } from "./MotorSpeedPoles";
import { PowerSupplySizing } from "./PowerSupplySizing";
import { ObsolescenceRisk } from "./ObsolescenceRisk";

export const toolComponents: Record<string, ComponentType> = {
  "motor-current-calculator": MotorCurrentCalculator,
  "kw-to-hp-converter": KwHpConverter,
  "4-20ma-scaling-calculator": Scaling4to20,
  "downtime-cost-calculator": DowntimeCalculator,
  "ip-rating-decoder": IpDecoder,
  "part-number-identifier": PartIdentifier,
  "motor-speed-poles-calculator": MotorSpeedPoles,
  "power-supply-sizing-calculator": PowerSupplySizing,
  "obsolescence-risk-assessment": ObsolescenceRisk,
};
