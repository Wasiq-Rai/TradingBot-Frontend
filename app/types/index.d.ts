export interface Units {
    AAPL: Unit;
    mAAPL: Unit;
    µAAPL: Unit;
    Sats: Unit;
  }
  
  export type KeysProps = keys<Units>;
  
  type Unit = number[];
  
  export type UnitStates = "AAPL" | "mAAPL" | "µAAPL" | "Sats";