/* =====================================
Tatitalk - Book Viewer
===================================== */

// صفحات نمونه کتاب
const pages = Array.from({ length: 20 }, (_, index) => ({
number: index + 1,
image: "assets/images/book-pages/page-${index + 1}.jpg",
audios: [],
qr: ""
}));

// عناصر صفحه
const gallery = document.getElementById("pages-gallery");
const pageImage = document.getElementById("current-page-image");
const pageNumber = document.getElementById("page-number");
const totalPages = document.getElementById("total-pages");

const audioContainer = document.getElementById("audio-container");
const qrContainer = document.getElementById("qr-container");

const prevButton = document.getElementById("prev-page");
const nextButton = document.getElementById("next-page");

const galleryPrev = document.getElementById("gallery-prev");
const galleryNext = document.getElementById("gallery-next");

let currentIndex = 0;

// ساخت تصاویر کوچک صفحات
function createGallery() {

gallery.innerHTML = "";

pages.forEach((page, index) => {

    const thumbnail = document.createElement("div");
    thumbnail.className = "book-page-thumbnail";

    const img = document.createElement("img");
    img.src = page.image;
    img.alt = `صفحه ${page.number}`;

    // در صورت نبود تصویر نمونه
    img.onerror = function () {
        this.style.display = "none";
        thumbnail.classList.add("image-placeholder");
    };

    const label = document.createElement("span");
    label.textContent = `صفحه ${page.number}`;

    thumbnail.appendChild(img);
    thumbnail.appendChild(label);

    thumbnail.addEventListener("click", () => {
        showPage(index);
    });

    gallery.appendChild(thumbnail);

});

}

// نمایش صفحه انتخاب شده
function showPage(index) {

if (index < 0 || index >= pages.length) return;

currentIndex = index;

const page = pages[index];

pageImage.src = page.image;
pageImage.alt = `صفحه ${page.number}`;

pageNumber.textContent = page.number;
totalPages.textContent = pages.length;

showAudios(page);
showQR(page);
updateGallerySelection();

prevButton.disabled = currentIndex === 0;
nextButton.disabled = currentIndex === pages.length - 1;

}

// مشخص کردن تصویر کوچک فعال
function updateGallerySelection() {

const thumbnails = document.querySelectorAll(
    ".book-page-thumbnail"
);

thumbnails.forEach((thumbnail, index) => {

    thumbnail.classList.toggle(
        "active",
        index === currentIndex
    );

});

}

// نمایش فایل‌های صوتی
function showAudios(page) {

audioContainer.innerHTML = "";

if (!page.audios || page.audios.length === 0) {

    audioContainer.innerHTML =
        "<p>فایل صوتی این صفحه هنوز اضافه نشده است.</p>";

    return;
}

page.audios.forEach((audio, index) => {

    const item = document.createElement("div");
    item.className = "audio-item";

    const title = document.createElement("p");
    title.textContent =
        audio.title || `فایل صوتی ${index + 1}`;

    const player = document.createElement("audio");
    player.controls = true;
    player.src = audio.src;

    item.appendChild(title);
    item.appendChild(player);

    audioContainer.appendChild(item);

});

}

// نمایش QR Code
function showQR(page) {

qrContainer.innerHTML = "";

if (!page.qr) {

    qrContainer.innerHTML =
        '<div class="qr-placeholder">QR</div>';

    return;
}

const qrImage = document.createElement("img");

qrImage.src = page.qr;
qrImage.alt = "QR Code";

qrContainer.appendChild(qrImage);

}

// صفحه قبلی
prevButton.addEventListener("click", () => {

if (currentIndex > 0) {
    showPage(currentIndex - 1);
}

});

// صفحه بعدی
nextButton.addEventListener("click", () => {

if (currentIndex < pages.length - 1) {
    showPage(currentIndex + 1);
}

});

// حرکت گالری به عقب
galleryPrev.addEventListener("click", () => {

gallery.scrollBy({
    left: -300,
    behavior: "smooth"
});

});

// حرکت گالری به جلو
galleryNext.addEventListener("click", () => {

gallery.scrollBy({
    left: 300,
    behavior: "smooth"
});

});

// شروع نمایش کتاب
createGallery();
showPage(0);