# Mainloop applet

Use a `mainloop` to do things on a schedule.

```js
// import mainloop
const Mainloop = imports.mainloop;

function doSomething() {
    // ...
    return true; // keeps the mainloop alive
}

// creation.
let id = Mainloop.timeout_add(UPDATE_INTERVAL_SEC, doSomething);
let id = Mainloop.timeout_add_seconds(UPDATE_INTERVAL_MS, doSomething);

// be sure to cleanup the timeout when you're done
Mainloop.source_remove(id);
```

## Resources

- Cinnamon mainloop Source Code - https://github.com/linuxmint/cjs/blob/master/modules/script/mainloop.js
- GTK's mainloop documentation - https://docs.gtk.org/glib/main-loop.html