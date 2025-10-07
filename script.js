// Cuộn mượt đến form đặt hàng
function scrollToOrder() {
  document.getElementById("order").scrollIntoView({ behavior: "smooth" });
}

// Gửi form đơn hàng (demo)
document.getElementById("order-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Cảm ơn bạn! Đơn hàng của bạn đã được ghi nhận.");
  e.target.reset();
});
