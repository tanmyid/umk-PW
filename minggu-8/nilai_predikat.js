// percabangan if else if
let nilai = prompt("Masukkan IPK , 2.00 - 4.00");
let ket;
if (nilai >= 2.00 && nilai <= 2.75) {
	ket = "Memuaskan";
} else if (nilai >= 2.76 && nilai <= 3.50) {
	ket = "Sangat Memuaskan";
} else if (nilai >= 3.51 && nilai <= 4.00) {
	ket = "Mantap Lur";
} else {
	ket = "Angka yang dimasukkan tidak sesuai";
}
document.write(ket);