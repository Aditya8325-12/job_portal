import { FaDownload, FaTrash } from "react-icons/fa";
import { useState } from "react";
function Resume() {
  const [resumeUploaded, setResumeUploaded] = useState(true);
  const resumeFileName = "Resume.pdf";
  const uploadedDate = "Nov 4, 2024";
  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl">
      <div className="bg-white   w-full ">
        <h2 className="text-lg font-semibold mb-2">Resume</h2>
        <p className="text-sm text-gray-600 mb-4">
          Your resume is the first impression you make on potential employers.
          Craft it carefully to secure your desired job or internship.
        </p>

        {resumeUploaded ? (
          <div className="flex items-center justify-between pr-6 gap-2 mb-4">
            <div className="flex flex-col">
              <div className="text-sm font-medium text-gray-800">
                {resumeFileName}
              </div>
              <div className="text-xs text-gray-500">
                Uploaded on {uploadedDate}
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <button className="text-blue-600 hover:text-blue-800 transition">
                <FaDownload />
              </button>
              <button
                className="text-red-500 hover:text-red-700 transition"
                onClick={() => setResumeUploaded(false)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ) : null}

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <label className="cursor-pointer inline-block text-blue-600 border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
            Upload resume
            <input
              type="file"
              accept=".doc,.docx,.rtf,.pdf"
              className="hidden"
              onChange={() => setResumeUploaded(true)}
            />
          </label>
          <p className="text-xs text-gray-500 mt-2">
            Supported formats: doc, docx, rtf, pdf, up to 2MB
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
