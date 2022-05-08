// Soundous Chamrah and Mohamed Zakaria Benjelloun Tuimy
// CSC 4307 - 01
// Agile Software Engineering & DevOps


function NameCheckingFct (name) {
  const length_chars = /^[a-zA-Z][a-zA-Z-']{1,39}$/
  if (length_chars.test(name) && !(/'.*'/.test(name) || /--/.test(name))) 
    return true
  return false
}


module.exports = NameCheckingFct