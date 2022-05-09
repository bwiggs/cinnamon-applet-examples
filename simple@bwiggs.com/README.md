# Simple Applet

The "hello world" cinnamon applet.

## Applet types

Your applet class can inherit from one of a few different Applet types:

- `TextApplet` - Applet that shows text in the menubar.
- `IconApplet` - Applet that shows an icon in the menubar.
- `TextIconApplet` - Applet that shoes an icon and a text in the menubar. 

### TextApplet

```js
class MyApplet extends Applet.TextApplet {
    constructor(metadata, orientation, panel_height, instance_id) {
        super(orientation, panel_height, instance_id);
        this.set_applet_label(UUID);
        this.set_applet_tooltip("hello world!");
    }
}
```

```js
class MyApplet extends Applet.IconApplet {
    constructor(metadata, orientation, panel_height, instance_id) {
        super(orientation, panel_height, instance_id);
        
        // full color icon
        this.set_applet_icon("weather-clear");
        
        // symbolic (black/white) icon
        this.set_applet_icon_symbolic_name("weather-clear")
        this.set_applet_tooltip("hello world!");
    }
}
```

```js
class MyApplet extends Applet.TextIconApplet {
    constructor(metadata, orientation, panel_height, instance_id) {
        super(orientation, panel_height, instance_id);
        this.set_applet_label(UUID);
        this.set_applet_icon_name("weather-clear");
        this.set_applet_tooltip("hello world!");
    }
}
```

# Resources

- Cinnamon Applet Source Code - https://github.com/linuxmint/cinnamon/blob/master/js/ui/applet.js
- Gnome HIG - Symbolic Icons - https://developer.gnome.org/hig/guidelines/ui-icons.html?highlight=symbolic#symbolic-icon-creation