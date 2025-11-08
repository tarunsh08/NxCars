import axiosClient from "../axiosClient";

export const getAllCars = async () => {
  const res = await axiosClient.get("/api/cars");
  return res.data.cars;
}

export const getCarById = async (id: string) => {
  try {
    const res = await axiosClient.get(`/api/car/${id}`);
    console.log("getCarById response:", res.data);
    return res.data.car;
  } catch (error: any) {
    console.error("getCarById error:", error);
    throw error;
  }
}

export const addNewCar = async (carData: FormData) => {
  try {
    const res = await axiosClient.post("/api/cars", carData);
    console.log("Raw API response:", res); 
    return res.data;
  } catch (error: any) {
    console.error("API Error:", error);
    throw error;
  }
};


export const deleteCarById = async (id: string) => {
  try {
    const res = await axiosClient.delete(`/api/car/${id}`);
    console.log("deleteCarById response:", res.data);
    return res.data;
  } catch (error: any) {
    console.error("deleteCarById error:", error);
    throw error;
  }
}