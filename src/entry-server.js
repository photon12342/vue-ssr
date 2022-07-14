import { createApp } from "./main";

export default context => {
  
  return new Promise((resolve, reject) => {
    const {app, router, store} = createApp(context);
    router.push(context.url);

    router.onReady(() => {
      const comps = router.getMatchedComponents()
      Promise.all(comps.map(comp => {
        if(comp.asyncData) {
          return comp.asyncData({
            app,
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        context.state = store.state
        resolve(app);
      })
      .catch(reject)

    }, reject)
  })
}
