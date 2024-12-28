var img = document.getElementById("viewProjImg");
var modalImgInfo = document.getElementById("modal-img-info");
var imageInModal = document.getElementById("imageInModal");

img.addEventListener("click", opemInModal);

function opemInModal()
{
    imageInModal.src = img.src;
    modalImgInfo.innerHTML = img.getAttribute("title");
    openModal();
}

var modal, close;
modal = document.getElementById("gModal");
close = document.getElementById("close-modal");

close.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

