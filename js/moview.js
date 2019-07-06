window.onload = function() {
    var divDom = document.getElementById("welcome-modal");
    document.getElementById("modalBtn").onclick = function() {
        divDom.style.display = "none";
    };
};