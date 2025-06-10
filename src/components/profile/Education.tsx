function Education({ edu }) {
  return (
    <section className="bg-white p-1">
      <div className="flex justify-between px-4">
        <div>
          <h2 className=" text-xl font-bold mb-2">Education Details</h2>
          <p className="mb-4 text-sm text-gray-500">
            Press ESC key or click the button below to close
          </p>
        </div>
        <h1 className="text-md font-semibold text-blue-400">Delete </h1>
      </div>

      <form method="dialog">
        <div className="space-y-4">
          {/* Board */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Board
            </label>
            <input
              type="text"
              name="board"
              placeholder="Enter your board"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              defaultValue={edu.board || ""}
            />
          </div>

          {/* Medium of Study */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Medium of Study
            </label>
            <input
              type="text"
              name="medium"
              placeholder="Enter medium of study"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              defaultValue={edu.medium || ""}
            />
          </div>

          {/* Percentage */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Percentage
            </label>
            <input
              type="text"
              name="percentage"
              placeholder="Enter your percentage"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              defaultValue={edu.percentage || ""}
            />
          </div>

          {/* Passing Year */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Passing Year
            </label>
            <input
              type="text"
              name="passingYear"
              placeholder="Enter passing year"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              defaultValue={edu.passingYear || ""}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end gap-3 modal-action">
          <button type="submit" className="btn">
            Close
          </button>
          <button className=" bg-sky-400 py-2 px-6 rounded-sm cursor-pointer hover:bg-sky-300 focus:bg-sky-500 text-white">
            Next
          </button>
        </div>
      </form>
    </section>
  );
}

export default Education;
