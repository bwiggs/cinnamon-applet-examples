const Applet = imports.ui.applet;
const Lang = imports.lang;
const Mainloop = imports.mainloop;

const UPDATE_INTERVAL_SEC = 1; // seconds between updates
const UPDATE_INTERVAL_MS = 2000; // seconds between updates

class MyApplet extends Applet.TextApplet {
    constructor(metadata, orientation, panel_height, instance_id) {
        super(orientation, panel_height, instance_id);

        this.set_applet_label('MAINLOOP');
        this.set_applet_tooltip("mainloop sample code");
        
        this.count = 1;

        this._logLoopID = Mainloop.timeout_add(UPDATE_INTERVAL_MS, () => {
            // see ~/.xsession-errors for log output
            // tail -f ~/.xsession-errors
            global.log(`${metadata.uuid} ${this.count}`);
            return true;
        });

        // NOTE: the func that the mainloop calls must return true for it to keep being called
        // use Lang.bind to set the correct this context, so we can call methods on our class 
        this._updateLoopID = Mainloop.timeout_add_seconds(UPDATE_INTERVAL_SEC, Lang.bind(this, this.update_label));
    }

    update_label() {
        this.set_applet_label(`Update Count: ${this.count}`);
        this.count++;
        return true; // return true for our mainloop timer to remain active
    }

    // clean up the loop when we tear down
    on_applet_removed_from_panel() {
        Mainloop.source_remove(this._updateLoopID);
        Mainloop.source_remove(this._logLoopID);
    }
}

function main(metadata, orientation, panel_height, instance_id) {
    return new MyApplet(metadata, orientation, panel_height, instance_id);
}