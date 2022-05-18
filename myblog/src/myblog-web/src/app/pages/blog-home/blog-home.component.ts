import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, Renderer2, EventEmitter, Output } from '@angular/core';
import { L2Dwidget } from 'live2d-widget';
@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.less']
})
export class BlogHomeComponent implements OnInit {


  blogs: Array<any> = [];
  time1!: any;
  time2!: any;

  drag1!: any;
  divl!: any;
  dashboard!: any;

  mousedownTime!: any;
  mouseupTime!: any;

  show: boolean = false;

  constructor(
    private http: HttpClient,
    private renderer2: Renderer2,
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {

    this.drag1 = this.elementRef.nativeElement.querySelector('#drag1');
    this.divl = this.elementRef.nativeElement.querySelector('#drag1 div');
    this.l2DInit();
    for (let index = 0; index < 100; index++) {
      this.blogs.push({
        title: "标题",
        description: "描述",
        context: "内容"
      })

    }
    this.meetinit();
  }


  l2DInit() {
    L2Dwidget.init({
      //live2d-widget-model-chitose
      // live2d-widget-model-epsilon2_1
      // live2d-widget-model-gf
      // live2d-widget-model-haru/01 (use npm install --save live2d-widget-model-haru)
      // live2d-widget-model-haru/02 (use npm install --save live2d-widget-model-haru)
      // live2d-widget-model-haruto
      // live2d-widget-model-hibiki
      // live2d-widget-model-izumi
      // live2d-widget-model-koharu
      // live2d-widget-model-miku
      // live2d-widget-model-ni-j
      // live2d-widget-model-nico
      // live2d-widget-model-nietzsche
      // live2d-widget-model-nipsilon
      // live2d-widget-model-nito
      // live2d-widget-model-shizuku
      // live2d-widget-model-tsumiki
      // live2d-widget-model-unitychan  
      // live2d-widget-model-z16


      // live2d-widget-model-tororo   小白
      // live2d-widget-model-hijiki   小黑
      // live2d-widget-model-wanko   小狗

      "model": {
        "jsonPath": "https://unpkg.com/live2d-widget-model-hijiki/assets/hijiki.model.json",
        "scale": 1
      },
      // 设置位置
      "display": {
        "position": "right",
        "width": 150,
        "height": 200,
        "hOffset": 10,
        "vOffset": 10
      },
      "mobile": {
        "show": true,
        "scale": 0.7
      },
      // 透明度设置
      "react": {
        "opacity": 0.8
      },
      // "dialog": {
      //   "enable": true,
      //   "hitokoto":true
      // }
    });
  }


  meetinit() {
    const dragboundary = this.elementRef.nativeElement.querySelector('#dragboundary');
    setTimeout(() => {
      this.renderer2.setStyle(dragboundary, 'opacity', '1');
    }, 500);
  }


  buttonBlur() {

    this.renderer2.setStyle(this.dashboard, 'top', '0');
    this.renderer2.setStyle(this.dashboard, 'border-radius', '100%');
    this.renderer2.setStyle(this.dashboard, 'width', '50px');
    this.renderer2.setStyle(this.dashboard, 'height', '50px');

    this.time1 = setTimeout(() => {
      this.renderer2.setStyle(this.drag1, 'opacity', '0.5');
    }, 3000);

    this.time2 = setTimeout(() => {
      this.renderer2.setStyle(this.drag1, 'display', 'block');
      this.renderer2.setStyle(this.drag1, 'display', 'flex');
      this.renderer2.setStyle(this.drag1, 'align-items', 'center');
      this.renderer2.setStyle(this.drag1, 'justify-content', 'center');


      this.renderer2.setStyle(this.divl, 'display', 'block');
      // this.renderer2.setStyle(this.divl, 'background-color', 'rgb(110, 110, 110)');
      // this.renderer2.setStyle(this.divl, 'border', 'rgb(110, 110, 110)');
      // this.renderer2.setStyle(this.divl, 'border-radius', '100%');
      // this.renderer2.setStyle(this.divl, 'width', '37px');
      // this.renderer2.setStyle(this.divl, 'height', '37px');
      this.renderer2.setStyle(this.divl, 'display', 'flex');
      this.renderer2.setStyle(this.divl, 'align-items', 'center');
      this.renderer2.setStyle(this.divl, 'justify-content', 'center');
      this.show = false;
    }, 200);
  }

  // dragPosition = {x: -10, y: 0};

  // changePosition() {
  //   this.dragPosition = {x: this.dragPosition.x + 500, y: this.dragPosition.y + 500};
  // }

  mousedownFunc() {
    clearTimeout(this.time1);

    this.mousedownTime = new Date().getTime();
    console.log("mousedownFunc", this.mousedownTime)

    this.addTransition(this.divl);
    this.addTransition(this.drag1);

    this.renderer2.setStyle(this.drag1, 'opacity', '1');
  }

  mouseupFunc() {
    this.mouseupTime = new Date().getTime();
    console.log("mouseupFunc", this.mouseupTime)

    if (this.mouseupTime - this.mousedownTime <= 100) {
      this.onClick();
    } else {
      this.time1 = setTimeout(() => {
        this.renderer2.setStyle(this.drag1, 'opacity', '0.5');
      }, 3000);
    }

  }



  onClick() {
    console.log("onClick")

    this.renderer2.setStyle(this.divl, 'display', 'none');
    this.renderer2.setStyle(this.drag1, 'display', 'none');

    this.show = true;
    clearTimeout(this.time2);
    setTimeout(() => {
      this.dashboard = this.elementRef.nativeElement.querySelector('#dashboard');
      //TODO  跟随拖动位置进行计算展示dashboard
      console.log(this.dashboard);
      this.addTransition(this.dashboard);
      this.renderer2.setStyle(this.dashboard, 'top', '30px');
      this.renderer2.setStyle(this.dashboard, 'border-radius', '10%');
      this.renderer2.setStyle(this.dashboard, 'width', '300px');
      this.renderer2.setStyle(this.dashboard, 'height', '300px');
      this.renderer2.setStyle(this.dashboard, 'opacity', '1');
      this.dashboard.focus();
    }, 0);

  }

  cdkDragStartedFunc() {
    this.removeTransition(this.divl);
    this.removeTransition(this.drag1);
  }

  cdkDragEndedFunc() {
    this.addTransition(this.divl);
    this.addTransition(this.drag1);
  }

  //增加过度
  addTransition(el: object) {
    this.renderer2.setStyle(el, 'transition', '0.2s all');
    this.renderer2.setStyle(el, '-moz-transition', '0.2s all');
    this.renderer2.setStyle(el, '-webkit-transition', '0.2s all');
    this.renderer2.setStyle(el, '-o-transition', '0.2s all');
  }

  //移除过度
  removeTransition(el: object) {
    this.renderer2.removeStyle(el, 'transition');
    this.renderer2.removeStyle(el, '-moz-transition');
    this.renderer2.removeStyle(el, '-webkit-transition');
    this.renderer2.removeStyle(el, '-o-transition');
  }


}
