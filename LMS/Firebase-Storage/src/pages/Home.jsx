import FileUpload from "../components/FileUpload";
import FileList from "../components/FileList";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <FileUpload />
      <FileList />
    </div>
  );
};

export default Home;