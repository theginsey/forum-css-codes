    function filterMonths(e) {
    const months = document.querySelectorAll(".list div");
    let filter = e.target.dataset.filter;
    if (filter === '*') {
      months.forEach(month => month.classList.remove('hidden'));
    }  else {
      months.forEach(month => {
        month.classList.contains(filter) ? 
        month.classList.remove('hidden') : 
        month.classList.add('hidden');
      });
    };
  };
