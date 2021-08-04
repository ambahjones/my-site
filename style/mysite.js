let tabs = document.querySelectorAll('.tab');
let panels = document.querySelectorAll('.panel');
let projectNav = document.querySelector('.projectTabNav');

projectNav.addEventListener("click", event => {
    const id = event.target.dataset.id;
    if (id) {
        tabs.forEach(tab => {
            //change active on tabs
            tab.classList.remove("active");
            event.target.classList.add("active");
        });
        //change active on panels
        panels.forEach(panel => {
            panel.classList.remove("active");
        })
        const activePanel = document.getElementById(id);
        activePanel.classList.add("active");
    }
});