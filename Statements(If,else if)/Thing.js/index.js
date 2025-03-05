function GetDom() {
    let good = document.getElementById("Th1").value;
    if (good === "watch") {
        document.getElementById("THC1").innerHTML = ("thing is watch");
    }
    else if (good === "ring" ) {
        document.getElementById("THC1").innerHTML = ("thing is ring");
    }
    else if (good === "table") {
        document.getElementById("THC1").innerHTML = ("thing is table");
    }
    else if (good === "chair") {
        document.getElementById("THC1").innerHTML = ("thing is chair");
    }
    else {
        document.getElementById("THC1").innerHTML = ("input is invalid");
    }
}