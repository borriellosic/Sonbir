function hesapla() {
    let yolcuSayisi = parseInt(document.getElementById("yolcuSayisi").value);
    let kisiBasiEuro = parseFloat(document.getElementById("euroHarcama").value);
    let kisiBasiTL = parseFloat(document.getElementById("tlHarcama").value);

    let toplamYolcu = yolcuSayisi * 2;
    let toplamEuro = toplamYolcu * kisiBasiEuro;
    let toplamTL = toplamYolcu * kisiBasiTL;

    document.getElementById("toplamYolcu").innerText = toplamYolcu;
    document.getElementById("toplamEuro").innerText = toplamEuro.toFixed(2);
    document.getElementById("toplamTL").innerText = toplamTL.toFixed(2);
}
