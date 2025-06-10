function Project({ project }) {
  return (
    <section className="bg-white p-1">
      <div className="flex justify-between px-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Project Details</h2>
          <p className="mb-4 text-sm text-gray-500">
            Press ESC key or click the button below to close
          </p>
        </div>
        <h1 className="text-md font-semibold text-blue-400">Delete</h1>
      </div>

      <form method="dialog">
        <div className="space-y-4">
          {/* Project Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Project Name
            </label>
            <input
              type="text"
              name="projectName"
              placeholder="Enter project name"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              defaultValue={project.name || ""}
            />
          </div>

          {/* Duration */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Duration From
              </label>
              <input
                type="month"
                name="durationFrom"
                className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
                defaultValue={project.durationFrom || ""}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Duration To
              </label>
              <input
                type="month"
                name="durationTo"
                className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
                defaultValue={project.durationTo || ""}
              />
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Project Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Describe your project"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 resize-none"
              defaultValue={project.description || ""}
            />
          </div>

          {/* Key Skills */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Key Skills
            </label>
            <select
              name="skills"
              //   multiple
              defaultValue={project.skills || []}
              className="w-full pl-4 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 "
            >
              <option value="React">React</option>
              <option value="React Native">React Native</option>
              <option value="Node.js">Node.js</option>
              <option value="MongoDB">MongoDB</option>
              <option value="Express">Express</option>
            </select>
            <p className="text-xs text-gray-400 mt-1">
              Hold Ctrl (or Cmd on Mac) to select multiple skills.
            </p>
          </div>

          {/* Project URL */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Project URL
            </label>
            <input
              type="url"
              name="projectUrl"
              placeholder="https://example.com"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
              defaultValue={project.projectUrl || ""}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end gap-3 modal-action">
          <button type="submit" className="btn">
            Close
          </button>
          <button className="bg-sky-400 py-2 px-6 rounded-sm cursor-pointer hover:bg-sky-300 focus:bg-sky-500 text-white">
            Next
          </button>
        </div>
      </form>
    </section>
  );
}

export default Project;
