import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AddBook = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const res = await axiosSecure.post("/books", data);

    if (res.data.insertedId) {
      toast.success(" Book Added Successfully");
      reset();
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-base-100 shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Add New <span className="text-lime-500">Book</span>
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold">Book Name</label>
              <input
                {...register("bookName", { required: true })}
                className="input input-bordered w-full mt-2"
                placeholder="Enter Book Name"
              />
            </div>

            <div>
              <label className="font-semibold">Author</label>
              <input
                {...register("author", { required: true })}
                className="input input-bordered w-full mt-2"
                placeholder="Enter Author Name"
              />
            </div>

            <div>
              <label className="font-semibold">Image URL</label>
              <input
                {...register("image")}
                className="input input-bordered w-full mt-2"
                placeholder="Image Link"
              />
            </div>

            <div>
              <label className="font-semibold">Price ($)</label>
              <input
                type="number"
                {...register("price", { required: true })}
                className="input input-bordered w-full mt-2"
                placeholder="Enter Price"
              />
            </div>

            <div>
              <label className="font-semibold">Category</label>
              <input
                type="text"
                {...register("category", { required: true })}
                className="input input-bordered w-full mt-2"
                placeholder="Book Category"
              />
            </div>

            <div>
              <label className="font-semibold">Stock Quantity</label>
              <input
                type="number"
                {...register("stock")}
                className="input input-bordered w-full mt-2"
                placeholder="Available Quantity"
              />
            </div>

            <div>
              <label className="font-semibold">Status</label>
              <select
                {...register("status")}
                className="select select-bordered w-full mt-2"
              >
                <option value="published">Published</option>
                <option value="unpublished">Unpublished</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label className="font-semibold">Description</label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered w-full mt-2 h-28"
              placeholder="Write short book description..."
            />
          </div>

          <button className="btn bg-lime-500 w-full mt-8 text-white">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
