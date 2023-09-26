// user roles
export const ADMIN = 'admin';
export const CUSTOMER = 'customer';
export const PRODUCT_MANAGER = 'manager';
export const OPERATION_ASSISTANT = 'assistant';
export const TAILOR = 'tailor';

// user status
export const ACTIVE = 'ACTIVE';

// authSlice statuses
export const IDLE = 'idle';
export const LOADING = 'loading';
export const ERROR = 'error';
export const SIGNUP_SUCCESS = 'signup-success';

// costume types
export const JACKET = 'jacket';
export const PANT = 'pant';

// material types
export const FABRIC_SOLID = 'fabric-solid';
export const FABRIC_PATTERN = 'fabric-pattern';
export const BUTTON = 'button';

// design types
export const PRE_DESIGNED = 'pre-designed';
export const CUSTOMIZED = 'customized';

// measurement types
export const STANDARD = 'standard';
export const CUSTOM = 'custom';

// measurement unit types
export const INCH = 'inch';
export const CM = 'cm';

// sizes
export const S = 'S';
export const M = 'M';
export const L = 'L';
export const XL = 'XL';
export const XXL = 'XXL';

// hire availability types
export const AVAILABLE = 'available';
export const UNAVAILABLE = 'unavailable';

// MEASUREMENTS TO BE ADDED
export const MEASUREMENTS_TO_BE_ADDED = -1;

export const STANDARD_MEASUREMENTS = {
  XS: {
    label: 'Extra Small',
    inch: {
      jacket: {
        FullShoulderWidth: 5.5,
        Sleeves: 32,
        FullChest: 34,
        Waist: 28,
        Hips: 35,
        FrontShoulderWidth: 16,
        BackShoulderWidth: 15,
        FrontJacketLength: 28,
        Neck: 14,
      },
      trouser: {
        TrouserWaist: 28,
        Crotch: 20,
        Thigh: 20,
        TrouserLength: 29,
        Cuff: 14,
      },
    },
    cm: {
      jacket: {
        FullShoulderWidth: 14,
        Sleeves: 81.3,
        FullChest: 86.4,
        Waist: 71.1,
        Hips: 88.9,
        FrontShoulderWidth: 40.6,
        BackShoulderWidth: 38.1,
        FrontJacketLength: 71.1,
        Neck: 35.6,
      },
      trouser: {
        TrouserWaist: 71.1,
        Crotch: 50.8,
        Thigh: 50.8,
        TrouserLength: 73.7,
        Cuff: 35.6,
      },
    },
  },
  S: {
    label: 'Small',
    inch: {
      jacket: {
        FullShoulderWidth: 5.75,
        Sleeves: 33,
        FullChest: 36,
        Waist: 30,
        Hips: 37,
        FrontShoulderWidth: 16.5,
        BackShoulderWidth: 16,
        FrontJacketLength: 28.5,
        Neck: 14.5,
      },
      trouser: {
        TrouserWaist: 30,
        Crotch: 21,
        Thigh: 21,
        TrouserLength: 30,
        Cuff: 15,
      },
    },
    cm: {
      jacket: {
        FullShoulderWidth: 14.6,
        Sleeves: 83.8,
        FullChest: 91.4,
        Waist: 76.2,
        Hips: 94,
        FrontShoulderWidth: 41.9,
        BackShoulderWidth: 40.6,
        FrontJacketLength: 72.4,
        Neck: 36.8,
      },
      trouser: {
        TrouserWaist: 76.2,
        Crotch: 53.3,
        Thigh: 53.3,
        TrouserLength: 76.2,
        Cuff: 38.1,
      },
    },
  },
  M: {
    label: 'Medium',
    inch: {
      jacket: {
        FullShoulderWidth: 6,
        Sleeves: 34,
        FullChest: 38,
        Waist: 32,
        Hips: 39,
        FrontShoulderWidth: 17,
        BackShoulderWidth: 16.5,
        FrontJacketLength: 29,
        Neck: 15,
      },
      trouser: {


        TrouserWaist: 32,
        Crotch: 22,
        Thigh: 22,
        TrouserLength: 31,
        Cuff: 16,
      },
    },
    cm: {
      jacket: {
        FullShoulderWidth: 15.2,
        Sleeves: 86.4,
        FullChest: 96.5,
        Waist: 81.3,
        Hips: 99.1,
        FrontShoulderWidth: 43.2,
        BackShoulderWidth: 41.9,
        FrontJacketLength: 73.7,
        Neck: 38.1,
      },
      trouser: {
        TrouserWaist: 81.3,
        Crotch: 55.9,
        Thigh: 55.9,
        TrouserLength: 78.7,
        Cuff: 40.6,
      },
    },
  },
  L: {
    label: 'Large',
    inch: {
      jacket: {
        FullShoulderWidth: 6.25,
        Sleeves: 35,
        FullChest: 40,
        Waist: 34,
        Hips: 41,
        FrontShoulderWidth: 17.5,
        BackShoulderWidth: 16.5,
        FrontJacketLength: 29.5,
        Neck: 15.5,
      },
      trouser: {
        TrouserWaist: 34,
        Crotch: 23,
        Thigh: 23,
        TrouserLength: 32,
        Cuff: 17,
      },
    },
    cm: {
      jacket: {
        FullShoulderWidth: 15.9,
        Sleeves: 88.9,
        FullChest: 101.6,
        Waist: 86.4,
        Hips: 104.1,
        FrontShoulderWidth: 44.5,
        BackShoulderWidth: 41.9,
        FrontJacketLength: 75,
        Neck: 39.4,
      },
      trouser: {
        TrouserWaist: 86.4,
        Crotch: 58.4,
        Thigh: 58.4,
        TrouserLength: 81.3,
        Cuff: 43.2,
      },
    },
  },
  XL: {
    label: 'Extra Large',
    inch: {
      jacket: {
        FullShoulderWidth: 6.5,
        Sleeves: 36,
        FullChest: 42,
        Waist: 36,
        Hips: 43,
        FrontShoulderWidth: 18,
        BackShoulderWidth: 17,
        FrontJacketLength: 30,
        Neck: 16,
      },
      trouser: {

        TrouserWaist: 36,
        Crotch: 24,
        Thigh: 24,
        TrouserLength: 33,
        Cuff: 18,
      },
    },
    cm: {
      jacket: {
        FullShoulderWidth: 16.5,
        Sleeves: 91.4,
        FullChest: 106.7,
        Waist: 91.4,
        Hips: 109.2,
        FrontShoulderWidth: 45.7,
        BackShoulderWidth: 43.2,
        FrontJacketLength: 76.2,
        Neck: 40.6,
      },
      trouser: {
        TrouserWaist: 91.4,
        Crotch: 61,
        Thigh: 61,
        TrouserLength: 83.8,
        Cuff: 45.7,
      },
    },
  },
  XXL: {
    label: 'Double Extra Large',
    inch: {
      jacket: {
        FullShoulderWidth: 6.75,
        Sleeves: 37,
        FullChest: 44,
        Waist: 38,
        Hips: 45,
        FrontShoulderWidth: 18.5,
        BackShoulderWidth: 17.5,
        FrontJacketLength: 30.5,
        Neck: 16.5,
      },
      trouser: {


        TrouserWaist: 38,
        Crotch: 25,
        Thigh: 25,
        TrouserLength: 34,
        Cuff: 19,
      },
    },
    cm: {
      jacket: {
        FullShoulderWidth: 17.1,
        Sleeves: 94,
        FullChest: 111.8,
        Waist: 96.5,
        Hips: 114.3,
        FrontShoulderWidth: 47,
        BackShoulderWidth: 44.5,
        FrontJacketLength: 77.5,
        Neck: 41.9,
      },
      trouser: {
        TrouserWaist: 96.5,
        Crotch: 63.5,
        Thigh: 63.5,
        TrouserLength: 86.4,
        Cuff: 48.3,
      },
    },
  },
};
