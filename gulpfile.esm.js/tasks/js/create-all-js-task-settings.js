import jsTaskBuildingOptions
    from '../../configs/js-tasks'

import createOneTaskSettingsForCopyingJavascriptFiles
    from '../../lib/create-one-task-settings-for-copying-javascript-files'

export default jsTaskBuildingOptions.map(createOneTaskSettingsForCopyingJavascriptFiles)
