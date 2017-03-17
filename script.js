function verander(){
    var breedte = document.getElementById('breedte');
    var hoogte = document.getElementById('hoogte');
    var kleur = document.getElementById('kleur');
    var vierkant = document.getElementById('vierkant');
    vierkant.style.width = breedte.value + "px";
    vierkant.style.height = hoogte.value + "px";
    vierkant.style.backgroundColor = kleur.value;
}