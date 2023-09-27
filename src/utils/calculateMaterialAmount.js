const calculateFabricAmount = (measurements, unit, costumeType) => {
  // Conversion factors for inch and centimeter
  const inchToCm = 2.54;
  //---------------------------------------------------------------------------------------------------

  // Convert measurements to a consistent unit (e.g., inch)
  const convertedMeasurements = {};

  for (const [measurement, value] of Object.entries(measurements)) {
    convertedMeasurements[measurement] =
      unit === "inch" ? value : value * inchToCm; // Convert to inches if in cm
  }

  // Define fabric requirements for each type of costume (in square units)
  const fabricRequirements = {
    jacket: {
      fabricAmount: function (convertedMeasurements) {
        // Example calculation for jacket fabric requirements
        // This is a simplified calculation; replace it with your own logic
        const {
          FullShoulderWidth,
          JacketSleevesLength,
          FullChest,
          Waist,
          Hips,
          FrontShoulderWidth,
          BackShoulderWidth,
          FrontJacketLength,
          Neck,
        } = convertedMeasurements;

        const totalFabricRequired =
          (FullShoulderWidth + JacketSleevesLength) * FrontJacketLength +
          FullChest * 2 +
          Waist * 2 +
          Hips * 2 +
          FrontShoulderWidth * 2 +
          BackShoulderWidth * 2 +
          Neck;

        // Return the calculated fabric amount (you may adjust units as needed)
        return totalFabricRequired;
      },
    },
    pant: {
      fabricAmount: function (convertedMeasurements) {
        // Example calculation for pant fabric requirements
        // This is a simplified calculation; replace it with your own logic
        const { TrouserWaist, Crotch, Thigh, TrouserLength, Cuff } =
          convertedMeasurements;

        const totalFabricRequired =
          TrouserWaist * 2 + Crotch * 2 + Thigh * 2 + TrouserLength + Cuff * 2;

        // Return the calculated fabric amount (you may adjust units as needed)
        return totalFabricRequired;
      },
    },
    both: {
      fabricAmount: function (convertedMeasurements) {
        // Calculate fabric requirements for both jacket and pants
        const jacketFabric = fabricRequirements.jacket.fabricAmount(
          convertedMeasurements
        );
        const pantFabric = fabricRequirements.pant.fabricAmount(
          convertedMeasurements
        );

        // Return the combined fabric amount for both costume pieces
        return jacketFabric + pantFabric;
      },
    },
  };

  //----------------------------------------------------------------------------------------------------------

  // Calculate the fabric amount based on the costume type
  const fabricAmount = fabricRequirements[costumeType].fabricAmount;

  return unit === "inch" ? fabricAmount : fabricAmount / inchToCm; // Convert back to cm if needed
};

export default calculateFabricAmount;

// //me widiyt thma meka wada karanne ballo.
// // Example usage:
// const measurementsInInches = {
//   FullShoulderWidth: 20,
//   JacketSleevesLength: 24,
//   // Add other measurements in inches
// };

// const measurementsInCm = {
//   FullShoulderWidth: 50,
//   JacketSleevesLength: 60,
//   // Add other measurements in centimeters
// };

// const unitInInches = "inch";
// const unitInCm = "cm";

// const costumeType = "both"; // or 'jacket', 'pant'

// const fabricAmountInInches = calculateFabricAmount(
//   measurementsInInches,
//   unitInInches,
//   costumeType
// );
// console.log(`Fabric Required: ${fabricAmountInInches} square inches`);

// const fabricAmountInCm = calculateFabricAmount(
//   measurementsInCm,
//   unitInCm,
//   costumeType
// );
// console.log(`Fabric Required: ${fabricAmountInCm} square centimeters`);
