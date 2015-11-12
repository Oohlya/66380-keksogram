/**
 * Created by Minimi on 11.11.2015.
 */

function getMessage(a, b){
  if (typeof a === 'boolean') {
    if (a === true)
      return 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
    else
      return 'Переданное GIF-изображение не анимировано';
  }
  if (typeof a === 'number')
    return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + (b * 4) + ' аттрибутов';

  if (Array.isArray(a) && Array.isArray(b)) {
    var square = 0;
    for (var j = 0; j < a.length; j++) {
      (a[j]) *= (b[j]);
      square += (a[j]);
    }
    return 'Общая площадь артефактов сжатия: ' + square + ' пикселей';
  }

  if (Array.isArray(a)) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
      sum += (a[i]);
    }
    return 'Количество красных точек во всех строчках изображения: ' + sum;
  }
}


