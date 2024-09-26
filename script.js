document.getElementById("uploadForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    if (!file) {
        document.getElementById("statusMessage").textContent = "Please select a file.";
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    document.getElementById("statusMessage").textContent = "Uploading...";

    try {
        // Placeholder for the backend API URL (you'll replace it later with your Node.js backend)
        const response = await fetch("https://your-backend-api.com/upload", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            document.getElementById("statusMessage").textContent = "File uploaded successfully!";
        } else {
            document.getElementById("statusMessage").textContent = "Upload failed!";
        }
    } catch (error) {
        document.getElementById("statusMessage").textContent = "Error uploading file!";
        console.error(error);
    }
});
