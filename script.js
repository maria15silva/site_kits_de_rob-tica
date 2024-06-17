/**
    Scripts do site Robótica Prática
    @author Professor José de Assis
 */

// Atualizar automaticamente o ano (footer - copyright)  
let ano = document.getElementById("copyrightYear")
let anoAtual = new Date().getFullYear()
ano.textContent = anoAtual

document.getElementById('color-filter').addEventListener('change', function() {
    const filterClass = this.value;
    document.body.className = 'filter-image';
    if (filterClass !== 'default') {
        document.body.classList.add(filterClass);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const increaseFontSizeBtn = document.getElementById("increase-font-size");
    const decreaseFontSizeBtn = document.getElementById("decrease-font-size");
    const resizableElements = document.querySelectorAll(".resizable");
    let currentFontSize = 16; // Tamanho de fonte padrão

    function setFontSize(size) {
        resizableElements.forEach(element => {
            element.style.fontSize = size + "px";
        });
    }

    increaseFontSizeBtn.addEventListener("click", function() {
        currentFontSize += 2;
        setFontSize(currentFontSize);
    });

    decreaseFontSizeBtn.addEventListener("click", function() {
        currentFontSize -= 2;
        setFontSize(currentFontSize);
    });
});

document.getElementById('darkModeButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});