import { useState } from "react";
import { uploadResume } from "../../services/userService";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("resume", file);

    try {
      await uploadResume(formData);
      alert("Resume uploaded successfully");
      setFile(null); // Clear file input
    } catch (error) {
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Upload Resume</h3>
      <form onSubmit={submit} className="space-y-4">
        <div className="relative">
          <input
            type="file"
            id="resume-upload"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
            accept=".pdf,.doc,.docx"
          />
          <label
            htmlFor="resume-upload"
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {file ? file.name : "Choose a file (PDF, DOC, DOCX)"}
          </label>
        </div>
        <button
          type="submit"
          disabled={uploading}
          className={`w-full font-semibold py-2 rounded-lg transition duration-200 ${
            uploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          {uploading ? "Uploading..." : "Upload Resume"}
        </button>
      </form>
    </div>
  );
}

export default ResumeUpload;