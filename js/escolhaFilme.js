document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn-select");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove selection from all time slots
            document.querySelectorAll(".time-slot").forEach(slot => {
                slot.classList.remove("selected");
            });

            // Add selection to the clicked time slot
            this.closest('.time-slot').classList.add("selected");
        });
    });
});