(async () => {
let resp = await fetch('https://api.github.com/repos/DetectionHSL/DetectionHSL/releases/latest', {
    method: 'GET'
});
if(resp.ok){
    resp = await resp.json();

}
})();