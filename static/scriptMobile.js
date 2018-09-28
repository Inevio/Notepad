// console.log(params)
var openFile = function (fileId) {
  api.fs(fileId, (error, file) => {
    if (error) return console.error(error)
    file.read((error, result) => {
      if (error) return console.error(error)
      $('.file-name').text(file.name)
      $('.text').val(result.toString())
    })
  })
}

if (params && params.command === 'openFile' && params.data) {
  openFile(params.data)
}
