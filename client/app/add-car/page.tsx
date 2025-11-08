"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addNewCar } from "@/lib/api/cars";

export default function AddCarPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    price: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  try {
    const form = new FormData();
    form.append("make", formData.make);
    form.append("model", formData.model);
    form.append("year", formData.year);
    form.append("color", formData.color);
    form.append("price", formData.price);
    if (image) form.append("file", image);

    const res = await addNewCar(form);
    setMessage(res.message || "Car added successfully!");
  } catch (error: any) {
    console.error(error);
    setMessage(error.response?.data?.message || "Failed to add car");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-black shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center">Add New Car</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["make", "model", "year", "color", "price"].map((field) => (
          <div key={field}>
            <label className="block font-medium capitalize">{field}</label>
            <input
              type={field === "year" || field === "price" ? "number" : "text"}
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 outline-none focus:ring focus:ring-gray-200"
              required
            />
          </div>
        ))}

        <div>
          <label className="block font-medium">Car Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          {loading ? "Uploading..." : "Add Car"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-gray-700 font-medium">{message}</p>
      )}
    </div>
  );
}
