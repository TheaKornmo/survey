
// gjør alle knapper funksjonelle
function checkValue(){
    var himmelenErGronn = document.querySelector('input[name="himmelenErGronn"]:checked').value;
    var jordaErFlat = document.querySelector('input[name="jordaErFlat"]:checked').value;
    var venusErFirkantet = document.querySelector('input[name="venusErFirkantet"]:checked').value;
    var saturnErRund = document.querySelector('input[name="saturnErRund"]:checked').value;

    console.log(himmelenErGronn, jordaErFlat, venusErFirkantet, saturnErRund);
    
}