const defaultRoutes=[
  {
    path:'/',
    text:'Gonderiler',
    name:'lists' },
  {
    path:'/statistics',
    text:'Istatistikler',
    name:'statistics'},
  {
    path:'/discussion',
     text:'Tartismalar',
      name:'discussion'
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
