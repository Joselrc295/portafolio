import React from 'react';
import '../css/downloadButton.css'; // Asegúrate de importar el CSS

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv/CV-JoseRodriguez.pdf'; // Asegúrate de poner aquí la ruta a tu archivo PDF
    link.download = 'JoseRodriguezCV.pdf'; // El nombre del archivo a descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="download-btn" onClick={handleDownload}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        height="24px"
        width="24px"
      >
        <g strokeWidth="0"></g>
        <g strokeLinejoin="round" strokeLinecap="round"></g>
        <g>
          <g>
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="#f1f1f1"
              d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
            ></path>
          </g>
        </g>
      </svg>
      Descarga mi CV
      
    </button>
  );
};

export default DownloadButton;
