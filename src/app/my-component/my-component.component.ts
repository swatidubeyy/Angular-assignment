import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
  template: `
    <p-treeTable [value]="nodes">
      <ng-template pTemplate="header">
        <tr>
          <th>Label</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-node>
        <tr>
          <td>{{ node.label }}</td>
        </tr>
      </ng-template>
    </p-treeTable>
  `
})

export class MyComponentComponent implements OnInit {
  nodes = [
    {
      label: 'Main Character',
      children: [
        { label: 'Sub Character 1' },
        { label: 'Sub Character 2' },
      ]
    }
  ];

  singlePerson: any = [];
  images: string[] = [];
  constructor() { }

  ngOnInit(): void {
    debugger
    let jsonData = JSON.stringify(this.TreeData);
    localStorage.setItem('treeData', jsonData);
    this.dataArr = localStorage.getItem("treeData");
    this.singlePerson.push(this.TreeData[0].data);
  }
  dataArr: any = [];
  selectedNodes!: TreeNode[];

  TreeData: TreeNode[] = [
    {
      expanded: true,
      type: 'person',
      data: {
        image: '/assets/Image/Amarendra1.jpg',
        images: [
          '/assets/Image/Amarendra1.jpg',
          '/assets/Image/amarendra2.webp',
        ],
        name: 'AMARENDRA BAHUBALI',
        title: 'Prince, Hero',
        about: 'Amarendra Baahubali is the son of king Vikramadeva and Akhila',
        Age: 60,
        height: '6 feets',
        gender: 'Male',
        bodyType: 'wet Build',
        weight: '90 kg'
      },
      children: [
        {
          expanded: true,
          type: 'person',
          data: {
            image: '/assets/Image/devsena1.jpg',
            images: [
              '/assets/Image/devsena1.jpg',
              '/assets/Image/devsena2.jpeg',
            ],
            name: 'DEVASENA',
            title: 'Heroine',
            about: 'Devasena keeps her head high, made her own decisions and was fearless in the face of danger.',
            Age: 60,
            height: '5.5 feets',
            gender: 'female',
            bodyType: 'Mesomorph',
            weight: '56 kg'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              data: {
                image: '/assets/Image/bijjaladev1.jpeg',
                images: [
                  '/assets/Image/bijjaladev1.jpeg',
                  '/assets/Image/bijjaladev2.jpg',
                ],
                name: 'BIJJALADEVA',
                title: 'King, Villian',
                about: 'Bijjaladeva, the deranged older brother of Vikramadeva and rejected prince, who has a deformed left arm.',
                Age: 90,
                height: '6 feets',
                gender: 'Male',
                bodyType: 'wet Build',
                weight: '80 kg'
              },
            },
            {
              expanded: true,
              type: 'person',
              data: {
                image: '/assets/Image/kumarverma1.jpg',
                images: [
                  '/assets/Image/kumarverma1.jpg',
                  '/assets/Image/Kumaravarma2.webp',
                ],
                name: 'KUMAR VERMA',
                title: 'Prince',
                about: "Kumar verma was brother of Devsena.",
                Age: 65,
                height: '6 feets',
                gender: 'Male',
                bodyType: 'wet Build',
                weight: '90 kg'
              },
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          data: {
            image: '/assets/Image/shivgaami1.jpeg',
            images: [
              '/assets/Image/shivgaami1.jpeg',
              '/assets/Image/shivgami2.jpg',
            ],
            name: 'SIVGAMI',
            title: 'Queen',
            about: 'Sivagami is one of the most powerful and skilled characters in Baahubali series who decides the fate of Mahismathi.',
            Age: 85,
            height: '5 feets',
            gender: 'female',
            bodyType: 'Null',
            weight: '74 kg'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              data: {
                image: '/assets/Image/bhallaladev1.jpeg',
                images: [
                  '/assets/Image/bhallaladev1.jpeg',
                  '/assets/Image/bhallaldev2.jpg',
                ],
                name: 'BHALLADEVA',
                title: 'Prince, Villian',
                about: "Bhallaladeva is the king of Mahishmati. He is a renowned fighter, Sivagami and Bijjaladeva's only child and the older cousin-brother of Amarendra Bahubali.",
                Age: 65,
                height: '6 feets',
                gender: 'Male',
                bodyType: 'wet Build',
                weight: '90 kg'
              },
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          data: {
            image: '/assets/Image/mahendra2.jpg',
            images: [
              '/assets/Image/mahendra1.jpg',
              '/assets/Image/mahendra2.jpg',
            ],
            name: 'MAHENDRA BAHUBALI',
            title: 'Hero',
            about: 'Mahendra Baahubali is the son of the late king Amarendra Baahubali. He is the spitting image of Amarendra Baahubali',
            Age: 50,
            height: '6 feets',
            gender: 'Male',
            bodyType: 'wet Build',
            weight: '90 kg'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              data: {
                image: '/assets/Image/katappa1.png',
                images: [
                  '/assets/Image/katappa1.png',
                  '/assets/Image/katappa2.jpeg',
                ],
                name: 'KATAPPA',
                title: 'Minister',
                about: 'Kattappa is loyal army chief of Mahishmati kingdom.',
                Age: 75,
                height: '6 feets',
                gender: 'Male',
                bodyType: 'wet Build',
                weight: '95 kg'
              }
            },
            {
              expanded: true,
              type: 'person',
              data: {
                image: '/assets/Image/avantika1.jpg',
                images: [
                  '/assets/Image/avantika1.jpg',
                  '/assets/Image/avantika2.jpeg',
                ],
                name: 'AVANTIKA',
                title: 'Princess',
                about: "wife of Mahendra bahubali.",
                Age: 65,
                height: '5.5 feets',
                gender: 'female',
                bodyType: 'wet Build',
                weight: '50 kg'
              }
            },
          ]
        }
      ]
    }
  ]; 


  getDetail = (data_: any) => {
    debugger
    this.singlePerson = [];
    this.singlePerson.push(data_.data);
    this.TreeData[0].data = data_.data;
    this.TreeData[0].children = data_.children
  }
}
