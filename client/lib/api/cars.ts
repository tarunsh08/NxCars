import axiosClient from "../axiosClient";

export const getAllCars = async () => {
    const res = await axiosClient.get("/api/cars");
    console.log(res)
    return res.data.cars;
}

export const getCarById = async (id: string) => {
    const res = await axiosClient.get(`/api/car/${id}`);
    return res;
}

export const addNewCar = async (carData: FormData) => {
  const res = await axiosClient.post("/api/cars", carData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};


export const deleteCarById = async (id: string) => {
    const res = await axiosClient.delete(`/api/car/${id}`);
    return res;
}