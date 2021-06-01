
shadow.cljs.devtools.client.env.module_loaded('main');

try { imperium.app.init(); } catch (e) { console.error("An error occurred when calling (imperium.app/init)"); throw(e); }