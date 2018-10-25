const reactDomTemplate = (code, config, state) => {
    let result = `/**\nCopyright (c) 2018-present, Eaton\nAll rights reserved.\n\n`;
    result += `This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.\n**/\n\n`;
    result += `import React from 'react';\n`
    result += `import createSvgIcon from '@material-ui/icons/utils/createSvgIcon';\n\n`
    result += `export default createSvgIcon(\n`
    result += `<React.Fragment>${code}</React.Fragment>\n`
    result += `, '${state.componentName}');`

    return result
}
module.exports = reactDomTemplate
  