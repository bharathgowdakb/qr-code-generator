document.getElementById("generateButton").addEventListener("click", function() {
    const text = document.getElementById("qrInput").value;
    const qrContainer = document.getElementById("qrCode");

    // Clear previous QR code
    qrContainer.innerHTML = "";

    if (text) {
        // Generate QR code
        let qr = new QRCode(qrContainer, {
            text: text,
            width: 200,
            height: 200
        });

        // Show the download button
        setTimeout(() => {
            const qrCanvas = qrContainer.querySelector("canvas");
            if (qrCanvas) {
                document.getElementById("downloadButton").style.display = "block";
                document.getElementById("downloadButton").addEventListener("click", function() {
                    const link = document.createElement("a");
                    link.href = qrCanvas.toDataURL("image/png");
                    link.download = "qr_code.png";
                    link.click();
                });
            }
        }, 500);
    } else {
        alert("Please enter some text!");
    }
});

