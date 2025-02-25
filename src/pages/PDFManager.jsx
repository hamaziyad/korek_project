import React, { useState, useEffect } from "react";
import uploadIcon from "../assets/icon.png"; // Restored the upload icon
import '../index.css';
function PDFManager() {
  const [files, setFiles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    // Simulated file data (Replace with API data if needed)
    const dummyFiles = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: `File ${i + 1}.pdf`,
    }));
    setFiles(dummyFiles);
  }, []);

  const totalPages = Math.ceil(files.length / itemsPerPage);
  const indexOfLastFile = currentPage * itemsPerPage;
  const indexOfFirstFile = indexOfLastFile - itemsPerPage;
  const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);

  return (
    <div>
      <div className="drop-pdf">
        <h1>Drop PDF file here</h1>
        <img className="pdf-icon" src={uploadIcon} alt="Upload PDF Icon" /> {/* Restored upload icon */}
      </div>

      <div className="history">
        <div className="pdfs">
          {currentFiles.map((file) => (
            <div key={file.id} className="result">
              <h3 className="file-name">{file.name}</h3>
              <h3 className="view">View</h3>
            </div>
          ))}
          {/* Pagination Controls */}
        <div className="pagination pagination-pdf">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            {"<"}
          </button>
          <span className="page-number">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="pagination-button"
          >
            {">"}
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PDFManager;
