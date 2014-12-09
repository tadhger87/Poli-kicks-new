function enableBeforeUnload() {
    window.onbeforeunload = function (e) {
        return "Are you sure?";
    };
}
function disableBeforeUnload() {
    window.onbeforeunload = null;
}