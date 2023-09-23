import { CM } from '../constants';

export class CoatMeasurements {
    constructor({ fullShoulderWidth, sleeves, fullChest, waist, hips, frontShoulderWidth, backShoulderWidth, frontJacketLength, neck }) {
        this.fullShoulderWidth = fullShoulderWidth;
        this.sleeves = sleeves;
        this.fullChest = fullChest;
        this.waist = waist;
        this.hips = hips;
        this.frontShoulderWidth = frontShoulderWidth;
        this.backShoulderWidth = backShoulderWidth;
        this.frontJacketLength = frontJacketLength;
        this.neck = neck;
    }

    toJSON() {
        return {
            fullShoulderWidth: this.fullShoulderWidth,
            sleeves: this.sleeves,
            fullChest: this.fullChest,
            waist: this.waist,
            hips: this.hips,
            frontShoulderWidth: this.frontShoulderWidth,
            backShoulderWidth: this.backShoulderWidth,
            frontJacketLength: this.frontJacketLength,
            neck: this.neck,
        }
    }
}

export class TrouserMeasurements {
    constructor({ waist, crotch, thigh, length, cuff }) {
        this.waist = waist;
        this.crotch = crotch;
        this.thigh = thigh;
        this.length = length;
        this.cuff = cuff;
    }

    toJSON() {
        return {
            waist: this.waist,
            crotch: this.crotch,
            thigh: this.thigh,
            length: this.length,
            cuff: this.cuff,
        }
    }
}

export const getCourtMeasurementObject = (measurements, unit) => {
    if (unit === CM) {
        for (let key in measurements) {
            measurements[key] = cmToInches(measurements[key]);
        }
    }

    return CoatMeasurements(measurements);
};

export const getTrouserMeasurementObject = (measurements, unit) => {
    if (unit === CM) {
        for (let key in measurements) {
            measurements[key] = cmToInches(measurements[key]);
        }
    }

    return TrouserMeasurements(measurements);
};

export function inchesToCm(inches) {
    // 1 inch is approximately equal to 2.54 centimeters
    return inches * 2.54;
}

export function cmToInches(cm) {
    // 1 centimeter is approximately equal to 0.393701 inches
    return cm * 0.393701;
}





















