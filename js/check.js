/**
 * Created by Minimi on 11.11.2015.
 */

function getMessage(a, b){
  if (typeof a === 'boolean') {
    if (a == true)
      return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
    else
      return 'Переданное GIF-изображение не анимировано';
  }
  if (typeof a == 'number')
    return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + (b * 4) + ' аттрибутов';

  if (a instanceof 'Array') {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
      sum += a[i];
    }
    return 'Количество красных точек во всех строчках изображения: ' + sum;
  }

}


