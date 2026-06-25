function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
}

function hitungTransaksi() {
  const nama = document.getElementById("namaPelanggan").value.trim();
  const produk = document.getElementById("namaProduk").value.trim();
  const harga = parseFloat(document.getElementById("hargaProduk").value);
  const jumlah = parseInt(document.getElementById("jumlahBeli").value);

  if (nama === "" || produk === "" || isNaN(harga) || isNaN(jumlah)) {
    alert("Peringatan: Semua form wajib diisi!");
    return;
  }

  if (harga <= 0 || jumlah <= 0) {
    alert(
      "Peringatan: Harga produk dan Jumlah pembelian harus berupa angka lebih dari 0!",
    );
    return;
  }

  let totalBelanja = harga * jumlah;
  let potongan = 0;

  if (totalBelanja >= 400000) {
    potongan = totalBelanja * 0.1;
  } else {
    potongan = 0;
  }

  let totalBayar = totalBelanja - potongan;

  document.getElementById("outNama").innerText = nama;
  document.getElementById("outProduk").innerText = produk;
  document.getElementById("outTotalBelanja").innerText =
    formatRupiah(totalBelanja);
  document.getElementById("outPotongan").innerText = formatRupiah(potongan);
  document.getElementById("outTotalBayar").innerText = formatRupiah(totalBayar);

  document.getElementById("cardHasil").style.display = "block";
}

function resetForm() {
  const cardHasil = document.getElementById("cardHasil");
  cardHasil.style.display = "none";
  document.getElementById("outNama").innerText = "-";
  document.getElementById("outProduk").innerText = "-";
  document.getElementById("outTotalBelanja").innerText = "-";
  document.getElementById("outPotongan").innerText = "-";
  document.getElementById("outTotalBayar").innerText = "-";
}

document.addEventListener("DOMContentLoaded", () => {
  const formBelanja = document.getElementById("formBelanja");
  formBelanja.addEventListener("submit", (event) => {
    event.preventDefault();
    hitungTransaksi();
  });
  formBelanja.addEventListener("reset", () => {
    resetForm();
  });
});
