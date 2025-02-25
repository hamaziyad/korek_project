import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";
import pdf_logo from "../assets/pdf_logo.png";
import axios from "axios";
import '../index.css';
function Search() {
  const [files, setFiles] = useState([]);
  const [openResult, setOpenResult] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const filesPerPage = 6; // Number of files per page

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const formattedFiles = res.data.slice(0, 20).map((item) => ({
          id: item.id,
          name: `File ${item.id}.pdf`,
          size: `${(Math.random() * 5 + 1).toFixed(2)}MB`,
          type: "PDF",
        }));
        setFiles(formattedFiles);
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);

  return (
    <div>
      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <button onClick={() => setOpenResult(true)} className="search-button">
            <SearchIcon className="search-icon" size={24} />
          </button>
        </div>
      </div>

      {openResult && (
        <div className="file-list-container">
          <ul>
            {currentFiles.map((file) => (
              <li key={file.id} className="file-item file-list-items">
                <span className="file-name">{file.name}</span>
                <button>
                  <img src={pdf_logo} alt="" />
                </button>
              </li>
            ))}
          </ul>

          <div className="pagination">
            
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              {'<'}
            </button>
            <span className="page-number">Page {currentPage}</span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={indexOfLastFile >= files.length}
              className="pagination-button"
            >
              {'>'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
