"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addNewCar } from "@/lib/api/cars";
import { Upload, Car, DollarSign, Calendar, Palette, Tag } from "lucide-react";

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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      // Clear file error when user selects a file
      if (errors.image) {
        setErrors(prev => ({ ...prev, image: "" }));
      }
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Make validation
    if (!formData.make.trim()) {
      newErrors.make = "Make is required";
    } else if (formData.make.length > 50) {
      newErrors.make = "Make cannot exceed 50 characters";
    }

    // Model validation
    if (!formData.model.trim()) {
      newErrors.model = "Model is required";
    } else if (formData.model.length > 50) {
      newErrors.model = "Model cannot exceed 50 characters";
    }

    // Year validation
    if (!formData.year) {
      newErrors.year = "Year is required";
    } else {
      const yearNum = parseInt(formData.year);
      if (yearNum < 1900) {
        newErrors.year = "Year must be after 1900";
      } else if (yearNum > 2025) {
        newErrors.year = "Year must be before 2025";
      }
    }

    // Color validation
    if (!formData.color.trim()) {
      newErrors.color = "Color is required";
    }

    // Price validation
    if (!formData.price) {
      newErrors.price = "Price is required";
    } else {
      const priceNum = parseFloat(formData.price);
      if (priceNum < 0) {
        newErrors.price = "Price cannot be negative";
      } else if (priceNum > 1000000) {
        newErrors.price = "Price must be less than $1,000,000";
      }
    }

    // Image validation
    if (!image) {
      newErrors.image = "Car image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Validate form before submission
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const form = new FormData();
      form.append("make", formData.make);
      form.append("model", formData.model);
      form.append("year", formData.year);
      form.append("color", formData.color);
      form.append("price", formData.price);
      if (image) form.append("file", image);

      const res = await addNewCar(form);
      console.log("API Response:", res); // Debug log

      if (res && res.message) {
        setMessage(res.message);
        // Reset form on success
        if (res.message.includes('successfully')) {
          setFormData({
            make: "",
            model: "",
            year: "",
            color: "",
            price: "",
          });
          setImage(null);
          setErrors({});
          // Optionally redirect after success
          setTimeout(() => {
            router.push('/');
          }, 2000);
        }
      } else {
        setMessage("Car added successfully!");
      }
    } catch (error: any) {
      console.error("Error details:", error);
      console.error("Error response:", error.response);

      // More detailed error handling
      if (error.response) {
        // Server responded with error status
        setMessage(error.response.data?.message || `Server error: ${error.response.status}`);
      } else if (error.request) {
        // Request was made but no response received
        setMessage("Network error: Unable to connect to server");
      } else {
        // Something else happened
        setMessage(error.message || "An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const fieldIcons = {
    make: Car,
    model: Tag,
    year: Calendar,
    color: Palette,
    price: DollarSign
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 gradient-text">Add New Car</h1>
            <p className="text-gray-300 text-lg">Add your premium vehicle to our collection</p>
          </div>

          <div className="glass-dark rounded-2xl p-8 hover-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              {["make", "model", "year", "color", "price"].map((field) => {
                const Icon = fieldIcons[field as keyof typeof fieldIcons];
                return (
                  <div key={field} className="space-y-2">
                    <label className="flex items-center gap-2 text-white font-medium capitalize text-lg">
                      <Icon className="w-5 h-5 text-orange-500" />
                      {field}
                    </label>
                    <input
                      type={field === "year" || field === "price" ? "number" : "text"}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      className={`w-full glass-orange rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-300 ${
                        errors[field] ? 'border border-red-500/50' : ''
                      }`}
                      placeholder={`Enter ${field}...`}
                      required
                    />
                    {errors[field] && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                        {errors[field]}
                      </p>
                    )}
                  </div>
                );
              })}

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-white font-medium text-lg">
                  <Upload className="w-5 h-5 text-orange-500" />
                  Car Image
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className={`w-full glass-orange rounded-lg px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-orange-500/20 file:text-orange-400 hover:file:bg-orange-500/30 transition-all duration-300 ${
                      errors.image ? 'border border-red-500/50' : ''
                    }`}
                    required
                  />
                </div>
                {errors.image && (
                  <p className="text-red-400 text-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                    {errors.image}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Uploading...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Upload className="w-5 h-5" />
                    Add Car to Collection
                  </div>
                )}
              </button>
            </form>

            {message && (
              <div className={`mt-6 p-4 rounded-lg text-center font-medium ${
                message.includes('successfully')
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}