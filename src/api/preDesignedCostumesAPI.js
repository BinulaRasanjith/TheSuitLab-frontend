import api from "./api";

export const getPreDesignedCostumes = async ({ costumeType }) => {
  return api.get(`/pre-designed-costumes`, {
    params: {
      costumeType,
    },
  });
};

export const getPreDesignedCostumeById = async (CostumeId) => {
  return api.get(`/pre-designed-costumes/${CostumeId}`);
};
