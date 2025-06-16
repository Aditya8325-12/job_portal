function Language({ lang }) {
  return (
    <section className="bg-white p-1">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">Language Details</h2>
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
          {/* Language Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Language
            </label>
            <select
              name="language"
              defaultValue={lang.language || ""}
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500 bg-white/50"
            >
              <option value="" disabled>
                Select a language
              </option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="Arabic">Arabic</option>
            </select>
          </div>

          {/* Proficiency */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Proficiency
            </label>
            <select
              name="proficiency"
              defaultValue={lang.proficiency || ""}
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500 bg-white/50"
            >
              <option value="" disabled>
                Select proficiency
              </option>
              <option value="Read">Read</option>
              <option value="Write">Write</option>
              <option value="Read and Write">Read and Write</option>
              <option value="Fluent">Fluent</option>
            </select>
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

export default Language;
