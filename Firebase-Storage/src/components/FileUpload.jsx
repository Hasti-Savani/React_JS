import { useState } from "react";
import { storage } from "../firebase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const FileUpload = ({ fetchFiles }) => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    if (!file) return;

    const storageRef = ref(storage, `files/${Date.now()}-${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percent);
      },
      (error) => console.log(error),
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref);
        setFile(null);
        setProgress(0);
        fetchFiles();
      }
    );
  };

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-3"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload File
      </button>

      {progress > 0 && (
        <div className="mt-3 bg-gray-200 rounded">
          <div
            className="bg-blue-500 text-white text-center text-sm rounded"
            style={{ width: `${progress}%` }}
          >
            {Math.round(progress)}%
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;