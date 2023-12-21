function calculateVolume() {
    const radius = document.getElementById('radius').value;
    const height = document.getElementById('height').value;
    const pi = 3.14;

    if (radius && height) {
        const volume = Math.pow(radius, 2) * pi * height;
        document.getElementById('result').innerText = `Zapremina valjka je: ${volume.toFixed(2)}`;
    } else {
        alert("Molim vas unesite sve potrebne vrednosti.");
    }
}
