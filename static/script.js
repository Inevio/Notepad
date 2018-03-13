// console.log(params)

var openFile = function (fileId) {
  api.fs(fileId, (error, file) => {
    if (error) return console.error(error)
    file.read((error, result) => {
      if (error) return console.error(error)
      $('.file-name').text(' - ' + file.name)
      $('.text').val(result.toString())
      $('.text').textareaAutoSize()
    })
  })
}

$('.text').on('keydown', function (event) {
  if (event.keyCode === 9) {
    // Set up some variables. We need to know the current position of the cursor or selection.
    var selectionStartPos = this.selectionStart
    var selectionEndPos = this.selectionEnd
    var oldContent = this.value

    // Set the new content.
    this.value = oldContent.substring(0, selectionStartPos) + '\t' + oldContent.substring(selectionEndPos)

    // Set the new cursor position (current position + 1 to account for the new tab character).
    this.selectionStart = this.selectionEnd = selectionStartPos + 1

    // Prevent the default action (tabbing to the next field or control).
    event.preventDefault()
  }
})

/* $('.option-buttons .save').on('click', function () {
  file.save($('.text').val(), (error) => {
    if (error) return error
  })
}) */

$(this).on('ui-view-resize ui-view-maximize ui-view-unmaximize', () =>{
  $('.text').trigger('input')
})

if (params && params.command === 'openFile' && params.data) {
  openFile(params.data)
}
