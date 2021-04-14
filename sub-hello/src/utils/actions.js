function emptyAction() {
  // 警告：提示当前使用的是空 Action
  console.warn("Current execute action is empty!");
}
class Actions {
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction
  }
  setActions(actions) {
    this.actions = actions;
  }
  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args);
  }
  setGlobalState(...args) {
    return this.actions.setGlobalState(...args);
  }
}

export default new Actions();