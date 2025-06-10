function InfoEdit({ info }) {
  return (
    <section className="bg-white p-1">
      <div className="flex justify-between px-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Personal Information</h2>
          <p className="mb-4 text-sm text-gray-500">
            Press ESC key or click the button below to close
          </p>
        </div>
        <h1 className="text-md font-semibold text-blue-400">Delete</h1>
      </div>

      <form method="dialog">
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={info.name}
              placeholder="Enter your name"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={info.title}
              placeholder="Software Developer"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              defaultValue={info.location}
              placeholder="Enter your city, state"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              defaultValue={info.dob}
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              defaultValue={info.email}
              placeholder="you@example.com"
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Gender
            </label>
            <select
              name="gender"
              defaultValue={info.gender}
              className="w-full pl-4 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
            >
              <option value="" disabled>
                -- Select Gender --
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              defaultValue={info.phone}
              placeholder="+91 1234567890"
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

export default InfoEdit;
