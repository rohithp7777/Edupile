function expand(idname) {
  document.querySelector("#" + idname).classList.add("reveal");
}
function shrink(idname) {
  document.querySelector("#" + idname).classList.remove("reveal");
}
