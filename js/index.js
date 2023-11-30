(function () {
    const range = document.getElementById('range')
    range.addEventListener('change', function (e) {
        document.getElementById('value').value = e.target.value;
    })
    range.addEventListener('input', function (e) {
        document.getElementById('value').value = e.target.value;
    })
})()
