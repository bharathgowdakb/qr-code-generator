document.getElementById('generateButton').addEventListener('click', function() {
    const text = document.getElementById('qrInput').value;
    if (text) {
        // Generate the QR code using the QRCode library
        QRCode.toDataURL(text, function (err, url) {
            if (err) throw err;
            // Display the QR code image
            document.getElementById('qrCode').innerHTML = `<img src="${url}" alt="QR Code" />`;

            // Show the download button
            document.getElementById('downloadButton').style.display = 'block';
            // Add download functionality
            document.getElementById('downloadButton').addEventListener('click', function() {
                const link = document.createElement('a');
                link.href = url;
                link.download = 'qrcode.png';
                link.click();
            });
        });
    } else {
        alert("Please enter some text!");
    }
});
