const questions = document.querySelectorAll(".dropdown_title");

questions.forEach(question => {
    question.addEventListener("click",() => {

        if (question.classList.contains("active_title")) {
            question.classList.remove("active_title")
            question.nextElementSibling.classList.remove("active_text")
        } else {
            question.classList.add("active_title")
            question.nextElementSibling.classList.add("active_text")
        }
    })

    question.addEventListener("mouseenter", () => {
        question.classList.add("hover")
    })

    question.addEventListener("mouseleave", () => {
        question.classList.remove("hover")
    })
});

