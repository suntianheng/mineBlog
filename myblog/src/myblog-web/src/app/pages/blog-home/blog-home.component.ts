import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { L2Dwidget } from 'live2d-widget';
@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.less']
})
export class BlogHomeComponent implements OnInit {


  blogs: Array<any>=[];

  visible = false;

  constructor(
    private http: HttpClient,
    private renderer2: Renderer2,
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
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
    const cardrow = this.elementRef.nativeElement.querySelector('#cardrow1');
    const nzaffix = this.elementRef.nativeElement.querySelector('#affix2');

    this.renderer2.setStyle(cardrow, 'display', 'block');
    this.renderer2.setStyle(nzaffix, 'display', 'block');

    setTimeout(() => {
      this.renderer2.setStyle(cardrow, 'opacity', '1');
      this.renderer2.setStyle(nzaffix, 'opacity', '1');
    }, 500);
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }




}
