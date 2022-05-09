const Applet = imports.ui.applet;

class MyApplet extends Applet.TextApplet {
    constructor(metadata, orientation, panel_height, instance_id) {
        super(orientation, panel_height, instance_id);
        this.set_applet_label("hello world");
        this.set_applet_tooltip("this is the tooltip");

    }
}

function main(metadata, orientation, panel_height, instance_id) {
    return new MyApplet(metadata, orientation, panel_height, instance_id);
}