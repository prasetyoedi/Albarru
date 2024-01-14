// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

function handleSidebarState() {
	if (window.innerWidth <= 780) {
		sidebar.classList.add('hide');

		allSideDivider.forEach(item => {
			item.textContent = '-';
		});

		allDropdown.forEach(item => {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		});
	} else {
		sidebar.classList.remove('hide');

		allSideDivider.forEach(item => {
			item.textContent = item.dataset.text;
		});
	}
}

handleSidebarState(); // Panggil fungsi untuk menangani status sidebar saat halaman dimuat

window.addEventListener('resize', function () {
	handleSidebarState(); // Panggil fungsi saat ukuran layar berubah
});

sidebar.addEventListener('mouseleave', function () {
	if (this.classList.contains('hide')) {
		allDropdown.forEach(item => {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		});
		allSideDivider.forEach(item => {
			item.textContent = '-';
		});
	}
});

sidebar.addEventListener('mouseenter', function () {
	if (this.classList.contains('hide')) {
		allDropdown.forEach(item => {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		});
		allSideDivider.forEach(item => {
			item.textContent = item.dataset.text;
		});
	}
});

toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if (sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item => {
			item.textContent = '-';
		});

		allDropdown.forEach(item => {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		});
	} else {
		allSideDivider.forEach(item => {
			item.textContent = item.dataset.text;
		});
	}
});
