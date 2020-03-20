function isUndef (v) { // 判断是不是字符串类型
  return v === undefined || v === null || v === ''
}
function sameVnode (a, b) {
  if (a.key === b.key && a.tagName === b.tagName && sameInputType(a, b)) return true
}
function sameInputType (a, b) {
  if (a.tagName !== 'input') return true
  return a.props.type == b.props.type
}
function isDef (v) { // 判断是不是数组类型 
  return v !== undefined && v !== null && v != []
}
function patch (oldVnode, vnode) {
  if (isUndef(vnode)) {
    return
  }
  if (oldVnode === vnode) {
    return
  }
  if (sameVnode(oldVnode, vnode)) {
    patchVnode(oldVnode, vnode)
  } else {
    const parentElm = oldVnode.elm.parentNode;
    console.log(parentElm) // 新的DOM
    console.log(oldVnode.elm) // 老的DOM
    createElm(vnode, parentElm, oldVnode.elm)
    removeVnodes(parentElm, [oldVnode], 0, 0)
  }
}
function patchVnode (oldVnode, vnode) {
  var ch = vnode.children
  var oldCh = oldVnode.children
  console.log(oldCh)
  if (isUndef(vnode.text)) {
    if (isDef(ch) && isDef(oldCh)) {
      updateChildren(oldVnode.elm, oldCh, ch)
    } else if (isDef(ch)) {
      if (isDef(oldVnode.text)) setTextContent(oldVnode.elm, '')
      addVnodes(oldVnode, ch, 0, ch.length - 1)
    } else if (isDef(oldCh)) {
      removeVnodes(oldVnode.elm, oldCh, 0, oldCh.length - 1)
    }
  } else {
    setTextContent(oldVnode.elm, vnode.text);
  }
}
function updateChildren (parentElm, oldCh, newCh, ) {
  let oldStartIdx = 0
  let newStartIdx = 0
  let oldEndIdx = oldCh.length - 1
  let oldStartVnode = oldCh[0]
  let oldEndVnode = oldCh[oldEndIdx]
  let newEndIdx = newCh.length - 1
  let newStartVnode = newCh[0]
  let newEndVnode = newCh[newEndIdx]
  let oldKeyToIdx, idxInOld, vnodeToMove, refElm

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isUndef(oldStartVnode)) {
      oldStartVnode = oldCh[++oldStartIdx]
    } else if (isUndef(oldEndVnode)) {
      oldEndVnode = oldCh[--oldEndIdx]
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode)
      oldStartVnode = oldCh[++oldStartIdx]
      newStartVnode = newCh[++newStartIdx]
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      patchVnode(oldEndVnode, newEndVnode)
      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      patchVnode(oldStartVnode, newEndVnode)
      insertBefore(parentElm, oldStartVnode.elm, oldEndVnode.elm.nextSibling)
      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      patchVnode(oldEndVnode, newStartVnode)
      insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]
    } else {
      if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
      idxInOld = isDef(newStartVnode.key)
        ? oldKeyToIdx[newStartVnode.key]
        : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
      if (isUndef(idxInOld)) {
        createElm(newStartVnode, parentElm, oldStartVnode.elm)
      } else {
        vnodeToMove = oldCh[idxInOld]
        if (sameVnode(vnodeToMove, newStartVnode)) {
          patchVnode(vnodeToMove, newStartVnode)
          oldCh[idxInOld] = undefined
          insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
        } else {
          createElm(newStartVnode, parentElm, oldStartVnode.elm)
        }
      }
      newStartVnode = newCh[++newStartIdx]
    }
  }

  if (oldStartIdx > oldEndIdx) {
    refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
    addVnodes(parentElm, newCh, newStartIdx, newEndIdx)
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
  }
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  let i, key
  const map = {}
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key
    if (isDef(key)) map[key] = i
  }
  return map
}
function findIdxInOld (node, oldCh, start, end) {
  for (let i = start; i < end; i++) {
    const c = oldCh[i]
    if (isDef(c) && sameVnode(node, c)) return i
  }
}
function setTextContent (elm, content) {
  elm.textContent = content;
}
function addVnodes (parentElm, vnodes, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    createElm(vnodes[startIdx], parentElm, null)
  }
}
function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
  for (let i = startIdx; i <= endIdx; i++) {
    // console.log(parentElm)
    // console.log(vnodes)
    // console.log(startIdx)
    // console.log(vnodes[i].elm)
    var ch = vnodes[i]
    if (ch) { // 获取虚拟DOM对象,把保存在虚拟DOM对象里的旧的DOM节点删除掉
      parentElm.removeChild(vnodes[i].elm)
    }
  }
}

function createElm (vnode, parentElm, afterElm) {
  let element = vnode.render()
  // console.log(element) // 新的DOM
  vnode.elm = element;
  // console.log(isDef(afterElm))
  if (isDef(afterElm)) { //老的DOM 如果有值则返回true
    // console.log('F') // 新的DOM
    insertBefore(parentElm, element, afterElm)
  } else {
    parentElm.appendChild(element)
  }
  return element;
}
function insertBefore (parentElm, element, afterElm) {
  // console.log(parentElm) // 新的DOM的父级DOM
  // console.log(element) // new
  // console.log(afterElm) // old
  parentElm.insertBefore(element, afterElm)
  // 在哪个节点之前插入新的DOM并且追加到哪个DOM节点上
  // 在旧的DOM节点之前插入新的DOM并且追加到旧的DOM的父级节点上
}



