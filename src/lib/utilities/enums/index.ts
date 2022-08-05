type IEnum = {
  [key: number]: String;
};

// Signal
export const signalOptions: IEnum = {
  1: "Open",
  2: "InProgress",
  3: "Achieved",
  4: "Failed",
};

export const signalAccessModifierOptions: IEnum = {
  1: "Public",
  2: "Private",
};

// Advertisement
export const AdvertisementOptions: IEnum = {
  1: "Local",
  2: "Foreign",
  3: "both",
};

// Notification
export const NotificationLevelOptions: IEnum = {
  1: "Warning",
  2: "Critical",
  3: "Information",
  4: "Error",
};

export const NotificationStatusOptions: IEnum = {
  1: "Pending",
  2: "Viewed",
};

// Modal Sizes
export const modalSizesEnum: IEnum = {
  1: "modal-sm",
  2: "",
  3: "modal-lg",
  4: "modal-xl",
};

// User Role
export const roleEnum: IEnum = {
  1: "Viewer",
  2: "Trader",
  3: "Super Admin",
};

type IEnumBreakPoint = {
  [key: string]: number;
};

// Break Points
export const breakPoints: IEnumBreakPoint = {
  xSmall: 576,
  Medium: 768,
};
