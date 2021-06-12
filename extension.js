// Example #1

const {St, Clutter} = imports.gi;
const Main = imports.ui.main;
const Util = imports.misc.util;
let panelButton;
function _toggle_light(){
    Util.spawnCommandLine("/home/thatguy/.myscripts/toggle_lights")
}
function init () {
    // Create a Button  
    panelButton = new St.Bin({
        style_class : "panel-button",
        reactive:true,
        can_focus:true,
        track_hover:true
    });
    panelButtonText = new St.Label({
        text : "",
        y_align: Clutter.ActorAlign.CENTER,
    });
    panelButton.set_child(panelButtonText);
    panelButton.connect('button-press-event',_toggle_light)
}

function enable () {
    // Add the button to the panel
    Main.panel._rightBox.insert_child_at_index(panelButton, 0);
    toggleLight()
}

function disable () {
    // Remove the added button from panel
    Main.panel._rightBox.remove_child(panelButton);
}