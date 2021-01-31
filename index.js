

function generateBoxes()
{
  var boxes = document.getElementById('subs').value
  var para = document.getElementById('boxes')
  para.innerHTML = ''
  for (var i = 0; i < boxes; i++) {
    var input = document.createElement('INPUT')
    input.setAttribute('type', 'number')
    input.setAttribute('id', 'box'+i)
    para.appendChild(input)
  }
  var butn = document.createElement('button')
  butn.innerHTML = 'calculate'
  document.getElementById('div1').appendChild(butn)
  butn.addEventListener('click', function(){
    var boxes = document.getElementById('subs').value
    console.log(boxes.toString());
    var sum = 0
    var flag = true
    for (var i = 0; i < boxes; i++) {
      var boxnum = document.getElementById('box'+i).value
      if (boxnum >= 0 && boxnum <=100) {
        sum+=parseFloat(boxnum)
      }
      else {
        flag = false
        break
      }
    }
    if (flag) {
      var avg = sum/boxes
      var str = ''
      if (avg>=95) {
        str='S'
      }
      else if (avg>=90) {
        str='A'
      }
      else if (avg>=80) {
        str = 'B'
      }
      else if (avg>=70) {
        str='C'
      }
      else if (avg>=60) {
        str='D'
      }
      else if (avg>=50) {
        str='E'
      }
      else {
        str='F'
      }

      document.getElementById('answer').innerHTML = 'Your CGPA is: '+str
    }
  })
}
