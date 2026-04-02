import { useEffect, useState } from "react";
import { storage } from "../firebase/firebaseConfig";
import { ref, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import FileCard from "./FileCard";

const FileList = () => {
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    const listRef = ref(storage, "files/");
    const res = await listAll(listRef);

    const urls = await Promise.all(
      res.items.map((item) => getDownloadURL(item))
    );

    setFiles(urls);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleDelete = async (url) => {
    const fileRef = ref(storage, url);
    await deleteObject(fileRef);
    fetchFiles();
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {files.map((url, index) => (
        <FileCard key={index} url={url} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FileList;