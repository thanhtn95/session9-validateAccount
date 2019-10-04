let result = document.getElementById("result");

function check() {
    let regex = /^[_a-z0-9]{6,}$/;
    let input = document.getElementById("inp");
    if (regex.test(input.value)) {
        result.innerText = " Valid";
    } else result.innerText = " Invalid";
    input.focus();
}