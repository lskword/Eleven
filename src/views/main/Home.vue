<style scoped>
.btn_two {
  width: 7.5rem;
  height: 100px;
  line-height: 100px;
  background: rgb(197, 89, 179);
  color: white;
}
</style>
<template>
  <div>
    <canvas id="myCanvas" width="300" height="300" style=" border:1px solid #6699cc"></canvas>
    <div class="control-ops " id="control">
      线条粗细: <select id="selWidth" @change="selWidths">
        <option value="1">1</option>
        <option value="3" selected="selected">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="9">9</option>
        <option value="11">11</option>
      </select>
      颜色：<select id="selColor" @change="selColors">
        <option value="black" selected="selected">black</option>
        <option value="blue">blue</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
        <option value="gray">gray</option>
      </select>
      <van-button type="primary" block class="saveimg" @click="saveImageInfo">保存</van-button>
      <hr/>
      <van-button type="primary" block class="btn btn-primary" @click='clearArea'>清空画板</van-button>
      <div class="btn_two">123</div>
    </div>
    <div class="saveimgs"></div>
  </div>
</template>

<script>
  export default {
    //数字签名
    name: 'digitaSign',
    data() {
      return {
        imgsrc: "",
        mousePressed: false,
        lastX: '',
        lastY: '',
        selected1: '',
        selected2: '',
        ctx: '',
        c: ''
      }
    },
    mounted() {
      this.InitThis()
    },
    methods: {
      saveImageInfo() {
        var image = this.c.toDataURL("image/png")
        var ctximg = document.createElement("span");
        ctximg.innerHTML = "<img src='" + image + "' alt='from canvas'/>";
        if (this.saveimgs.getElementsByTagName('span').length >= 1) {
          var span_old = this.saveimgs.getElementsByTagName("span")[0];
          this.saveimgs.replaceChild(ctximg, span_old)
        } else {
          this.saveimgs.appendChild(ctximg);
        }
      },
      selWidths() {
        var sel = document.getElementById('selWidth');
        var value = sel.selectedIndex;
        return this.selected1 = sel[value].value;
      },
      selColors() {
        var sel2 = document.getElementById('selColor');
        var value = sel2.selectedIndex;
        return this.selected2 = sel2[value].value;
      },
       InitThis(){
        let rate = 1;
        var canvas1 = document.getElementById('myCanvas');
        this.ctx = canvas1.getContext('2d');
        this.c = document.getElementById("myCanvas");
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
          canvas1.width = canvas1.offsetWidth*rate;
          canvas1.height = canvas1.offsetHeight*rate;
        } else if (/(Android)/i.test(navigator.userAgent)) {
          //Android终端
          canvas1.width = canvas1.offsetHeight*rate;
          canvas1.height = canvas1.offsetWidth*rate;
        }

        var _this = this;
        this.saveimgs = document.getElementsByClassName("saveimgs")[0];
        //          触摸屏
        this.c.addEventListener('touchstart', function (event) {
          if (event.targetTouches.length == 1) {
            event.preventDefault(); // 阻止浏览器默认事件，重要
            var touch = event.targetTouches[0];
            _this.mousePressed = true;
            _this.Draw(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop, false);
          }

        }, false);

        this.c.addEventListener('touchmove', function (event) {
          if (event.targetTouches.length == 1) {
            event.preventDefault(); // 阻止浏览器默认事件，重要
            var touch = event.targetTouches[0];
            if (_this.mousePressed) {
              _this.Draw(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop, true);
            }
          }

        }, false);

        this.c.addEventListener('touchend', function (event) {
          if (event.targetTouches.length == 1) {
            event.preventDefault(); // 阻止浏览器默认事件，防止手写的时候拖动屏幕，重要
            //                  var touch = event.targetTouches[0];
            _this.mousePressed = false;
          }
        }, false);
        /*this.c.addEventListener('touchcancel', function (event) {
            console.log(4)
            this.mousePressed = false;
        },false);*/



        //         鼠标
        this.c.onmousedown = function (event) {
          _this.mousePressed = true;
          _this.Draw(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, false);
        };

        this.c.onmousemove = function (event) {
          if (_this.mousePressed) {
            _this.Draw(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, true);
          }
        };

        this.c.onmouseup = function () {
          _this.mousePressed = false;
        };
      },
      Draw(x, y, isDown) {
        if (isDown) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = this.selected2;
          this.ctx.lineWidth = this.selected1;
          this.ctx.lineJoin = "round";
          this.ctx.moveTo(this.lastX, this.lastY);
          this.ctx.lineTo(x, y);
          this.ctx.closePath();
          this.ctx.stroke();
        }
        this.lastX = x;
        this.lastY = y;
      },
      clearArea() {
        // Use the identity matrix while clearing the canvas
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // 清除签名图片
        if (this.saveimgs.getElementsByTagName('span').length >= 1) {
          var clearImg = this.saveimgs.getElementsByTagName('span')[0];
          this.saveimgs.removeChild(clearImg);
        }

      }
    }
  }
</script>
