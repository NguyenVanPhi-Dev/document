const menuItems = document.querySelectorAll('#list-menu li');
  // Duyệt qua từng phần tử li và bắt sự kiện click
  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      // Loại bỏ lớp active của tất cả các phần tử li
      menuItems.forEach(item => item.classList.remove('active'));

      // Thêm lớp active cho phần tử li được click
      item.classList.add('active');  
      var srcs = item.getAttribute('data-src');
     console.log(srcs);  
     document.querySelector("iframe").setAttribute('src',srcs);
    });
  });
