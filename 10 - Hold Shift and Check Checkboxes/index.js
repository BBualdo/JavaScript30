const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastCheckedInput;

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", (e) => {
        // on check, check if shift is held
        if (e.shiftKey) {
            // if shift is held, find index of last checked input
            const indexOfLastChecked = Array.from(checkboxes).findIndex(c => c === lastCheckedInput);
            if (indexOfLastChecked) {
                // check all checkboxes with an index between found checkbox index and clicked checkbox index
                if (indexOfLastChecked < index) {
                    for (let i = indexOfLastChecked; i <= index; i++) {
                        checkboxes[i].checked = true;
                    }
                } else {
                    for (let i = indexOfLastChecked; i >= index; i--) {
                        checkboxes[i].checked = true;
                    }
                }
            }
        }

        lastCheckedInput = e.currentTarget;
    });
})


