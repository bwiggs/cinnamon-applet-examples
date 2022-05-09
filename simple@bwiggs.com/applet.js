const Applet = imports.ui.applet;

var UUID;

class MyApplet extends Applet.IconApplet {
    constructor(metadata, orientation, panel_height, instance_id) {
        super(orientation, panel_height, instance_id);
        // this.set_applet_icon("weather-clear");
        this.set_applet_icon_symbolic_name("weather-clear")
        this.set_applet_tooltip("hello world!");
    }
}

function main(metadata, orientation, panel_height, instance_id) {
    UUID = metadata.uuid;
    return new MyApplet(metadata, orientation, panel_height, instance_id);
}