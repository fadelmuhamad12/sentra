const numberTable = (index, page, pageSize) => {
  const num = index + 1 + page * pageSize - pageSize
  return num
}

export default numberTable
