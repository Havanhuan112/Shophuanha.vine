// Hiển thị thông tin thanh toán
function showPaymentInfo(fileName, filePrice) {
    const modal = document.getElementById("paymentModal");
    document.getElementById("modalFileName").textContent = fileName;
    document.getElementById("modalFilePrice").textContent = filePrice;

    // Hiển thị modal
    modal.classList.add("show");
}

// Đóng thông tin thanh toán
function closePaymentModal() {
    const modal = document.getElementById("paymentModal");
    modal.classList.remove("show");
}
// Hiển thị thông báo chào mừng
window.onload = function () {
    setTimeout(function () {
        const popup = document.getElementById("welcomePopup");
        popup.classList.add("show");
    }, 500); // Hiển thị sau 0.5 giây
};

// Đóng thông báo chào mừng
function closeWelcomePopup() {
    const popup = document.getElementById("welcomePopup");
    popup.classList.remove("show");
}
