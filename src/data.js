import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const PageLinks=[
    {id:1, href: '#home', text:'home'},
    {id:2, href: '#about', text:'about us'},
    {id:3, href: '#services', text:'services'},
    {id:4, href: '#tours', text:'tours'}
];
export const SocialLinks=[
    {id:1, href: 'https://www.twitter.com', icon:'fab fa-twitter'},
    {id:2, href: 'https://www.twitter.com', icon:'fab fa-facebook'},
    {id:3, href: 'https://www.twitter.com', icon:'fab fa-squarespace'},
  
];

export const services =[
    {id:1, name:'fas fa-wallet fa-fw' ,  title:'saving money' , 
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.' },
    {id:2, name:'fas fa-tree fa-fw' ,  title:'endless hiking' , 
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.' },
    {id:3, name:'fas fa-socks fa-fw' ,  title:'amazing comfort' , 
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.' }
]

export const tourCard =[
    {id:1, image: 'tour1', 
    title:'kenya highlights' , 
    para:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis' , 
    date:'august 26th, 2020',location:'china', duration :'7 days', money:'5000$'},
    {id:2, image: 'tour2', title:'best of java' ,  
    para:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.' , 
    date:'october 1th, 2020',location:'indonesia', duration :'7 days', money:'5000$' },
    {id:3, image: 'tour3', title:'explore hong kong' ,  
    para:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.' , 
    date: 'september 15th, 2020',location:'hong kong', duration :'7 days', money:'5000$'},
    {id:4, image: 'tour4', title:'Tibet Adventure' ,  
    para:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' , 
    date:'december 5th, 2019',location:'kenya', duration :'7 days', money:'5000$' }
]
