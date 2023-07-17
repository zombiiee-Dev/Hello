const clickMe = document.querySelector("#click");
const title = document.querySelector("#title");

function changeTitle() {
    clickMe.remove();
    title.textContent="Hi, i'm Phung. I try to learn and practise excersice about HTML, CSS, JS every day. And thanks for your supported. "
}
clickMe.addEventListener("click",()=>{
    changeTitle();
});