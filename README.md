# Slider

## HTML
```html
<div class="standart_slider">
    <a href="#" class="arrows"><i class="fas fa-chevron-left"></i></a>
    <div class="slider">
        <div class="slides">
            <div class="slide">
                <img src="img/l1.png" width="200" alt="">
            </div>
            <div class="slide">
                <img src="img/l2.png" width="200"alt="">
            </div>
            <div class="slide">
                <img src="img/l3.png" width="200" alt="">
            </div>
            <div class="slide">
                <img src="img/l4.png" width="200" alt="">
            </div>
            <div class="slide">
                <img src="img/l5.png" width="200" alt="">
            </div>
            <div class="slide">
                <img src="img/l6.png" width="200" alt="">
            </div>
            <div class="slide">
                <img src="img/l7.png" width="200" alt="">
            </div>
            <div class="slide">
                <img src="img/l8.png" width="200" alt="">
            </div>
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
Функция для расчета количества сладов, которое вмещается в ширину слайдера.
>Т.е. относительно ширины блока ```<div class='slides'>...</>```. 
>Также минимальна ширина слайда задается в теге ```<img>``` в качестве атрибуда ```width```, которая высчитывается автоматически и считается минимальным значением, которое может приянять 1 слайд.
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
Функция для расчета ширины слайдов, с учетом их отступов, и присваивание этого значения.
```javascript
function getWidthSlides(width, amount) {
    let indents = 32 * (amount - 1);
    let slide = ( (width - indents) / amount ).toFixed(1) ;

    for (let e of slides) e.style.width = `${slide}px`; 

    $(`.slides`).style.transform = `translateX(-${+slide + 32}px)`;
}
```

