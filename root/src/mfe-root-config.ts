import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@mfe/react-routers",
//   app: () => System.import("@mfe/react-routers"),
//   activeWhen: () => true
// });

// registerApplication({
//   name: "@mfe/vue-login",
//   app: () => System.import("@mfe/vue-login"),
//   activeWhen: ['/login']
// });



// start({
//   urlRerouteOnly: true,
// });


fetch('https://run.mocky.io/v3/852d3942-3c7a-42dc-8a02-5d1f97570bc9')
  .then(resp => resp.json())
  .then(data => {
    data.applications.forEach(app => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.activeWhen
    
      });
    })
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    })
  })