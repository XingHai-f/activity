// 检查 window 对象上是否存在一些特定的属性，然后在所有条件满足时调用一个方法
if (
    window.BILI_PLAT_COMPONENTS &&
    window.BILI_PLAT_COMPONENTS['h5-baseinfo'] &&
    window.__initialState &&
    window.__initialState.BaseInfo
) {
    window.BILI_PLAT_COMPONENTS['h5-baseinfo'].component(window.__initialState.BaseInfo)
}
