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
.standart_slider .slider .slides {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
}

.standart_slider {
  width: 100%;
  height: 100%;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.standart_slider .arrows {
  display: block;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  position: relative;
  z-index: 100;
  color: #f1cb2f;
  font-size: 3rem;
}

.standart_slider .slider {
  width: 100%;
  height: 100%;
  margin: 0 2rem;
  position: relative;
  overflow: hidden;
}

.standart_slider .slider .slides {
  height: 100%;
  position: absolute;
}

.standart_slider .slider .slides .slide {
  width: 200px;
  height: 100%;
  margin-right: 2rem;
  position: relative;
}

.standart_slider .slider .slides .slide img {
  width: 100%;
  height: 100%;
  -webkit-filter: grayscale(1);
          filter: grayscale(1);
  -o-object-fit: contain;
     object-fit: contain;
}

@keyframes click {
  0% {
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
  }
}

@keyframes prev {
  0% {
    -webkit-transform: translate(-100%, 0);
            transform: translate(-100%, 0);
  }
  100% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
}


@keyframes next {
  0% {
    -webkit-transform: translate(100%, 0%);
            transform: translate(100%, 0%);
  }
  100% {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
}
```
