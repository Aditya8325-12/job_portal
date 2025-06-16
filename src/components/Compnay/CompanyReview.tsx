import { FaStar } from "react-icons/fa6";

function CompanyReview({ review }) {
  return (
    <section className="bg-white p-4">
      <div className="flex justify-between ">
        <div>
          <h2 className="text-xl font-bold mb-2">Company Review Details</h2>
          <p className="mb-4 text-sm text-gray-500">
            Press ESC key or click the button below to close
          </p>
        </div>
        <h1 className="text-md font-semibold text-blue-400 cursor-pointer">
          Delete
        </h1>
      </div>

      <form method="dialog">
        <div className="space-y-4">
          {/* Rating */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Rating
            </label>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`text-xl cursor-pointer ${
                    star <= (review.rating || 0)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Review Title */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Review Title
            </label>
            <input
              type="text"
              name="reviewTitle"
              placeholder="Enter review title"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              defaultValue={review.reviewTitle || ""}
            />
          </div>

          {/* Review Description */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Review Description
            </label>
            <textarea
              name="reviewDescription"
              placeholder="Enter review description"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              defaultValue={review.reviewDescription || ""}
            />
          </div>

          {/* Review Date */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Review Date
            </label>
            <input
              type="date"
              name="reviewDate"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              defaultValue={review.reviewDate || ""}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end gap-3 modal-action">
          <button type="submit" className="btn">
            Close
          </button>
          <button className="bg-gradient-to-r  from-sky-400 to-blue-600 py-2 px-6 rounded-sm cursor-pointer hover:bg-sky-300 focus:bg-sky-500 text-white">
            Sumbit
          </button>
        </div>
      </form>
    </section>
  );
}

export default CompanyReview;
