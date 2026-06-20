// 1. Hàm tính toán GIỮ NGUYÊN của Giang (Bỏ dòng require('prompt-sync') đi nhé)
function kiemTraSNT(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 2. Móc nối các thành phần từ HTML sang JS thông qua ID
let oNhap = document.getElementById("oNhapSo");
let nutBtn = document.getElementById("nutKiemTra");
let theHienThongBao = document.getElementById("ketQuaSNT");

// 3. Viết lệnh: KHI BẤM NÚT thì làm gì?
nutBtn.addEventListener("click", function() {
    
    // Lấy giá trị mà người dùng gõ vào ô input, chuyển thành số nguyên (parseInt)
    let giaTriNhapVao = parseInt(oNhap.value);
    
    // Gọi hàm kiểm tra SNT của Giang
    if (kiemTraSNT(giaTriNhapVao)) {
        // Thay vì console.log, ta gán chữ vào HTML để nó hiện lên web
        theHienThongBao.innerText = giaTriNhapVao + " là số nguyên tố.";
    } else {
        theHienThongBao.innerText = giaTriNhapVao + " không phải là số nguyên tố.";
    }
});