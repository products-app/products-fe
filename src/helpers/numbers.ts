const isValid = (value: string) => {
  return !/^\s*$/.test(value) && !isNaN(value)
}
