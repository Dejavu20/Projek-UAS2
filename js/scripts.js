function openModal(id) {
  document.getElementById('modal-' + id).classList.remove('hidden');
}

function closeModal(id) {
  document.getElementById('modal-' + id).classList.add('hidden');
}

// Fungsi untuk membuka modal formulir pemesanan
function openBookingModal(id) {
  document.getElementById('booking-modal' + id).classList.remove('hidden');
}

// Fungsi untuk menutup modal formulir pemesanan
function closeBookingModal(id) {
  document.getElementById('booking-modal' + id).classList.add('hidden');
}

function handleSubmit(event) {
  event.preventDefault(); // Mencegah form melakukan submit default
  closeBookingModal();
}


// // scripts.js

// document.addEventListener('DOMContentLoaded', function () {
//     const carContainer = document.getElementById('carContainer');
  
//     // Data mobil
//     const cars = [
//       // Toyota
//       {
//         brand: 'Toyota',
//         model: 'Avanza',
//         price: 400000,
//         color: 'Putih',
//         plate: 'B 1234 ABC',
//         year: 2020,
//         image: 'img/Toyota-Avanza.png'
//       },
//       {
//         brand: 'Toyota',
//         model: 'Fortuner',
//         price: 800000,
//         color: 'Hitam',
//         plate: 'B 5678 DEF',
//         year: 2021,
//         image: 'img/Toyota-Fortuner.png'
//       },
//       {
//         brand: 'Toyota',
//         model: 'Innova',
//         price: 600000,
//         color: 'Silver',
//         plate: 'B 9101 GHI',
//         year: 2019,
//         image: 'img/Toyota-Innova.png'
//       },
//       // Honda
//       {
//         brand: 'Honda',
//         model: 'Brio',
//         price: 350000,
//         color: 'Silver',
//         plate: 'B 2345 DEF',
//         year: 2019,
//         image: 'img/Honda-Brio.png'
//       },
//       {
//         brand: 'Honda',
//         model: 'Civic',
//         price: 700000,
//         color: 'Merah',
//         plate: 'B 6789 JKL',
//         year: 2020,
//         image: 'img/Honda-Civic.png'
//       },
//       {
//         brand: 'Honda',
//         model: 'CR-V',
//         price: 900000,
//         color: 'Putih',
//         plate: 'B 1122 MNO',
//         year: 2021,
//         image: 'img/Honda-CRV.png'
//       },
//       // Suzuki
//       {
//         brand: 'Suzuki',
//         model: 'Ertiga',
//         price: 380000,
//         color: 'Hitam',
//         plate: 'B 3344 PQR',
//         year: 2018,
//         image: 'img/Suzuki-Ertiga.png'
//       },
//       {
//         brand: 'Suzuki',
//         model: 'Swift',
//         price: 360000,
//         color: 'Biru',
//         plate: 'B 5566 STU',
//         year: 2019,
//         image: 'img/Suzuki-Swift.png'
//       },
//       {
//         brand: 'Suzuki',
//         model: 'Ignis',
//         price: 400000,
//         color: 'Putih',
//         plate: 'B 7788 VWX',
//         year: 2020,
//         image: 'img/Suzuki-Ignis.png'
//       },
//       // Daihatsu
//       {
//         brand: 'Daihatsu',
//         model: 'Xenia',
//         price: 390000,
//         color: 'Silver',
//         plate: 'B 9900 YZA',
//         year: 2019,
//         image: 'img/Daihatsu-Xenia.png'
//       },
//       {
//         brand: 'Daihatsu',
//         model: 'Terios',
//         price: 750000,
//         color: 'Hitam',
//         plate: 'B 2233 BCD',
//         year: 2020,
//         image: 'img/Daihatsu-Terios.png'
//       },
//       {
//         brand: 'Daihatsu',
//         model: 'Sigra',
//         price: 370000,
//         color: 'Merah',
//         plate: 'B 4455 EFG',
//         year: 2018,
//         image: 'img/Daihatsu-Sigra.png'
//       },
//       // Mitsubishi
//       {
//         brand: 'Mitsubishi',
//         model: 'Xpander',
//         price: 550000,
//         color: 'Putih',
//         plate: 'B 6677 HIJ',
//         year: 2021,
//         image: 'img/Mitsubishi-Xpander.png'
//       },
//       {
//         brand: 'Mitsubishi',
//         model: 'Outlander',
//         price: 1000000,
//         color: 'Silver',
//         plate: 'B 8899 KLM',
//         year: 2022,
//         image: 'img/Mitsubishi-Outlander.png'
//       },
//       {
//         brand: 'Mitsubishi',
//         model: 'L300',
//         price: 650000,
//         color: 'Hitam',
//         plate: 'B 1011 NOP',
//         year: 2020,
//         image: 'img/Mitsubishi-L300.png'
//       },
//       // Nissan
//       {
//         brand: 'Nissan',
//         model: 'Terra',
//         price: 850000,
//         color: 'Hitam',
//         plate: 'B 1213 QRS',
//         year: 2021,
//         image: 'img/Nissan-Terra.png'
//       },
//       {
//         brand: 'Nissan',
//         model: 'Kicks',
//         price: 500000,
//         color: 'Biru',
//         plate: 'B 1415 TUV',
//         year: 2019,
//         image: 'img/Nissan-Kicks.png'
//       },
//       {
//         brand: 'Nissan',
//         model: 'March',
//         price: 400000,
//         color: 'Putih',
//         plate: 'B 1617 WXY',
//         year: 2018,
//         image: 'img/Nissan-March.png'
//       },
//       // Kia
//       {
//         brand: 'Kia',
//         model: 'Sportage',
//         price: 900000,
//         color: 'Silver',
//         plate: 'B 1819 ZAB',
//         year: 2021,
//         image: 'img/Kia-Sportage.png'
//       },
//       {
//         brand: 'Kia',
//         model: 'Picanto',
//         price: 350000,
//         color: 'Merah',
//         plate: 'B 2021 CDE',
//         year: 2020,
//         image: 'img/Kia-Picanto.png'
//       },
//       {
//         brand: 'Kia',
//         model: 'Seltos',
//         price: 800000,
//         color: 'Hitam',
//         plate: 'B 2223 FGH',
//         year: 2021,
//         image: 'img/Kia-Seltos.png'
//       },
//       // Ford
//       {
//         brand: 'Ford',
//         model: 'Everest',
//         price: 950000,
//         color: 'Putih',
//         plate: 'B 2425 IJK',
//         year: 2022,
//         image: 'img/Ford-Everest.png'
//       },
//       {
//         brand: 'Ford',
//         model: 'Fiesta',
//         price: 450000,
//         color: 'Biru',
//         plate: 'B 2627 LMN',
//         year: 2019,
//         image: 'img/Ford-Fiesta.png'
//       },
//       {
//         brand: 'Ford',
//         model: 'Ranger',
//         price: 850000,
//         color: 'Hitam',
//         plate: 'B 2829 OPQ',
//         year: 2020,
//         image: 'img/Ford-Ranger.png'
//       },
//       // BMW
//       {
//         brand: 'BMW',
//         model: 'X1',
//         price: 1500000,
//         color: 'Putih',
//         plate: 'B 3031 RST',
//         year: 2022,
//         image: 'img/BMW-X1.png'
//       },
//       {
//         brand: 'BMW',
//         model: '3 Series',
//         price: 1300000,
//         color: 'Silver',
//         plate: 'B 3233 UVW',
//         year: 2021,
//         image: 'img/BMW-3Series.png'
//       },
//       {
//         brand: 'BMW',
//         model: 'X5',
//         price: 2000000,
//         color: 'Hitam',
//         plate: 'B 3435 XYZ',
//         year: 2023,
//         image: 'img/BMW-X5.png'
//       },
//       // Mercedes-Benz
//       {
//         brand: 'Mercedes-Benz',
//         model: 'C-Class',
//         price: 1400000,
//         color: 'Merah',
//         plate: 'B 3637 ABC',
//         year: 2021,
//         image: 'img/Mercedes-CClass.png'
//       },
//       {
//         brand: 'Mercedes-Benz',
//         model: 'E-Class',
//         price: 1800000,
//         color: 'Putih',
//         plate: 'B 3839 DEF',
//         year: 2022,
//         image: 'img/Mercedes-EClass.png'
//       },
//       {
//         brand: 'Mercedes-Benz',
//         model: 'GLA',
//         price: 1600000,
//         color: 'Silver',
//         plate: 'B 4041 GHI',
//         year: 2023,
//         image: 'img/Mercedes-GLA.png'
//       },
//     ];
  
//     // Generate kartu mobil dengan animasi dan delay
//     function generateCars() {
//       carContainer.innerHTML = cars.map((car, index) => `
//         <div class="bg-white shadow-md rounded-lg p-6 car-item animate-car-card ${'delay-' + ((index % 6) + 1)}" data-brand="${car.brand}" data-price="${car.price}" data-color="${car.color}" data-plate="${car.plate}" data-year="${car.year}" data-model="${car.model}">
//           <img src="${car.image}" alt="${car.brand} ${car.model}" class="mb-4 rounded-lg w-full h-48 object-cover">
//           <h3 class="text-xl font-bold mb-2">${car.brand} ${car.model}</h3>
//           <p class="mb-4">Harga: Rp ${car.price.toLocaleString('id-ID')} / hari</p>
//           <button class="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition transform hover:scale-105 duration-300 w-full" onclick="openDetailsModal(this)">Detail</button>
//         </div>
//       `).join('');
//     }
  
//     generateCars();
  
//     // Fungsi untuk membuka modal detail tanpa animasi
//     window.openDetailsModal = function(button) {
//       const carItem = button.closest('.car-item');
//       const brand = carItem.getAttribute('data-brand');
//       const model = carItem.getAttribute('data-model');
//       const price = carItem.getAttribute('data-price');
//       const color = carItem.getAttribute('data-color');
//       const plate = carItem.getAttribute('data-plate');
//       const year = carItem.getAttribute('data-year');
  
//       document.getElementById('details-title').textContent = `${brand} ${model}`;
//       document.getElementById('detail-brand').value = brand;
//       document.getElementById('detail-color').value = color;
//       document.getElementById('detail-plate').value = plate;
//       document.getElementById('detail-year').value = year;
//       document.getElementById('detail-price').value = `Rp ${parseInt(price).toLocaleString('id-ID')} / hari`;
  
//       const modal = document.getElementById('details-modal');
//       modal.classList.remove('hidden');
//       // Tidak menambahkan kelas animasi saat membuka modal
//     }
  
//     // Tarif denda per hari keterlambatan (misalnya Rp 100.000 per hari)
//     const finePerDay = 100000;
  
//     // Fungsi untuk "Sewa Sekarang" tanpa animasi
//     window.sewaSekarang = function() {
//       // Menutup modal detail tanpa animasi
//       const detailsModal = document.getElementById('details-modal');
//       detailsModal.classList.add('hidden');
//       // Tidak menghapus kelas animasi karena tidak ditambahkan
  
//       // Menghasilkan Kode Booking
//       const bookingCode = generateBookingCode();
//       document.getElementById('booking-code').value = bookingCode;
  
//       // Mengatur tanggal minimum untuk mulai sewa (hari ini)
//       const rentalStartDateInput = document.getElementById('rental-start-date');
//       const today = new Date();
//       const year = today.getFullYear();
//       const month = String(today.getMonth() + 1).padStart(2, '0');
//       const day = String(today.getDate()).padStart(2, '0');
//       rentalStartDateInput.min = `${year}-${month}-${day}`;
  
//       // Mengatur tanggal minimum untuk selesai sewa (setidaknya 1 hari setelah mulai)
//       const rentalEndDateInput = document.getElementById('rental-end-date');
//       const minEndDate = new Date(today);
//       minEndDate.setDate(minEndDate.getDate() + 1);
//       const minEndYear = minEndDate.getFullYear();
//       const minEndMonth = String(minEndDate.getMonth() + 1).padStart(2, '0');
//       const minEndDay = String(minEndDate.getDate()).padStart(2, '0');
//       rentalEndDateInput.min = `${minEndYear}-${minEndMonth}-${minEndDay}`;
  
//       // Membuka modal pemesanan tanpa animasi
//       const bookingModal = document.getElementById('booking-modal');
//       bookingModal.classList.remove('hidden');
//       // Tidak menambahkan kelas animasi saat membuka modal
//     }
  
//     // Fungsi untuk menutup modal pemesanan dengan animasi fade-out
//     window.closeBookingModal = function() {
//       const modal = document.getElementById('booking-modal');
//       modal.classList.add('animate-fade-out');
  
//       // Setelah animasi selesai, sembunyikan modal dan hapus kelas animasi
//       setTimeout(() => {
//         modal.classList.add('hidden');
//         modal.classList.remove('animate-fade-out');
//         // Reset form
//         document.getElementById('booking-form').reset();
//         document.getElementById('booking-code').value = '';
//       }, 500); // Sesuaikan durasi dengan animasi CSS
//     }
  
//     // Simulasi penyimpanan dan pengambilan data booking
//     // Dalam implementasi nyata, data booking akan disimpan di backend/database
//     let bookings = [];
  
//     // Fungsi untuk menyimpan booking
//     function saveBooking(booking) {
//       bookings.push(booking);
//     }
  
//     // Fungsi untuk mendapatkan booking berdasarkan kode booking
//     function getBookingByCode(code) {
//       return bookings.find(b => b.bookingCode === code);
//     }
  
//     // Fungsi untuk menangani pengiriman formulir pemesanan
//     document.getElementById('booking-form').addEventListener('submit', function(event) {
//       event.preventDefault();
  
//       // Mengambil nilai dari form
//       const rentalStartDate = document.getElementById('rental-start-date').value;
//       const rentalEndDate = document.getElementById('rental-end-date').value;
//       const bookingCode = document.getElementById('booking-code').value;
//       const customerName = document.getElementById('customer-name').value;
//       const customerPhone = document.getElementById('customer-phone').value;
//       const customerEmail = document.getElementById('customer-email').value;
  
//       // Validasi tambahan jika diperlukan
//       if (!rentalStartDate || !rentalEndDate || !customerName || !customerPhone || !customerEmail) {
//         Swal.fire(
//           'Error!',
//           'Silakan lengkapi semua field.',
//           'error'
//         );
//         return;
//       }
  
//       // Validasi bahwa tanggal selesai sewa tidak lebih awal dari tanggal mulai
//       if (new Date(rentalEndDate) <= new Date(rentalStartDate)) {
//         Swal.fire(
//           'Error!',
//           'Tanggal selesai sewa harus lebih awal dari tanggal mulai sewa.',
//           'error'
//         );
//         return;
//       }
  
//       // Menghitung durasi sewa dalam hari
//       const startDate = new Date(rentalStartDate);
//       const endDate = new Date(rentalEndDate);
//       const rentalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
//       const rentalStartFormatted = startDate.toLocaleDateString('id-ID', { 
//         year: 'numeric', month: 'long', day: 'numeric'
//       });
//       const rentalEndFormatted = endDate.toLocaleDateString('id-ID', { 
//         year: 'numeric', month: 'long', day: 'numeric'
//       });
  
//       // Simpan data booking
//       const booking = {
//         bookingCode,
//         customerName,
//         customerPhone,
//         customerEmail,
//         startDate: rentalStartDate,
//         endDate: rentalEndDate
//       };
//       saveBooking(booking);
  
//       // Menampilkan konfirmasi pemesanan
//       Swal.fire({
//         title: 'Konfirmasi Pemesanan',
//         html: `
//           <p><strong>Kode Booking:</strong> ${bookingCode}</p>
//           <p><strong>Tanggal Mulai Sewa:</strong> ${rentalStartFormatted}</p>
//           <p><strong>Tanggal Selesai Sewa:</strong> ${rentalEndFormatted}</p>
//           <p><strong>Durasi Sewa:</strong> ${rentalDays} hari</p>
//           <p><strong>Nama:</strong> ${customerName}</p>
//           <p><strong>No. HP:</strong> ${customerPhone}</p>
//           <p><strong>Email:</strong> ${customerEmail}</p>
//           <hr>
//           <p><strong>Ketentuan Denda:</strong></p>
//           <p>Jika Anda terlambat mengembalikan kendaraan, denda sebesar Rp ${finePerDay.toLocaleString('id-ID')} per hari keterlambatan akan dikenakan.</p>
//         `,
//         icon: 'info',
//         showCancelButton: true,
//         confirmButtonText: 'Konfirmasi',
//         cancelButtonText: 'Batal'
//       }).then((result) => {
//         if (result.isConfirmed) {
//           // Aksi setelah konfirmasi, misalnya menyimpan data ke server
//           // Untuk saat ini, kita hanya menampilkan pesan sukses
//           Swal.fire(
//             'Sukses!',
//             'Pemesanan Anda telah berhasil.',
//             'success'
//           );
//           // Menutup modal pemesanan dan reset form
//           closeBookingModal();
//         }
//       });
//     });
  
//     // Fungsi untuk menangani pengiriman formulir pengembalian
//     document.getElementById('return-form').addEventListener('submit', function(event) {
//       event.preventDefault();
  
//       // Mengambil nilai dari form
//       const actualReturnDate = document.getElementById('actual-return-date').value;
//       const bookingCode = document.getElementById('return-booking-code').value;
  
//       // Validasi tambahan jika diperlukan
//       if (!actualReturnDate || !bookingCode) {
//         Swal.fire(
//           'Error!',
//           'Silakan lengkapi semua field.',
//           'error'
//         );
//         return;
//       }
  
//       // Dapatkan data booking berdasarkan bookingCode
//       const booking = getBookingByCode(bookingCode);
//       if (!booking) {
//         Swal.fire(
//           'Error!',
//           'Kode Booking tidak ditemukan.',
//           'error'
//         );
//         return;
//       }
  
//       const expectedReturnDate = new Date(booking.endDate);
//       const actualReturn = new Date(actualReturnDate);
  
//       let fine = 0;
//       if (actualReturn > expectedReturnDate) {
//         const lateDays = Math.ceil((actualReturn - expectedReturnDate) / (1000 * 60 * 60 * 24));
//         fine = lateDays * finePerDay;
//       }
  
//       const actualReturnFormatted = actualReturn.toLocaleDateString('id-ID', { 
//         year: 'numeric', month: 'long', day: 'numeric'
//       });
  
//       // Menampilkan hasil pengembalian
//       Swal.fire({
//         title: 'Hasil Pengembalian',
//         html: `
//           <p><strong>Kode Booking:</strong> ${bookingCode}</p>
//           <p><strong>Tanggal Pengembalian Aktual:</strong> ${actualReturnFormatted}</p>
//           ${fine > 0 ? `<p><strong>Anda terlambat mengembalikan kendaraan sebesar Rp ${fine.toLocaleString('id-ID')}.</strong></p>` : `<p><strong>Terima kasih telah mengembalikan kendaraan tepat waktu.</strong></p>`}
//         `,
//         icon: fine > 0 ? 'warning' : 'success',
//         confirmButtonText: 'OK'
//       }).then((result) => {
//         if (result.isConfirmed) {
//           // Aksi setelah pengembalian, misalnya memperbarui status booking di server
//           // Untuk saat ini, kita hanya menutup modal pengembalian
//           closeReturnModal();
//         }
//       });
//     });
  
//     // Fungsi untuk menghasilkan Kode Booking
//     function generateBookingCode() {
//       const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//       let code = 'BK';
//       for (let i = 0; i < 6; i++) {
//         code += chars.charAt(Math.floor(Math.random() * chars.length));
//       }
//       return code;
//     }
  
//     // Hamburger Menu Toggle
//     const hamburgerMenu = document.getElementById('hamburger-menu');
//     const mobileMenu = document.getElementById('mobile-menu');
  
//     hamburgerMenu.addEventListener('click', () => {
//       mobileMenu.classList.toggle('hidden');
//     });
  
//     // Filter Function
//     window.filterCars = function() {
//       const selectedBrand = document.getElementById('brandFilter').value;
//       const filteredCars = selectedBrand ? cars.filter(car => car.brand === selectedBrand) : cars;
      
//       carContainer.innerHTML = filteredCars.map((car, index) => `
//         <div class="bg-white shadow-md rounded-lg p-6 car-item animate-car-card ${'delay-' + ((index % 6) + 1)}" data-brand="${car.brand}" data-price="${car.price}" data-color="${car.color}" data-plate="${car.plate}" data-year="${car.year}" data-model="${car.model}">
//           <img src="${car.image}" alt="${car.brand} ${car.model}" class="mb-4 rounded-lg w-full h-48 object-cover">
//           <h3 class="text-xl font-bold mb-2">${car.brand} ${car.model}</h3>
//           <p class="mb-4">Harga: Rp ${car.price.toLocaleString('id-ID')} / hari</p>
//           <button class="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition transform hover:scale-105 duration-300 w-full" onclick="openDetailsModal(this)">Detail</button>
//         </div>
//       `).join('');
  
//       // Trigger reflow to restart CSS animations
//       void carContainer.offsetWidth;
//     }
  
//     // Event Listener untuk Formulir Saran dan Masukan
//     document.getElementById('feedback-form').addEventListener('submit', function(event) {
//       event.preventDefault();
  
//       const form = event.target;
//       const formData = new FormData(form);
  
//       fetch(form.action, {
//         method: form.method,
//         body: formData,
//         headers: {
//           'Accept': 'application/json'
//         }
//       }).then(response => {
//         if (response.ok) {
//           Swal.fire(
//             'Terima Kasih!',
//             'Saran dan masukan Anda telah kami terima.',
//             'success'
//           );
//           form.reset();
//         } else {
//           response.json().then(data => {
//             if (Object.hasOwn(data, 'errors')) {
//               Swal.fire(
//                 'Error!',
//                 data["errors"].map(error => error["message"]).join(", "),
//                 'error'
//               );
//             } else {
//               Swal.fire(
//                 'Error!',
//                 'Maaf, terjadi kesalahan. Silakan coba lagi.',
//                 'error'
//               );
//             }
//           });
//         }
//       }).catch(error => {
//         Swal.fire(
//           'Error!',
//           'Maaf, terjadi kesalahan. Silakan coba lagi.',
//           'error'
//         );
//       });
//     });
  
//     // Fungsi untuk menutup modal pengembalian dengan animasi fade-out
//     window.closeReturnModal = function() {
//       const modal = document.getElementById('return-modal');
//       modal.classList.add('animate-fade-out');
  
//       // Setelah animasi selesai, sembunyikan modal dan hapus kelas animasi
//       setTimeout(() => {
//         modal.classList.add('hidden');
//         modal.classList.remove('animate-fade-out');
//       }, 500); // Sesuaikan durasi dengan animasi CSS
//     }
  
//     // Fungsi untuk menutup modal detail dengan animasi fade-out (opsional)
//     window.closeDetailsModal = function() {
//       const modal = document.getElementById('details-modal');
//       modal.classList.add('animate-fade-out');
  
//       // Setelah animasi selesai, sembunyikan modal dan hapus kelas animasi
//       setTimeout(() => {
//         modal.classList.add('hidden');
//         modal.classList.remove('animate-fade-out');
//       }, 500); // Sesuaikan durasi dengan animasi CSS
//     }
  
//     // Intersection Observer untuk animasi saat scroll (opsional)
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible-animation');
//           entry.target.classList.remove('hidden-animation');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.1 });
  
//     const elements = document.querySelectorAll('.hidden-animation');
//     elements.forEach(el => observer.observe(el));
//   });
  