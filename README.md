# Slider

### HTML
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
### CSS
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
