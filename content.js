function extractStylingInfo () {
    const resultContainer = document.getElementById("resultContainer");
    const colorResult = document.getElementById("colorResult");
    const fontResult = document.getElementById("fontResult");
    const spacingResult = document.getElementById("spacingResult");

    const elements = document.getElementsByTagName("*");

    for(let i = 0; i < elements.length; i++ ){
        const elements = elements[i];
        const { color, fontFamily, fontSize, lineHeight } = window.getComputedStyle(element);


        //extracted information

        const elementInfo = document.createElement("div")
        elementInfo.innerHTML = `
            <p>Element: ${element.tagNmae}</p>
            <p>Color: ${color}</p>
            <p>Font Family: ${fontFamily}</p>
            <p>Font Size: ${fontSize}</p>
            <p>Line Height: ${lineHeight}</p>
            <hr>
        `;

        colorResult.appendChild(elementInfo.cloneNode(true));
        fontResult.appendChild(elementInfo.cloneNode(true));
        spacingResult.appendChild(elementInfo.cloneNode(true));
    }

    resultContainer.style.display = "block";
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.message === "extract_styling_info"){
        extractStylingInfo();
    }
});