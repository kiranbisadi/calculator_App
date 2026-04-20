const display = document.getElementById("exp");

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        // 1. Clear
        if (value === "C") {
            display.value = "";
        }

        // 2. Backspace
        else if (value === "←") {
            display.value = display.value.slice(0, -1);
        }

        // 3. Calculate
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }

        // 4. Square
        else if (value === "X²") {
            display.value = Number(display.value) ** 2;
        }

        // 5. Cube
        else if (value === "X³") {
            display.value = Number(display.value) ** 3;
        }

        // 6. Default (numbers + operators)
        else {
            display.value += value;
        }

    });

});