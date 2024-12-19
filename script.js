// Harita oluştur
const map = L.map('map').setView([41.02005, 40.52345], 13); // Rize'nin koordinatları

// OpenStreetMap taban haritası
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Marker ekleme
const marker = L.marker([41.02005, 40.52345]).addTo(map);
marker.bindPopup("<b>Rize</b><br>Karadeniz'in incisi.").openPopup();

// Kullanıcının mevcut konumunu bulma
const currentLocationBtn = document.getElementById('currentLocationBtn');
currentLocationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                map.setView([latitude, longitude], 13);
                L.marker([latitude, longitude])
                    .addTo(map)
                    .bindPopup("Mevcut Konumunuz")
                    .openPopup();
            },
            () => {
                alert("Konum bilginize erişilemiyor.");
            }
        );
    } else {
        alert("Tarayıcınız konum özelliğini desteklemiyor.");
    }
});

