// SLİDER KISMI

const sliderContainers = [...document.querySelectorAll('.slider-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

sliderContainers.forEach((item, i) => {
    let sliderDimensions = item.getBoundingClientRect();
    let sliderWidth = sliderDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += sliderWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= sliderWidth;
    })
})

// SLİDER KISMI BİTİŞ

// NEXT PAGE KISMI

document.addEventListener("DOMContentLoaded", function() {
  const itemsPerPage = 6;
  const courses = document.querySelectorAll('.course_search');
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  let currentPage = 1;

  function showPage(page) {
      courses.forEach((course, index) => {
          course.style.display = 'none';
          if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
              course.style.display = 'flex';
          }
      });
      document.querySelector('.page-num').textContent = page;
      document.querySelector('.prev').style.display = page === 1 ? 'none' : 'block';
      document.querySelector('.next').style.display = page === totalPages ? 'none' : 'block';
  }

  document.querySelector('.prev').addEventListener('click', () => {
      if (currentPage > 1) {
          currentPage--;
          showPage(currentPage);
      }
  });

  document.querySelector('.next').addEventListener('click', () => {
      if (currentPage < totalPages) {
          currentPage++;
          showPage(currentPage);
      }
  });

  showPage(currentPage);
});

// NEXT PAGE KISMI BİTİŞ

// TARGET KISMI

  // Why Us
document.getElementById("scrollButton").addEventListener("click", function() {
  document.getElementById("targetSection").scrollIntoView({
      behavior: 'smooth'
  });
});
  //courses.html
document.querySelector(".BannerSecond-btn").addEventListener("click", function() {
  window.location.href = "courses.html";
});

// FİLTRELEME KISMI










