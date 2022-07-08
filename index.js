let colorType = document.getElementById("input");
let modeType = document.getElementById("dropdown");

let colorsHTML = "";


function renderAPI() {
    let colorInput = colorType.value.substring(1);
    let modeInput = modeType.value.toLowerCase();
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput}&mode=${modeInput}&count=5`, {method: "GET"})
        .then(resp => resp.json())
        .then(data => {
            for(let i = 0; i < data.colors.length; i++) {
                colorsHTML = `
                    <div class="colors-block">
                        <div id="color0" class="color-block"></div>
                        <div id="color1" class="color-block"></div>
                        <div id="color2" class="color-block"></div>
                        <div id="color3" class="color-block"></div>
                        <div id="color4" class="color-block"></div>
                    </div>
                
                    <div class="hex-block">
                        <h3 id="hexVal0"</h3>
                        <h3 id="hexVal1"</h3>
                        <h3 id="hexVal2"</h3>
                        <h3 id="hexVal3"</h3>
                        <h3 id="hexVal4"</h3>
                    </div>
                `
                document.getElementById("colors").innerHTML = colorsHTML;
                
                document.getElementById("color0").style.backgroundColor = `${data.colors[0].hex.value}`;
                document.getElementById("color1").style.backgroundColor = `${data.colors[1].hex.value}`;
                document.getElementById("color2").style.backgroundColor = `${data.colors[2].hex.value}`;
                document.getElementById("color3").style.backgroundColor = `${data.colors[3].hex.value}`;
                document.getElementById("color4").style.backgroundColor = `${data.colors[4].hex.value}`;
                
                document.getElementById("hexVal0").innerHTML += `${data.colors[0].hex.value}`
                document.getElementById("hexVal1").innerHTML += `${data.colors[1].hex.value}`
                document.getElementById("hexVal2").innerHTML += `${data.colors[2].hex.value}`
                document.getElementById("hexVal3").innerHTML += `${data.colors[3].hex.value}`
                document.getElementById("hexVal4").innerHTML += `${data.colors[4].hex.value}`
            }
        })
}

document.getElementById("btn").addEventListener("click", () => {
    renderAPI();
})