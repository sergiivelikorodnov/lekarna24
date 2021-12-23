import { FooterWidgetCustomerSupportType, FooterWidgetListType, FooterWidgetLocationType, FooterWidgetSocialIconsType } from '../types/footer-widgets';

export const footerWidgetAbout: FooterWidgetListType = {
  title: 'About Us',
  widgetList: [
    {
      name:'Home',
      link:'#',
    },
    {
      name:'About Us',
      link:'#',
    },
    {
      name:'Career',
      link:'#',
    },
    {
      name:'Blog',
      link:'#',
    },
    {
      name:'Terms and Conditions',
      link:'#',
    },
    {
      name:'PrivacyPolicy',
      link:'#',
    },
    {
      name:'Contact Us',
      link:'#',
    },
  ],
};


export const footerWidgetCategories: FooterWidgetListType = {
  title: 'Categories',
  widgetList: [
    {
      name:'Vitamins & Supplements',
      link:'#',
    },
    {
      name:'Personal Care & Beauty',
      link:'#',
    },
    {
      name:'Medicines',
      link:'#',
    },
    {
      name:'Health & First Aids',
      link:'#',
    },
    {
      name:'Sexual Health',
      link:'#',
    },
    {
      name:'Weight Loss & Fitness',
      link:'#',
    },
    {
      name:'Mum & Baby',
      link:'#',
    },
  ],
};

export const footerWidgetCustomerCare: FooterWidgetListType = {
  title: 'Customer Care',
  widgetList: [
    {
      name:'My Account',
      link:'#',
    },
    {
      name:'My Orders',
      link:'#',
    },
    {
      name:'Track Your Order',
      link:'#',
    },
    {
      name:'Wishlist',
      link:'#',
    },
    {
      name:'FAQs',
      link:'#',
    },
    {
      name:'Refunds/Return Policy',
      link:'#',
    },
  ],
};

export const footerWidgetStoreLocations: FooterWidgetLocationType ={
  title: 'Store Locations',
  locations: [{
    description: '9863 - 9867 Mill Road, Cambridge, MG09 99HT',
    button:'Get Directions',
    link:'#',
  },
  {
    description: '9863 - 9868 Mill Road, Cambridge, MG09 99HT',
    button:'Get Directions',
    link:'#',
  },
  {
    description: '9863 - 9869 Mill Road, Cambridge, MG09 99HT',
    button:'Get Directions',
    link:'#',
  },
  ]};

export const footerWidgetCustomerSupport: FooterWidgetCustomerSupportType ={
  title: 'Customer Support',
  info: [{
    icon:'support',
    title:'+1 800 559 6580, +1 800 559 6588',
    description: '24/7 Customer Service:',
  },
  {
    icon:'email',
    title:'info@companyname.com',
    description: 'Email Us:',
  },
  ]};

export const footerWidgetSocialIcons: FooterWidgetSocialIconsType[] =
  [
    {
      icon:'facebook-f',
      link:'#',
    },
    {
      icon:'twitter',
      link:'#',
    },
    {
      icon:'instagram',
      link:'#',
    },
    {
      icon:'linkedin-in',
      link:'#',
    },
    {
      icon:'youtube',
      link:'#',
    },
    {
      icon:'pinterest-p',
      link:'#',
    },
  ];
