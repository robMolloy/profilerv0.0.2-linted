const MyPlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue, options) {
    // We call Vue.mixin() here to inject functionality into all components.
    Vue.mixin({
      data() {
        return { console };
      },
    });
  },
};

export default async ({ Vue }) => {
  Vue.use(MyPlugin);
};
