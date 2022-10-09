const section = document.querySelector('.sect');
const btn = document.querySelector(".btn");
const areaDrops = document.querySelectorAll("section");


let i = 0;

btn.addEventListener("click", () => {
    const ndiv = document.createElement("div");
    ndiv.className = "draggable";
    ndiv.draggable = true;
    ndiv.id = `div${i}`;
    ndiv.textContent = `${i}`;

    ndiv.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", ndiv.id);
        event.dataTransfer.dropEffect = "move";
        event.dataTransfer.effectAllowed = "move";
        ndiv.style.opacity = 0.5;
    });
    ndiv.addEventListener("dragend", (event) => {
        ndiv.style.opacity = "";
        ndiv.parentElement.parentElement
            .querySelectorAll("section")
            .forEach((s) => {
                s.style.background = "";
            });
    });
    section.append(ndiv);

    i++;
});

btn.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", btn.id);
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
    btn.style.opacity = 0.5;
});
btn.addEventListener("dragend", (event) => {
    btn.style.opacity = "";
    btn.style.position = "relative";
    btn.parentElement.parentElement.querySelectorAll("section").forEach((s) => {
        s.style.background = "";
    });
    if (btn.parentElement.className === 'btn-section') {
        btn.style.position = "fixed";
    }
});

// divs.forEach((d) => {
//     d.addEventListener("dragstart", (event) => {
//         event.dataTransfer.setData("text/plain", d.id);
//         event.dataTransfer.dropEffect = "move";
//         event.dataTransfer.effectAllowed = "move";
//         d.style.opacity = 0.5;
//         //quistion
//     });
//     d.addEventListener("dragend", (event) => {
//         d.style.opacity = "";
//         d.parentElement.style.background = '';
//         //quistion
//     });
// });

areaDrops.forEach((areaDrop) => {
    areaDrop.addEventListener("dragenter", (event) => {
        if (event.dataTransfer.types[0] === "text/plain") {
            event.preventDefault();
            areaDrop.style.background = "";
        }
    });

    areaDrop.addEventListener("dragleave", (event) => {
        areaDrop.style.background = "rgb(74, 191, 227)";
    });

    areaDrop.addEventListener("dragover", (event) => {
        event.preventDefault();
        areaDrop.style.background = "rgb(74, 191, 227)";
    });

    areaDrop.addEventListener("drop", (event) => {
        if (event.dataTransfer.types[0] == "text/plain") {
            event.preventDefault();
            const ref = event.dataTransfer.getData("text/plain");
            const divvv = document.querySelector(`#${ref}`);
            if (divvv.parentElement !== areaDrop) {
                console.log(divvv);
                areaDrop.appendChild(divvv);
            }
            areaDrop.style.background = "";
        }
    });
});