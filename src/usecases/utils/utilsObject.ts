const removeUndefinedProperties = (obj: Object) => {
    Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key])
}

export { removeUndefinedProperties }