if (
    window.BILI_PLAT_COMPONENTS &&
    window.BILI_PLAT_COMPONENTS['h5-baseinfo'] &&
    window.__initialState &&
    window.__initialState.BaseInfo
) {
    window.BILI_PLAT_COMPONENTS['h5-baseinfo'].component(window.__initialState.BaseInfo)
}