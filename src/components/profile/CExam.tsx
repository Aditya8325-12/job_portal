function CompetitiveExam({ exam }) {
  return (
    <section className="bg-white p-1">
      <div className="flex justify-between px-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Competitive Exam Details</h2>
          <p className="mb-4 text-sm text-gray-500">
            Press ESC key or click the button below to close
          </p>
        </div>
        <h1 className="text-md font-semibold text-blue-400">Delete</h1>
      </div>

      <form method="dialog">
        <div className="space-y-4">
          {/* Exam Select */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Select Exam
            </label>
            <select
              name="examName"
              defaultValue={exam.examName || ""}
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
            >
              <option value="" disabled>
                -- Select Exam --
              </option>
              <option value="JEE">JEE</option>
              <option value="NEET">NEET</option>
              <option value="GATE">GATE</option>
              <option value="CAT">CAT</option>
              <option value="UPSC">UPSC</option>
              <option value="MPSC">MPSC</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Rank Input */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Enter Rank
            </label>
            <input
              type="text"
              name="rank"
              placeholder="Enter your rank"
              defaultValue={exam.rank || ""}
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end gap-3 modal-action">
          <button type="submit" className="btn">
            Close
          </button>
          <button className="bg-sky-400 py-2 px-6 rounded-sm cursor-pointer hover:bg-sky-300 focus:bg-sky-500 text-white">
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default CompetitiveExam;
