window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('mainContent');
  const currentPage = window.location.pathname.split("/").pop();
  const loaderShown = sessionStorage.getItem('loaderShown');

  if ((currentPage === "" || currentPage === "index.html") && !loaderShown) {
    // Loader sichtbar machen
    document.body.classList.add('show-loader');

    setTimeout(() => {
      loader.style.display = 'none';
      mainContent.classList.add('fade-in');
      sessionStorage.setItem('loaderShown', 'true');
      document.body.classList.remove('show-loader');
    }, 5000);
  } else {
    // Loader sofort überspringen
    loader.style.display = 'none';
    mainContent.classList.add('fade-in');
  }
});
