/**
 *
 * @param prefixName 前缀名
 * @param blockName 代码块名
 * @param elementName 元素名
 * @param modifierName 装饰符名
 * @returns 拼接后的字符串
 */
function _bem(prefixName, blockName, elementName, modifierName) {
  if (blockName) {
    prefixName += `-${blockName}`
  }
  if (elementName) {
    prefixName += `__${elementName}`
  }
  if (modifierName) {
    prefixName += `--${modifierName}`
  }
  return prefixName
}

/**
 * https://zhuanlan.zhihu.com/p/415399984
 * b(block): 代码块, 一个独立的块, 比如.header，.container，.checkbox
 * e(element): 元素, 块内的某个元素，用 __ 与block关联 比如 .header__title
 * m(modifier): 装饰, 块或者元素上的修饰符，就是一个形容词，用 -- 与block或element关联，比如： .header__title–fixed
 * @param prefixName 前缀
 * @returns
 */
function createBEM(prefixName: string) {
  const b = (blockName?) => _bem(prefixName, blockName, '', '')

  const e = (elementName) =>
    elementName ? _bem(prefixName, '', elementName, '') : ''

  const m = (modifierName) =>
    modifierName ? _bem(prefixName, '', '', modifierName) : ''

  const be = (blockName, elementName) =>
    blockName && elementName ? _bem(prefixName, blockName, elementName, '') : ''
  const bm = (blockName, modifierName) =>
    blockName && modifierName
      ? _bem(prefixName, blockName, '', modifierName)
      : ''
  const em = (elementName, modifierName) =>
    elementName && modifierName
      ? _bem(prefixName, '', elementName, modifierName)
      : ''
  const bem = (blockName, elementName, modifierName) =>
    blockName && elementName && modifierName
      ? _bem(prefixName, blockName, elementName, modifierName)
      : ''
  const is = (name, state?) => (state ? `is-${name}` : '')
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  }
}

/**
 * bem = createNamespace("icon")
 * bem.b()                                  -> v-icon
 * bem.e("wrapper")                         -> v-icon__wrapper
 * bem.m("disabled")                        -> v-icon--disabled
 * bem.is("checked", true)                  -> is-checked
 * bem.bem("box", "element", "disabled")    -> v-icon-box__element--disabled
 * @param name
 */
export function createNamespace(name: string) {
  const prefixName = `v-${name}`
  return createBEM(prefixName)
}
