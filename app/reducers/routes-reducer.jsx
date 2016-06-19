const defaultRoutes=[
  {
    path:'/',
    text:'Gonderiler',
    name:'posts',
    index:true
   },
  {
    path:'/statistics',
    text:'Istatistikler',
    name:'statistics'
  },
  {
    path:'/discussions',
     text:'Tartismalar',
      name:'discussions'
    },
  {
    path:'/messages',
    text:'Mesajlar',
     name:'messages'
   }
];

export default (state=defaultRoutes, action) =>{

  return state;
};
