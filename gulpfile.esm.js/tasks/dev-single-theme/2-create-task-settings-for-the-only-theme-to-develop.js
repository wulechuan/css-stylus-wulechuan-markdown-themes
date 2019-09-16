import mergeSpecificAndSharedTaskConfigsAndCreateTaskCycles
    from '../../tasks/themes/stylus/2-create-all-task-settings-for-all-themes'

import getTaskConfigOfTheOnlyThemeToDevelop
    from './1-get-specific-task-config-of-the-only-theme-to-develop'



export default function createTaskCycleForTheOnlyThemeToDevelop(entryStylusFileSubPathOfTheOnlyThemeToDevelop) {
    const specificTaskConfigOfTheOnlyThemeToDevelop = getTaskConfigOfTheOnlyThemeToDevelop(
        entryStylusFileSubPathOfTheOnlyThemeToDevelop
    )

    const [ taskCycleOfTheOnlyTheme ] = mergeSpecificAndSharedTaskConfigsAndCreateTaskCycles(
        [
            specificTaskConfigOfTheOnlyThemeToDevelop,
        ]
    )

    return taskCycleOfTheOnlyTheme
}
