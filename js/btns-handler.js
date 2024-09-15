document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.querySelector('.dl-cv-btn');
    const fileUrl = 'Gravador_Tyler_Jake G_Resume.pdf'; 
  
    downloadBtn.addEventListener('click', function () {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'Gravador_Tyler_Jake G_Resume.pdf';
  
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.btn-code, .btn-demo');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const url = this.getAttribute('data-url');
        if (url) {
          window.open(url, '_blank');
        }
      });
    });
  });
  