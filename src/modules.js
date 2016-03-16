
import { stvStore } from './store/stvStore'
import preparedActions from './actions/preparedActions'

const { moduleHasRun } = preparedActions

const checkForNewDependencies = () => {
  const modules = stvStore.getState().modules
  let modulesThatCanRun = Object.keys(modules)
    .map(key => modules[key])
    .filter(module => module.api && module.api.ready && !module.hasRun)
    .forEach(startModule(modules))

    console.log(stvStore.getState().validatedFields)
}

const startModule = availableModules => module => {
  const availableModulesList = Object.keys(availableModules)
  const moduleCanStart = module.inject
    .reduce((hasAllModules, item) => hasAllModules && availableModulesList.includes(item), true)

  if (moduleCanStart) {
    moduleHasRun(module.id)
    const dependenciesToInject = availableModulesList
      .reduce((moduleList, key) => ({ ...moduleList, [key]: availableModules[key].api }), {})

    module.api.ready(dependenciesToInject)
  }
}

const startModuleAtDOMReady = availableModules => module => {
  const availableModulesList = Object.keys(availableModules)
  const dependenciesToInject = availableModulesList
    .reduce((moduleList, key) => ({ ...moduleList, [key]: availableModules[key].api }), {})

  moduleHasRun(module.id)
  module.api.domReady(dependenciesToInject)
}

stvStore.subscribe(checkForNewDependencies)
