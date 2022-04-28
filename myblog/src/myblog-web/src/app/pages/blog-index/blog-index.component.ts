import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { L2Dwidget } from 'live2d-widget';

@Component({
  selector: 'app-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.less']
})
export class BlogIndexComponent implements OnInit {

  filepath: string = '../../../assets/huahua.mp4';

  constructor(private http: HttpClient,) { }



  ngOnInit() {
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
        jsonPath: "https://unpkg.com/live2d-widget-model-hijiki/assets/hijiki.model.json",
        "scale": 1
      },
      // 设置位置
      "display": {
        "position": "right",
        "width": 150,
        "height": 200,
        "hOffset": 30,
        "vOffset": 10
      },
      "mobile": {
        "show": true,
        "scale": 1.5
      },
      // 透明度设置
      "react": {
        "opacity": 0.8
      },
      "dialog": {
        "enable": true,
        "hitokoto":true
      }
    });
  }

}
