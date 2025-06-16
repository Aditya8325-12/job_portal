function Internship({ internship = {} }) {
  return (
    <section className="bg-white p-1">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">Internship Details</h2>
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
          {/* Company Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              placeholder="Enter company name"
              defaultValue={internship.company || ""}
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
            />
          </div>

          {/* Internship Duration */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                From
              </label>
              <input
                type="date"
                name="from"
                defaultValue={internship.from || ""}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                To
              </label>
              <input
                type="date"
                name="to"
                defaultValue={internship.to || ""}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Project Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              placeholder="Enter project name"
              defaultValue={internship.projectName || ""}
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
            />
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Project Description (Max 250 words)
            </label>
            <textarea
              name="description"
              maxLength={250 * 6} // approx char count
              rows="4"
              placeholder="Describe your project"
              defaultValue={internship.description || ""}
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 resize-none"
            ></textarea>
          </div>

          {/* Key Skills */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Key Skills (comma separated)
            </label>
            <input
              type="text"
              name="skills"
              placeholder="e.g., React, Node.js, MongoDB"
              defaultValue={internship.skills || ""}
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
            />
          </div>

          {/* Project URL */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Project URL
            </label>
            <input
              type="url"
              name="projectUrl"
              placeholder="https://yourproject.com"
              defaultValue={internship.projectUrl || ""}
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end gap-3 modal-action">
          <button type="submit" className="btn">
            Close
          </button>
          <button
            type="submit"
            className="bg-gradient-to-r  from-sky-400 to-blue-600 py-2 px-6 rounded-sm cursor-pointer hover:bg-sky-300 focus:bg-sky-500 text-white"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default Internship;
