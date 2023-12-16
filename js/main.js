

document.addEventListener("DOMContentLoaded", function() {
  /* Home page service */
  const homePageServiceSection = document.getElementById('home-service');
  if(homePageServiceSection){
      const getServices = getAllServices();
      const serviceTemplate = getServicesTemplate(getServices);
      homePageServiceSection.innerHTML = serviceTemplate;
  }
});