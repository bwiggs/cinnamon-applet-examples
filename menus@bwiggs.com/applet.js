const Applet = imports.ui.applet;
const Lang = imports.lang;
const PopupMenu = imports.ui.popupMenu;
const St = imports.gi.St;
const Util = imports.misc.util;

class MyApplet extends Applet.TextApplet {
    constructor(metadata, orientation, panel_height, instance_id) {
        super(orientation, panel_height, instance_id);
        this.set_applet_label("Menus");
        this.set_applet_tooltip("this shows how to use menus");

        /**
         * Menu Manager and Menu
         */

        this.menuManager = new PopupMenu.PopupMenuManager(this);
        this.menu = new Applet.AppletPopupMenu(this, orientation);
        this.menuManager.addMenu(this.menu);

        /**
         * Text Menu Items
         */

        this.menu.addMenuItem(new PopupMenu.PopupMenuItem("first item"));
        this.menu.addMenuItem(new PopupMenu.PopupMenuItem("second item"));

        // separator menu item
        this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem());

        /**
         * Icon Menu Items
         */

        let iconSymbolic = new PopupMenu.PopupIconMenuItem("symbolic icon", "appointment-soon", St.IconType.SYMBOLIC);
        let iconColor = new PopupMenu.PopupIconMenuItem("color icon", "appointment-soon", St.IconType.FULLCOLOR);
        this.menu.addMenuItem(iconSymbolic);
        this.menu.addMenuItem(iconColor);
        
        this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem());


        /**
         * Slider Menu Items
         */

        this.menu.addMenuItem(new PopupMenu.PopupSliderMenuItem(0));
        
        this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem());

        /**
         * Switch Menu Items
         */

        this.menu.addMenuItem(new PopupMenu.PopupSwitchMenuItem("switch with text", false));
        this.menu.addMenuItem(new PopupMenu.PopupSwitchIconMenuItem("switch with icon", true, "audio-volume-high", St.IconType.SYMBOLIC));

        this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem());

        /**
         * connecting signals
         */

        let githubItem = new PopupMenu.PopupMenuItem("open github.com");
        githubItem.connect('activate', () => { Util.spawnCommandLine("xdg-open https://github.com") });
        this.menu.addMenuItem(githubItem);

        this.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem());

        /**
         * Submenus
         */

        let submenuDistros = new PopupMenu.PopupSubMenuMenuItem("Linux Distros")
        submenuDistros.menu.addMenuItem(new PopupMenu.PopupMenuItem("Linux Mint"));
        submenuDistros.menu.addMenuItem(new PopupMenu.PopupMenuItem("Arch"));
        submenuDistros.menu.addMenuItem(new PopupMenu.PopupMenuItem("Ubuntu"));
        submenuDistros.menu.addMenuItem(new PopupMenu.PopupMenuItem("Gentoo"));
        this.menu.addMenuItem(submenuDistros);
    }



    on_applet_clicked() {
        this.menu.toggle();
    }
}

function main(metadata, orientation, panel_height, instance_id) {
    return new MyApplet(metadata, orientation, panel_height, instance_id);
}