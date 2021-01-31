
function lowerThird(compName, textName) {
    var newComp = app.project.items.addComp(compName, 1000, 1000, 1, 10, 29.97);
    var bottomSolid = newComp.layers.addSolid([0.5,0.2,0.5], "Purple", 1000, 150, 1, 5);
    var textLayer = newComp.layers.addText(textName);

    bottomSolid.position.setValue([500, 950]);
    textLayer.position.setValue([150, 950]);

    //adding keys and opacity animation
    textLayer.opacity.addKey(0.2);
    textLayer.opacity.addKey(0.8);
    textLayer.opacity.addKey(3);
    textLayer.opacity.addKey(4);
    textLayer.opacity.setValueAtKey(1, 0);
    textLayer.opacity.setValueAtKey(2, 100);
    textLayer.opacity.setValueAtKey(3, 100);
    textLayer.opacity.setValueAtKey(4, 0);

    // adding keyes and position movement
    var bottomSolidPosition = bottomSolid.property("position");
    bottomSolidPosition.setValueAtTime(0, [500, 1100]);
    bottomSolidPosition.setValueAtTime(0.4, [500, 950]);

    var bottomSolidOpacity = bottomSolid.property("opacity");
    bottomSolidOpacity.setValueAtTime(3, 100);
    bottomSolidOpacity.setValueAtTime(4, 0);
}

//lowerThird("First comp", "OgtemAnimation");
app.beginUndoGroup("function")
var compNames = ["First comp", "Second comp", "Third comp"];
var textNames = ["Ognen Temelkovski", "Axel Rose", "Monica Bellucci" ];
for(var i = 0; i < compNames.length; i++){
    lowerThird(compNames[i], textNames[i]);
    }
app.endUndoGroup;
