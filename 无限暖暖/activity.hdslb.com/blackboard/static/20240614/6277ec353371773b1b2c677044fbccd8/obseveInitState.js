let __initialState = window.__initialState
var __isInitStateExecute = false

Object.defineProperty(window, '__initialState', {
  get: function () {
    console.warn(
      'No longer compatible in the future. Please change the usage method to obtain data in this way'
    )
    var componentConfigMap = {}
    handlerGetInitState(componentConfigMap)

    var __newInitState = Object.assign(__initialState, componentConfigMap)

    return __newInitState
  }
})

function handlerGetInitState(componentConfigMap) {
  if (__isInitStateExecute) {
    return
  }
  function handlerLayerTree(arg) {
    if (componentConfigMap[arg.name]) {
      componentConfigMap[arg.name].push(Object.assign({$EvaUuid: arg.uuid}, arg.props))
    } else {
      componentConfigMap[arg.name] = [Object.assign({$EvaUuid: arg.uuid}, arg.props)]
    }
  }

  window.__BILIACT_EVAPAGEDATA__.layerTree &&
    each(window.__BILIACT_EVAPAGEDATA__.layerTree, handlerLayerTree)

  __isInitStateExecute = true
  function each(layerTree, callback) {
    for (let i = 0; i < layerTree.length; i++) {
      const layerTreeData = layerTree[i]

      if (layerTreeData.type === 'Component') {
        callback(layerTreeData)
      }

      for (let i = 0; i < (layerTreeData.slots || []).length; i++) {
        const slot = layerTreeData.slots[i]

        const result = each(slot.children, callback)

        if (result) {
          return result
        }
      }
    }
  }
}
