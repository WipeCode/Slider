# Slider

## HTML
```html
<div class="standart_slider">
    <a href="#" class="arrows"><i class="fas fa-chevron-left"></i></a>
    <div class="slider">
        <div class="slides">
            <div class="slide">
                <img src="" width="" alt="">
            </div>
            ...
        </div>
    </div>
    <a href="#" class="arrows"><i class="fas fa-chevron-right"></i></a>
</div>
```
## CSS
```css
.standart_slider, 
.standart_slider .slider, 
.standart_slider .slider .slides { display: flex; }

.standart_slider,
.standart_slider .slider {
  width: 100%;
  height: 100%;
}

.standart_slider {
  align-items: center;
  justify-content: space-between;
}

.standart_slider .arrows {
  display: block;
  width: fit-content;
  position: relative;
  z-index: 100;
  color: #f1cb2f;
  font-size: 3rem;
}

.standart_slider .slider {
  margin: 0 2rem;
  position: relative;
  overflow: hidden;
}

.standart_slider .slider .slides {
  height: 100%;
  position: absolute;
}

.standart_slider .slider .slides .slide {
  height: 100%;
  margin-right: 2rem;
  position: relative;
}

.standart_slider .slider .slides .slide img {
  width: 100%;
  height: 100%;
  filter: grayscale(1);
  object-fit: contain;
}
```
## JavaScript
### Основные функции.
Функция для присваивания минимального значения ширины у слайда.
>Минимальна ширина слайда задается в теге ```<img>``` в качестве атрибуда ```width```, которая высчитывается автоматически, т.е. программа самостоятельно находит минимальное значение из предложенных у тегов ```<img>``` атрибутах ```width```. Если данный атрибут не будет указан ни в одном теге ```img```, программа по умолчанию присвоет ему значение ```200px```.
```javascript
function getMinWidth(arr) {
    let min = null;

    for (let e of arr) {
        let width = e[`div`].querySelector(`img`).getAttribute(`width`);
        min = min ? (min < width ? min : width) : width;
    }

    return min ? min : 200;
}
```
Функция для расчета количества сладов, которое вмещается в ширину слайдера, т.е. относительно ширины блока ```<div class='slides'>...</div>```. 
```javascript
function getAmoutSlides(width, min_width) {
    let amount = 0;
    let total_length = 0;

    while (total_length < width) {
        total_length += +min_width;

        if (total_length < width) {
            width -= 32;
            amount++;
        }
    }

    return amount;
}
```
Функция для расчета ширины слайдов, с учетом их отступов, и присваивание этого значения всем слайдам.
```javascript
function getWidthSlides(width, amount) {
    let indents = 32 * (amount - 1);
    let slide = ( (width - indents) / amount ).toFixed(1) ;

    for (let e of slides) e.style.width = `${slide}px`; 

    $(`.slides`).style.transform = `translateX(-${+slide + 32}px)`;
}
```
## Принцип работы.
Представленный выше Html код, необходимо располижить в родительском блоке, относительно которого ему будет присвоена ширина и высота, т.е. высота и ширина слайдера задется в родительском блоке. 
Сами слады просписываются внутри блока ```<div class="slides">...</div>```, в виде блока ```<div class="slide">...</div>```
внутри которого расположен тег ```img```. Кличество слайдеров неограничено.
Слайдер является полноценно адаптивным и, поскольку подстраивается относительно ширины родительского блока, при изминении его размеров, программа автоматически будет высчитывать новые значения ширины слайдов и их возможное количество.
