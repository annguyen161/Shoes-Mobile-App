import images from '../assets/images';
import strings from '../i18n/strings';
import {StackNav} from '../navigation/NavigationKeys';

const OnBoardingSlide = [
  {
    id: 1,
    text: 'Perseus is the best choice for your shoes cabinet.',
    productImage: images.onBordingImg1,
    productImageDark: images.onBordingDark,
  },
  {
    id: 2,
    text: 'Your satisfaction is our number one priority',
    productImage: images.onBordingImg2,
    productImageDark: images.onBordingDark2,
  },
  {
    id: 3,
    text: "Let's fulfill your daily needs with Perseus right now!",
    productImage: images.onBordingImg3,
    productImageDark: images.onBordingDark3,
  },
];

const GenderData = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Other', value: 'other'},
];

const ProfileSetting = [
  {
    id: 1,
    title: strings.editProfile,
    icon: 'person-outline',
    route: StackNav.SetUpProfile,
    header: strings.editProfile,
  },
  {
    id: 2,
    title: strings.address,
    icon: 'location-outline',
    route: StackNav.Address,
  },
  {
    id: 2,
    title: strings.notification,
    icon: 'notifications-outline',
    route: StackNav.NotificationSetting,
  },
  {
    id: 3,
    title: strings.payment,
    icon: 'wallet-outline',
    route: StackNav.Payment,
  },
  {
    id: 4,
    title: strings.security,
    icon: 'shield-checkmark-outline',
    route: StackNav.Security,
  },
  {
    id: 5,
    title: strings.language,
    icon: 'options-outline',
    value: 'English(US)',
    route: StackNav.Language,
  },
  {
    id: 6,
    title: strings.darkMode,
    icon: 'contrast-outline',
    rightIcon: 'rightIcon',
  },
  {
    id: 7,
    title: strings.privacyPolicy,
    icon: 'lock-closed-outline',
    route: StackNav.PrivacyPolicy,
  },
  {
    id: 8,
    title: strings.helpCenter,
    icon: 'information-circle-outline',
    route: StackNav.HelpCenter,
  },
  {
    id: 8,
    title: strings.inviteFriends,
    icon: 'people-outline',
    route: StackNav.InviteFriends,
  },
];

const contactUsData = [
  {
    id: 1,
    title: 'Customer Service',
    icon: 'headset',
  },
  {
    id: 2,
    title: 'WhatsApp',
    icon: 'whatsapp',
  },
  {
    id: 3,
    title: 'Website',
    icon: 'google-earth',
  },
  {
    id: 4,
    title: 'Facebook',
    icon: 'facebook',
  },
  {
    id: 5,
    title: 'Instagram',
    icon: 'instagram',
  },
  {
    id: 6,
    title: 'Twitter',
    icon: 'twitter',
  },
];

const helperCategoryData = [
  {
    label: 'General',
    value: 'General',
  },
  {
    label: 'Account',
    value: 'Account',
  },
  {
    label: 'Payment',
    value: 'Payment',
  },
  {
    label: 'Subscription',
    value: 'General',
  },
  {
    label: 'Others',
    value: 'Others',
  },
];

const helperData = [
  {
    title: 'What is Perseus?',
    description:
      'A shoe is an item of footwear intended to protect and comfort the human foot, while the wearer is doing various activities.',
    category: 'General',
  },
  {
    title: 'How to use Perseus?',
    description:
      'You can sign up for Anistream by downloading the app from the App Store or Google Play Store.',
    category: 'General',
  },
  {
    title: 'How do I cancel an orders?',
    description:
      'You can remove anime on your wishlist by clicking the heart icon on the anime details page.',
    category: 'Account',
  },
  {
    title: 'Can I get a discount at checkout?',
    description:
      'You can subscribe to premium by clicking the premium button on the home page.',
    category: 'Payment',
  },
  {
    title: 'Why can I make a payment?',
    description:
      'You can download anime by clicking the download icon on the anime details page.',
    category: 'Payment',
  },
  {
    title: 'How to unsubscribe from premium?',
    description:
      'You can unsubscribe from premium by clicking the premium button on the home page.',
    category: 'Subscription',
  },
];

const languageData = [
  {
    title: 'Suggested',
    data: [{lnName: 'English(US)'}, {lnName: 'English(UK)'}],
  },
  {
    title: 'Language',
    data: [
      {
        lnName: 'English',
      },
      {
        lnName: 'Spanish',
      },
      {
        lnName: 'French',
      },
      {
        lnName: 'German',
      },
      {
        lnName: 'Italian',
      },
      {
        lnName: 'Portuguese',
      },
      {
        lnName: 'Russian',
      },
      {
        lnName: 'Turkish',
      },
      {
        lnName: 'Chinese',
      },
      {
        lnName: 'Japanese',
      },
      {
        lnName: 'Korean',
      },
      {
        lnName: 'Arabic',
      },
      {
        lnName: 'Hindi',
      },
      {
        lnName: 'Indonesian',
      },
      {
        lnName: 'Malay',
      },
      {
        lnName: 'Thai',
      },
    ],
  },
];

const privacyPolicyData = [
  {
    title: strings.privacyPolicy1,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy2,
    description: strings.privacyPolicyDesc1,
  },
  {
    title: strings.privacyPolicy3,
    description: strings.privacyPolicyDesc2,
  },
];

const userDetail = [
  {
    name: 'Dracel Steward',
    description: 'arianacooper | 24.5M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  },
  {
    name: 'John Doe',
    description: 'johndoe | 10M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Jane Smith',
    description: 'janesmith | 5M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHVzZXIlMjBwcm9maWxlJTIwd2l0aCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Bob Johnson',
    description: 'bobjohnson | 2M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Sara Wilson',
    description: 'sarawilson | 1M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Tom Wilson',
    description: 'tomwilson | 500K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Alice Brown',
    description: 'alicebrown | 250K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Emily Davis',
    description: 'emilydavis | 100K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Mark Lee',
    description: 'marklee | 50K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Laura Lee',
    description: 'lauralee | 10K followers',
    imgUrl:
      'https://images.unsplash.com/photo-1610737241336-371badac3b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
];

const chatData = [
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
  {
    id: 2,
    message: 'Hi there, good morning! How are you?',
    time: '12:01',
    type: 'receiver',
  },
  {
    id: 3,
    message: 'I am doing well, thanks for asking 😊',
    time: '12:02',
    type: 'sender',
  },
  {
    id: 4,
    message: "That's great to hear! What are your plans for the day?",
    time: '12:03',
    type: 'receiver',
  },
  {
    id: 5,
    message:
      'I have a few meetings scheduled, but otherwise just working from home. How about you?',
    time: '12:04',
    type: 'sender',
  },
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
  {
    id: 2,
    message: 'Hi there, good morning! How are you?',
    time: '12:01',
    type: 'receiver',
  },
  {
    id: 3,
    message: 'I am doing well, thanks for asking 😊',
    time: '12:02',
    type: 'sender',
  },
  {
    id: 4,
    message: "That's great to hear! What are your plans for the day?",
    time: '12:03',
    type: 'receiver',
  },
  {
    id: 5,
    message:
      'I have a few meetings scheduled, but otherwise just working from home. How about you?',
    time: '12:04',
    type: 'sender',
  },
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
  {
    id: 2,
    message: 'Hi there, good morning! How are you?',
    time: '12:01',
    type: 'receiver',
  },
  {
    id: 3,
    message: 'I am doing well, thanks for asking 😊',
    time: '12:02',
    type: 'sender',
  },
  {
    id: 4,
    message: "That's great to hear! What are your plans for the day?",
    time: '12:03',
    type: 'receiver',
  },
  {
    id: 5,
    message:
      'I have a few meetings scheduled, but otherwise just working from home. How about you?',
    time: '12:04',
    type: 'sender',
  },
];

const AddressData = [
  {
    id: 1,
    title: 'Home',
    address: '123, Main Street, New York, USA',
    isDefault: true,
  },
  {
    id: 2,
    title: 'Office',
    address: '345, Second Street, New York, USA',
    isDefault: true,
  },
  {
    id: 3,
    title: 'Appartment',
    address: '567, Third Street, New York, USA',
    isDefault: true,
  },
  {
    id: 4,
    title: "Parent's House",
    address: '789, Fourth Street, New York, USA',
    isDefault: true,
  },
  {
    id: 5,
    title: 'Farm House',
    address: '101, Fifth Street, New York, USA',
    isDefault: true,
  },
  {
    id: 6,
    title: 'Town Square',
    address: '123, Main Street, New York, USA',
    isDefault: true,
  },
];

const walletData = [
  {
    id: 1,
    product: 'Product 1',
    price: '$171,250',
    date: 'Dec 15, 2024 | 12:00 PM',
    status: strings.orders,
    productImage: images.shoesSport,
  },
  {
    id: 2,
    product: strings.topUpWallet,
    price: '$200,000',
    date: 'Jan 05, 2023 | 12:50 PM',
    status: strings.topUp,
  },
  {
    id: 3,
    product: 'Product 2',
    price: '$185,500',
    date: 'Dec 14, 2024 | 11:34 PM',
    status: strings.orders,
    productImage: images.product2,
  },
  {
    id: 4,
    product: 'Product 3',
    price: '$134,250',
    date: 'Dec 13, 2024 | 03:23 AM',
    status: strings.orders,
    productImage: images.shoesAdidas2,
  },
  {
    id: 5,
    product: strings.topUpWallet,
    price: '$354,800',
    date: 'Dec 12, 2024 | 02:50 AM',
    status: strings.topUp,
  },
  {
    id: 6,
    product: 'Product 4',
    price: '$435,520',
    date: 'Dec 03, 2024 | 02:34 PM',
    status: strings.orders,
    productImage: images.shoesAdidas1,
  },
  {
    id: 7,
    product: 'Product 5',
    price: '$144,800',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.snackerBlueForce,
  },
  {
    id: 8,
    product: 'Product 6',
    price: '$171,250',
    date: 'Jul 15, 2023 | 12:00 PM',
    status: strings.orders,
    productImage: images.snackerFlash,
  },
  {
    id: 9,
    product: strings.topUpWallet,
    price: '$500,00',
    date: 'Jan 05, 2023 | 12:50 PM',
    status: strings.topUp,
  },
];

const activeData = [
  {
    id: 1,
    product: 'Product 1',
    price: '$171,250',
    date: 'Dec 15, 2024 | 12:00 PM',
    status: strings.orders,
    productImage: images.shoesSport,
    color: '#7A5548',
    size: '40',
    nColor: 'Brown',
  },
  {
    id: 2,
    product: 'Product 2',
    price: '$485,900',
    date: 'Dec 14, 2024 | 11:34 PM',
    status: strings.orders,
    productImage: images.product2,
    color: '#949494',
    size: '39',
    nColor: 'Grey',
  },
  {
    id: 3,
    product: 'Product 3',
    price: '$165,300',
    date: 'Dec 13, 2024 | 03:23 AM',
    status: strings.orders,
    productImage: images.snackerFlash,
    color: '#101010',
    size: '43',
    nColor: 'Black',
  },
  {
    id: 4,
    product: 'Product 4',
    price: '$256,438',
    date: 'Dec 03, 2024 | 02:34 PM',
    status: strings.orders,
    productImage: images.snackerFlash,
    color: '#FFC02D',
    size: '42',
    nColor: 'Yellow',
  },
];

const completedOrderData = [
  {
    id: 1,
    product: 'Product 1',
    price: '$171,250',
    date: 'Dec 15, 2024 | 12:00 PM',
    status: strings.orders,
    productImage: images.shoesSport,
    color: '#7A5548',
    nColor: 'Brown',
  },
  {
    id: 2,
    product: 'Product 2',
    price: '$485,900',
    date: 'Dec 14, 2024 | 11:34 PM',
    status: strings.orders,
    productImage: images.snackerBlueForce,
    color: '#949494',
    nColor: 'Grey',
  },
  {
    id: 3,
    product: 'Product 3',
    price: '$165,300',
    date: 'Dec 13, 2024 | 03:23 AM',
    status: strings.orders,
    productImage: images.snackerFlash,
    color: '#101010',
    nColor: 'Black',
  },
  {
    id: 4,
    product: 'Product 4',
    price: '$256,438',
    date: 'Dec 03, 2024 | 02:34 PM',
    status: strings.orders,
    productImage: images.snackerBlueForce,
    color: '#FFC02D',
    nColor: 'Yellow',
  },
  {
    id: 5,
    product: 'Product 5',
    price: '$354,800',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.snackerFlash,
    color: '#F54336',
    nColor: 'Red',
  },
  {
    id: 6,
    product: 'Product 6',
    price: '$171,250',
    date: 'Jul 15, 2023 | 12:00 PM',
    status: strings.orders,
    productImage: images.snackerFlash,
    color: '#E7E7E7',
    nColor: 'White',
  },
];

const orderStatus = [
  {
    id: 1,
    title: 'Order In Transit - Dec 17',
    time: '12:00 PM',
    status: '32 Manchester Ave. Ringgold, GA 30736',
  },
  {
    id: 2,
    title: 'Order ... Customs Port - Dec 16',
    time: '14:40 PM',
    status: '4 Evergreen Street Lake Zurich, IL 60047',
  },
  {
    id: 3,
    title: 'Orders are ... Shipped - Dec 15',
    time: '11:30 AM',
    status: '9177 Hillcrest Street Wheeling, WV 26003',
  },
  {
    id: 4,
    title: 'Order is in Packing - Dec 15',
    time: '10:25 PM',
    status: '891 Glen Ridge St. Gainesville, VA 20155',
  },
  {
    id: 5,
    title: 'Verified Payments - Dec 15',
    time: '10:04 PM',
    status: '55 Summerhouse Dr. Apopka, FL 32703',
  },
];

const orderStatusCategory = [
  {
    id: 1,
    image: images.seller,
    position: 1,
    isHide: false,
  },
  {
    id: 2,
    image: images.shipping,
    position: 2,
    isHide: true,
  },
  {
    id: 3,
    image: images.courier,
    position: 3,
    isHide: true,
  },
  {
    id: 4,
    image: images.delivered,
    position: 4,
    isHide: true,
  },
];

const homeCategoryData = [
  {
    id: 1,
    image: images.nikeLogo,
    title: strings.nike,
    data: [
      {
        id: 1,
        product: 'Product 1',
        price: '$79.96',
        date: 'May 1, 2023 | 9:00 AM',
        status: 'orders',
        productImage: images.shoesAdidas1,
        color: '#000000',
        rating: '4.8',
        sold: '1.9k',
        condition: strings.new,
      },
      {
        id: 2,
        product: 'Product 2',
        price: '$79.96',
        date: 'May 5, 2023 | 2:30 PM',
        status: 'orders',
        productImage: images.shoesAdidas2,
        color: '#FFFFFF',
        rating: '4.6',
        sold: '1.6k',
        condition: strings.used,
      },
      {
        id: 3,
        product: 'Product 3',
        price: '$79.96',
        date: 'May 8, 2023 | 10:15 AM',
        status: 'orders',
        productImage: images.shoesNike1,
        color: '#001C3F',
        rating: '4.7',
        sold: '1.2k',
        condition: strings.new,
      },
      {
        id: 4,
        product: 'Product 4',
        price: '$79.96',
        date: 'May 10, 2023 | 3:45 PM',
        status: 'orders',
        productImage: images.shoesPuma2,
        color: '#C0C0C0',
        rating: '4.5',
        sold: '1.3k',
        condition: strings.new,
      },
      {
        id: 5,
        product: 'Product 5',
        price: '$79.96',
        date: 'May 12, 2023 | 11:00 AM',
        status: 'orders',
        productImage: images.shoesNike2,
        color: '#C7C7C7',
        rating: '4.9',
        sold: '1.8k',
        condition: strings.used,
      },
    ],
  },
  {
    id: 2,
    image: images.adidasLogo,
    title: strings.adidas,
    data: [
      {
        id: 1,
        product: 'Product 1',
        price: '$28.89',
        date: 'May 1, 2023 | 9:00 AM',
        status: 'orders',
        productImage: images.shoesPuma1,
        color: '#000000',
        rating: '4.8',
        sold: '1.9k',
        condition: strings.new,
      },
      {
        id: 2,
        product: 'Product 2',
        price: '$28.89',
        date: 'May 5, 2023 | 2:30 PM',
        status: 'orders',
        productImage: images.shoesPuma2,
        color: '#FFFFFF',
        rating: '4.7',
        sold: '1.6k',
        condition: strings.new,
      },
      {
        id: 3,
        product: 'Product 3',
        price: '$28.89',
        date: 'May 8, 2023 | 10:15 AM',
        status: 'orders',
        productImage: images.shoesPuma3,
        color: '#001C3F',
        rating: '4.6',
        sold: '2.2k',
        condition: strings.used,
      },
    ],
  },
  {
    id: 3,
    image: images.pumaLogo,
    title: strings.puma,
    data: [
      {
        id: 1,
        product: 'Product 1',
        price: '$42.4',
        date: 'May 1, 2023 | 9:00 AM',
        status: 'orders',
        productImage: images.shoesAdidas2,
        color: '#000000',
        rating: '4.8',
        sold: '2.1k',
        condition: strings.used,
      },
      {
        id: 2,
        product: 'Product 2',
        price: '$42.4',
        date: 'May 5, 2023 | 2:30 PM',
        status: 'orders',
        productImage: images.shoesAdidas1,
        color: '#FFFFFF',
        rating: '4.6',
        sold: '1.8k',
        condition: strings.new,
      },
      {
        id: 3,
        product: 'Product 3',
        price: '$42.4',
        date: 'May 8, 2023 | 10:15 AM',
        status: 'orders',
        productImage: images.shoesNike1,
        color: '#001C3F',
        rating: '4.7',
        sold: '1.4k',
        condition: strings.new,
      },
      {
        id: 4,
        product: 'Product 4',
        price: '$42.4',
        date: 'May 10, 2023 | 3:45 PM',
        status: 'orders',
        productImage: images.shoesNike2,
        color: '#C0C0C0',
        rating: '4.5',
        sold: '1.6k',
        condition: strings.new,
      },
    ],
  },
  {
    id: 4,
    image: images.converseLogo,
    title: strings.converse,
    data: [
      {
        id: 1,
        product: 'Product 1',
        price: '$89',
        date: 'May 1, 2023 | 9:00 AM',
        status: 'orders',
        productImage: images.shoesPuma3,
        color: '#000000',
        rating: '4.8',
        sold: '3.2k',
        condition: strings.new,
      },
      {
        id: 2,
        product: 'Product 2',
        price: '$39',
        date: 'May 5, 2023 | 2:30 PM',
        status: 'orders',
        productImage: images.shoesPuma2,
        color: '#FFFFFF',
        rating: '4.6',
        sold: '2.8k',
        condition: strings.used,
      },
    ],
  },
  {
    id: 5,
    image: images.vansLogo,
    title: strings.vans,
    data: [
      {
        id: 1,
        product: 'Product 1',
        price: '$36',
        date: 'May 1, 2023 | 9:00 AM',
        status: 'orders',
        productImage: images.shoesAdidas1,
        color: '#000000',
        rating: '4.7',
        sold: '1.9k',
        condition: strings.new,
      },
      {
        id: 2,
        product: 'Product 2',
        price: '$46',
        date: 'May 5, 2023 | 2:30 PM',
        status: 'orders',
        productImage: images.shoesAdidas2,
        color: '#FFFFFF',
        rating: '4.9',
        sold: '1.4k',
        condition: strings.new,
      },
      {
        id: 3,
        product: 'Product 3',
        price: '$61',
        date: 'May 8, 2023 | 10:15 AM',
        status: 'orders',
        productImage: images.shoesNike1,
        color: '#001C3F',
        rating: '4.8',
        sold: '1.2k',
        condition: strings.new,
      },
      {
        id: 4,
        product: 'Product 4',
        price: '$52',
        date: 'May 10, 2023 | 3:45 PM',
        status: 'orders',
        productImage: images.shoesNike3,
        color: '#C0C0C0',
        rating: '4.6',
        sold: '1.7k',
        condition: strings.new,
      },
    ],
  },
  {
    id: 6,
    image: images.gucciLogo,
    title: strings.gucci,
    data: [
      {
        id: 1,
        product: 'Product 1',
        price: '$3',
        date: 'May 22, 2023 | 5:30 PM',
        status: 'orders',
        productImage: images.shoesAdidas2,
        color: '#0000FF',
        rating: '5.0',
        sold: '500',
        condition: strings.new,
      },
      {
        id: 2,
        product: 'Product 2',
        price: '$3',
        date: 'May 22, 2023 | 5:30 PM',
        status: 'orders',
        productImage: images.shoesPuma3,
        color: '#0000FF',
        rating: '5.0',
        sold: '500',
        condition: strings.new,
      },
    ],
  },
  {
    id: 7,
    image: images.kappaLogo,
    title: strings.kappa,
    data: [
      {
        id: 1,
        product: 'Product 1',
        price: '$22',
        date: 'May 1, 2023 | 9:00 AM',
        status: 'orders',
        productImage: images.shoesPuma1,
        color: '#000000',
        rating: '4.8',
        sold: '3.2k',
        condition: strings.used,
      },
      {
        id: 2,
        product: 'Product 2',
        price: '$25',
        date: 'May 5, 2023 | 2:30 PM',
        status: 'orders',
        productImage: images.shoesNike1,
        color: '#FFFFFF',
        rating: '4.6',
        sold: '2.9k',
        condition: strings.used,
      },
      {
        id: 3,
        product: 'Product 3',
        price: '$28',
        date: 'May 8, 2023 | 10:15 AM',
        status: 'orders',
        productImage: images.shoesNike3,
        color: '#001C3F',
        rating: '4.7',
        sold: '2.5k',
        condition: strings.new,
      },
      {
        id: 4,
        product: 'Product 4',
        price: '$28',
        date: 'May 8, 2023 | 10:15 AM',
        status: 'orders',
        productImage: images.shoesAdidas1,
        color: '#001C3F',
        rating: '4.7',
        sold: '2.5k',
        condition: strings.new,
      },
    ],
  },
  {
    id: 8,
    image: images.filaLogo,
    title: strings.fila,
    data: [
      {
        id: 1,
        product: 'Product 1',
        price: '$45,000.00',
        date: 'May 1, 2023 | 9:00 AM',
        status: 'orders',
        productImage: images.shoesAdidas2,
        color: '#000000',
        rating: '4.8',
        sold: '2.1k',
        condition: strings.used,
      },
      {
        id: 2,
        product: 'Product 2',
        price: '$52,500.00',
        date: 'May 5, 2023 | 2:30 PM',
        status: 'orders',
        productImage: images.shoesAdidas1,
        color: '#FFFFFF',
        rating: '4.6',
        sold: '1.8k',
        condition: strings.new,
      },
      {
        id: 3,
        product: 'Product 3',
        price: '$56,800.00',
        date: 'May 8, 2023 | 10:15 AM',
        status: 'orders',
        productImage: images.shoesPuma1,
        color: '#001C3F',
        rating: '4.7',
        sold: '1.4k',
        condition: strings.new,
      },
      {
        id: 4,
        product: 'Product 4',
        price: '$63,700.00',
        date: 'May 10, 2023 | 3:45 PM',
        status: 'orders',
        productImage: images.shoesPuma3,
        color: '#C0C0C0',
        rating: '4.5',
        sold: '1.6k',
        condition: strings.new,
      },
      {
        id: 5,
        product: 'Product 4',
        price: '$82,500.00',
        date: 'May 12, 2023 | 11:00 AM',
        status: 'orders',
        productImage: images.shoesPuma2,
        color: '#C7C7C7',
        rating: '4.9',
        sold: '1.2k',
        condition: strings.used,
      },
      {
        id: 6,
        product: 'Product 5',
        price: '$36,000.00',
        date: 'May 15, 2023 | 8:30 AM',
        status: 'orders',
        productImage: images.shoesPuma4,
        color: '#0000FF',
        rating: '4.4',
        sold: '2.3k',
        condition: strings.new,
      },
    ],
  },
];

const mostPopularData = [
  {
    label: strings.all,
    value: 'All',
  },
  {
    label: strings.nike,
    value: 'Nike',
  },
  {
    label: strings.adidas,
    value: 'Adidas',
  },
  {
    label: strings.puma,
    value: 'Puma',
  },
  {
    label: strings.converse,
    value: 'Converse',
  },
  {
    label: strings.vans,
    value: 'Vans',
  },
  {
    label: strings.gucci,
    value: 'Gucci',
  },
  {
    label: strings.kappa,
    value: 'Kappa',
  },
  {
    label: strings.fila,
    value: 'fila',
  },
];

const homeProductData = [
  {
    id: 1,
    product: 'Product 1',
    price: '$79.96',
    date: 'Dec 15, 2024 | 12:00 PM',
    status: strings.orders,
    productImage: images.shoesAdidas1,
    color: '#000',
    rating: '4.5',
    sold: '79.96k',
    condition: strings.new,
    category: strings.nike,
    isSale: true,
    deal: '$900',
    nColor: 'Black',
    size: '40',
  },
  {
    id: 2,
    product: 'Product 2',
    price: '$52.95',
    date: 'Dec 14, 2024 | 11:34 PM',
    status: strings.orders,
    productImage: images.shoesAdidas2,
    color: '#949494',
    rating: '4.5',
    sold: '6.4k',
    condition: strings.used,
    category: strings.nike,
    isSale: false,
    deal: '$940',
    nColor: 'Grey',
    size: '40',
  },
  {
    id: 3,
    product: 'Product 3 ',
    price: '$74.03',
    date: 'Dec 13, 2024 | 03:23 AM',
    status: strings.orders,
    productImage: images.shoesNike1,
    color: '#000000',
    rating: '3.2',
    sold: '4.6k',
    condition: strings.used,
    category: strings.adidas,
    isSale: true,
    deal: '$290',
    nColor: 'Black',
    size: '40',
  },
  {
    id: 4,
    product: 'Product 4',
    price: '$91.09',
    date: 'Dec 03, 2024 | 02:34 PM',
    status: strings.orders,
    productImage: images.shoesNike2,
    color: '#101010',
    rating: '4.1',
    sold: '11.3k',
    condition: strings.used,
    category: strings.adidas,
    isSale: false,
    deal: '$590',
    nColor: 'Black',
    size: '40',
  },
  {
    id: 5,
    product: 'Product 5',
    price: '$79.20',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.shoesPuma1,
    color: '#E7E7E7',
    rating: '4.5',
    sold: '3642',
    condition: strings.new,
    category: strings.puma,
    isSale: false,
    deal: '$790',
    nColor: 'White',
    size: '40',
  },
  {
    id: 6,
    product: 'Product 6',
    price: '$79.20',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.shoesImg1,
    color: '#E7E7E7',
    rating: '4.5',
    sold: '3642',
    condition: strings.new,
    category: strings.puma,
    isSale: true,
    deal: '$40',
    nColor: 'White',
    size: '40',
  },
  {
    id: 7,
    product: 'Product 7',
    price: '$79.20',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.shoesImg2,
    color: '#E7E7E7',
    rating: '4.5',
    sold: '3642',
    condition: strings.new,
    category: strings.converse,
    isSale: true,
    deal: '$10',
    nColor: 'White',
    size: '40',
  },
  {
    id: 8,
    product: 'Product 8',
    price: '$79.20',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.shoesImg3,
    color: '#E7E7E7',
    rating: '4.5',
    sold: '3642',
    condition: strings.new,
    category: strings.converse,
    isSale: true,
    deal: '$440',
    nColor: 'White',
    size: '40',
  },
  {
    id: 9,
    product: 'Product 9',
    price: '$79.20',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.shoesImg4,
    color: '#E7E7E7',
    rating: '4.5',
    sold: '3642',
    condition: strings.new,
    category: strings.vans,
    isSale: true,
    deal: '$230',
    nColor: 'White',
    size: '40',
  },
  {
    id: 10,
    product: 'Product 10',
    price: '$79.20',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.shoesImg5,
    color: '#E7E7E7',
    rating: '4.5',
    sold: '3642',
    condition: strings.new,
    category: strings.vans,
    isSale: true,
    deal: '$120',
    nColor: 'White',
    size: '40',
  },
  {
    id: 11,
    product: 'Product 11',
    price: '$79.20',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.shoesImg1,
    color: '#E7E7E7',
    rating: '4.5',
    sold: '3642',
    condition: strings.new,
    category: strings.gucci,
    isSale: true,
    deal: '$760',
    nColor: 'White',
    size: '40',
  },
  {
    id: 12,
    product: 'Product 12',
    price: '$79.20',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.shoesImg2,
    color: '#E7E7E7',
    rating: '4.5',
    sold: '3642',
    condition: strings.new,
    category: strings.gucci,
    isSale: true,
    deal: '$30',
    nColor: 'White',
    size: '40',
  },
  {
    id: 13,
    product: 'Product 13',
    price: '$79.20',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.shoesImg3,
    color: '#E7E7E7',
    rating: '4.5',
    sold: '3642',
    condition: strings.new,
    category: strings.kappa,
    isSale: true,
    deal: '$90',
    nColor: 'White',
    size: '40',
  },
  {
    id: 14,
    product: 'Product 14',
    price: '$79.20',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.shoesImg4,
    color: '#E7E7E7',
    rating: '4.5',
    sold: '3642',
    condition: strings.new,
    category: strings.kappa,
    isSale: true,
    deal: '$90',
    nColor: 'White',
    size: '40',
  },
];

const myWishListProductData = [
  {
    id: 1,
    product: 'Product 1',
    price: '$69.95',
    date: 'Dec 15, 2024 | 12:00 PM',
    status: strings.orders,
    productImage: images.ShoesPuma2,
    color: '#000',
    rating: '4.3',
    sold: '23.5k',
    condition: strings.new,
  },
  {
    id: 2,
    product: 'Product 2',
    price: '$99.91',
    date: 'Dec 14, 2024 | 11:34 PM',
    status: strings.orders,
    productImage: images.ShoesNike2,
    color: '#949494',
    rating: '4.5',
    sold: '6.4k',
    condition: strings.used,
  },
  {
    id: 3,
    product: 'Product 3',
    price: '$50.88',
    date: 'Dec 13, 2024 | 03:23 AM',
    status: strings.orders,
    productImage: images.ShoesNike3,
    color: '#000000',
    rating: '3.2',
    sold: '4.6k',
    condition: strings.used,
  },
  {
    id: 4,
    product: 'Product 4',
    price: '$75.26',
    date: 'Dec 03, 2024 | 02:34 PM',
    status: strings.orders,
    productImage: images.ShoesPuma4,
    color: '#101010',
    rating: '4.1',
    sold: '11.3k',
    condition: strings.used,
  },
  {
    id: 5,
    product: 'Product 5',
    price: '$75.26',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.ShoesPuma3,
    color: '#E7E7E7',
    rating: '4.5',
    sold: '3642',
    condition: strings.new,
  },
  {
    id: 6,
    product: 'Product 6',
    price: '$75.26',
    date: 'Aug 07, 2023 | 05:40 PM ',
    status: strings.orders,
    productImage: images.ShoesPuma3,
    color: '#E7E7E7',
    rating: '4.5',
    sold: '3642',
    condition: strings.new,
  },
];

const searchProductData = [
  {
    id: 1,
    product: 'Gucci',
    price: '$172',
    date: 'Dec 15, 2024 | 12:00 PM',
    status: strings.orders,
    productImage: images.product2,
    color: '#000',
    rating: '4.3',
    sold: '23.5k',
    condition: strings.new,
  },
  {
    id: 2,
    product: 'Vans',
    price: '$54',
    date: 'Dec 14, 2024 | 11:34 PM',
    status: strings.orders,
    productImage: images.product1,
    color: '#949494',
    rating: '4.5',
    sold: '6.4k',
    condition: strings.used,
  },
];

const notificationData = [
  {
    title: 'Today',
    data: [
      {
        id: 1,
        image: images.warningIcon,
        title: 'Please confirm your email.',
        time: 'Feb 26, 2023 at 12:36 PM',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        id: 1,
        image: images.tickIcon,
        title: 'Your support ticket №78912365',
        time: 'Jun 29, 2023 at 12:36 PM',
        description: 'The order has been delivered',
      },
    ],
  },
  {
    title: 'December 22, 2024',
    data: [
      {
        id: 1,
        image: images.giftIcon,
        title: 'Credit Card Connected!',
        time: 'Dec 29, 2023 at 12:36 PM',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
  },
];

const colorData = [
  '#7A5548',
  '#797979',
  '#9F9F9F',
  '#673AB3',
  '#FF981F',
  '#607D8A',
  '#3F51B2',
];

const sizeData = [
  {
    label: '38',
    value: 1,
  },
  {
    label: '39',
    value: 2,
  },
  {
    label: '40',
    value: 3,
  },
  {
    label: '41',
    value: 4,
  },
  {
    label: '42',
    value: 5,
  },
  {
    label: '43',
    value: 6,
  },
];

const ratingData = [
  {
    label: strings.all,
    value: 'All',
  },
  {
    label: '1',
    value: 1,
  },
  {
    label: '2',
    value: 2,
  },
  {
    label: '3',
    value: 3,
  },
  {
    label: '4',
    value: 4,
  },
  {
    label: '5',
    value: 5,
  },
];

const reviewsData = [
  {
    id: 1,
    name: 'John Duew',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',

    rating: 5,
    review: 'My family and I really like it, wow!! 💯💯💯',
    like: 729,
    time: '6 days ago',
  },
  {
    id: 2,
    name: 'Jane Doe',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',

    rating: 4,
    review:
      "I just bought it, and it arrived at my house in just 3 days. Wow, I don't think there's anything faster 🔥🔥🔥",
    like: 625,
    time: '2 days ago',
  },
  {
    id: 3,
    name: 'Bob Smith',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',

    rating: 3,
    review:
      'The item is okay, but it could be better. My son likes it, but he has some complaints about it.',
    like: 50,
    time: '1 day ago',
  },
  {
    id: 4,
    name: 'Alice Johnson',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',

    rating: 2,
    review:
      'The item is not very good. My son does not like it very much and does not play with it often.',
    like: 10,
    time: '1 hour ago',
  },
  {
    id: 5,
    name: 'Tom Hanks',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',

    rating: 1,
    review:
      'The item is terrible. My son hates it and does not play with it at all.',
    like: 1,
    time: '1 minute ago',
  },
  {
    id: 6,
    name: 'Megan Fox',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',

    rating: 5,
    review:
      'The item is very good, my son likes it very much and plays every day 💯💯💯',
    like: 352,
    time: '6 days ago',
  },
  {
    id: 7,
    name: 'Samantha Smith',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',

    rating: 4,
    review:
      'The item is good, but it could be better. My daughter likes it, but she has some complaints about it.',
    like: 200,
    time: '3 days ago',
  },
  {
    id: 8,
    name: 'David Johnson',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',

    rating: 3,
    review:
      'The item is okay, but it could be better. My daughter likes it, but she has some complaints about it.',
    like: 100,
    time: '2 days ago',
  },
  {
    id: 9,
    name: 'Emily Brown',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',

    rating: 2,
    review:
      'The item is not very good. My daughter does not like it very much and does not play with it often.',
    like: 20,
    time: '1 day ago',
  },
  {
    id: 10,
    name: 'Olivia Davis',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',

    rating: 1,
    review:
      'The item is terrible. My daughter hates it and does not play with it at all.',
    like: 2,
    time: '1 hour ago',
  },
  {
    id: 11,
    name: 'Sophia Wilson',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',

    rating: 5,
    review:
      'The item is very good, my daughter likes it very much and plays every day 💯💯💯',
    like: 352,
    time: '6 days ago',
  },
];

const sortAndFilterData = [
  {
    label: strings.mostPopular,
    value: 'Most Popular',
  },
  {
    label: strings.mostRecent,
    value: 'Most Recent',
  },
  {
    label: strings.oldest,
    value: 'Oldest',
  },
  {
    label: strings.priceLowToHigh,
    value: 'Price Low To High',
  },
  {
    label: strings.priceHighToLow,
    value: 'Price High To Low',
  },
];

const ConditionData = [
  {
    label: strings.all,
    value: 'All',
  },
  {
    label: strings.new,
    value: 'New',
  },
  {
    label: strings.used,
    value: 'Used',
  },
];

const shippingData = [
  {
    id: 1,
    title: 'Truck',
    description: 'Delivery in 3-5 days',
    price: '$200',
    image: images.shipping,
  },
  {
    id: 2,
    title: 'Train',
    description: 'Delivery in 2-3 days',
    price: '$250',
    image: images.train,
  },
  {
    id: 3,
    title: 'Container Ship',
    description: 'Delivery in 1-2 days',
    price: '$300',
    image: images.ship,
  },
  {
    id: 3,
    title: 'Plane',
    description: 'Delivery in 1 days',
    price: '$350',
    image: images.plane,
  },
];

const addPromoData = [
  {
    id: 1,
    title: 'Special 25% Off',
    description: 'Special promo only today!',
  },
  {
    id: 2,
    title: 'Discount 30% Off',
    description: 'New user special promo',
  },
  {
    id: 3,
    title: 'Special 20% Off',
    description: 'Special promo only today!',
  },
  {
    id: 4,
    title: 'Discount 15% Off',
    description: 'Special promo only valid today!',
  },
  {
    id: 5,
    title: 'Discount 35% Off',
    description: 'Special promo only valid today!',
  },
];

const galleryPhotosData = [
  {
    id: 1,
    image: images.shoesAdidas1,
  },
  {
    id: 2,
    image: images.shoesAdidas2,
  },
  {
    id: 3,
    image: images.shoesNike1,
  },
  {
    id: 4,
    image: images.shoesNike2,
  },
  {
    id: 5,
    image: images.shoesNike3,
  },
];

const inboxChatData = [
  {
    id: 1,
    store: 'Gucci Official',
    message: 'Hello, welcome to Gucci ...',
    time: '09.41',
    notification: 2,
    image: images.gucciAvatar,
  },
  {
    id: 2,
    store: 'Luis official',
    message: 'I just completed it 😂😂',
    time: '09:22',
    notification: 4,
    image: images.luisAvatar,
  },
  {
    id: 3,
    store: 'Alice Official',
    message: 'omg, this is amazing 🔥🔥🔥',
    time: '09.16',
    image: images.aliceAvata,
  },
  {
    id: 4,
    store: 'Palpal Store',
    message: 'Wow, this is really fast 😎',
    time: 'Yesterday',
    notification: 2,
    image: images.palPalAvatar,
  },
  {
    id: 5,
    store: 'Golang Pro',
    message: 'just ideas for next time 😆',
    time: 'Dec 20, 2024',
    notification: 1,
    image: images.golangProAvatar,
  },
  {
    id: 6,
    store: 'Zen GoVap',
    message: "I'm really like driving! 😄😄",
    time: 'Dec 20, 2024',
    image: images.zenGoVapAvatar,
  },
  {
    id: 7,
    store: 'Nike Store',
    message: 'perfect! 💯💯💯',
    time: 'Dec 20, 2024',
    image: images.nikeStoreAvatar,
  },
  {
    id: 9,
    store: 'HaLinh Official',
    message: 'I just completed it 😂😂',
    time: '20.00',
    image: images.HalinhAvatar,
  },
];

const inboxCallData = [
  {
    id: 1,
    store: 'Adam store',
    time: 'Nov 28, 2024',
    status: strings.outgoing,
    image: images.adamAvatar,
  },
  {
    id: 2,
    store: 'Lyra Boutique',
    time: 'Nov 28, 2024',
    status: strings.incoming,
    image: images.lyraBounceAvatar,
  },
  {
    id: 3,
    store: 'Ankle Biters',
    time: 'Dec 20, 2024',
    status: strings.incoming,
    image: images.ankleAvatar,
  },
  {
    id: 4,
    store: 'Just Kidding',
    time: 'Oct 30, 2024',
    status: strings.outgoing,
    image: images.justAvatar,
  },
  {
    id: 5,
    store: 'Toes to Nose',
    time: 'Dec 17, 2024',
    status: strings.outgoing,
    image: images.toesAvatar,
  },
  {
    id: 6,
    store: 'Flymen shop',
    time: 'Dec 19, 2024',
    status: strings.incoming,
    image: images.flymenAvatar,
  },
  {
    id: 7,
    store: 'Kidding Around',
    time: 'Nov 28, 2024',
    status: strings.outgoing,
    image: images.kiddingAvatar,
  },
  {
    id: 9,
    store: 'Iberis Boutique',
    time: 'Nov 28, 2024',
    status: strings.incoming,
    image: images.iberisAvatar,
  },
];

const bannerImage = [
  {
    id: 1,
    discount: '20%',
    dateDeals: 'Deals 1',
    description: 'Get a new fashion discount. Only valid this week.',
    image: images.specialImageLight1,
  },
  {
    id: 2,
    discount: '30%',
    dateDeals: 'Deals 2',
    description: 'Get a new fashion discount. Only valid this week.',
    image: images.specialImageLight2,
  },
  {
    id: 3,
    discount: '10%',
    dateDeals: 'Deals 3',
    description: 'Get a new fashion discount. Only valid this week.',
    image: images.specialImageLight3,
  },
];

const headerBanner = [
  {
    id: 1,
    discount: '20%',
    dateDeals: 'Deals 1',
    description: 'Get a new fashion discount. Only valid this week.',
    image: images.bgShoes1,
    banner: images.bgHome1,
  },
  {
    id: 2,
    discount: '30%',
    dateDeals: 'Deals 2',
    description: 'Get a new fashion discount. Only valid this week.',
    image: images.bgShoes1,
    banner: images.bgHome2,
  },
  {
    id: 3,
    discount: '10%',
    dateDeals: 'Deals 3',
    description: 'Get a new fashion discount. Only valid this week.',
    image: images.bgShoes1,
    banner: images.bgHome1,
  },
];

const specialImage = [
  {
    id: 1,
    discount: '20%',
    dateDeals: 'Deals 1',
    description: 'Get a new fashion discount. Only valid this week.',
    image: images.specialImageLight1,
  },
  {
    id: 2,
    discount: '30%',
    dateDeals: 'Deals 2',
    description: 'Get a new fashion discount. Only valid this week.',
    image: images.specialImageLight2,
  },
  {
    id: 3,
    discount: '50%',
    dateDeals: 'Deals 3',
    description: 'Get a new fashion discount. Only valid this week.',
    image: images.specialImageLight3,
  },
  {
    id: 4,
    discount: '80%',
    dateDeals: 'Deals 4',
    description: 'Get a new fashion discount. Only valid this week.',
    image: images.specialImageLight4,
  },
];

export {
  ProfileSetting,
  GenderData,
  OnBoardingSlide,
  contactUsData,
  helperCategoryData,
  helperData,
  languageData,
  privacyPolicyData,
  userDetail,
  chatData,
  AddressData,
  walletData,
  activeData,
  orderStatus,
  orderStatusCategory,
  completedOrderData,
  homeCategoryData,
  myWishListProductData,
  searchProductData,
  mostPopularData,
  homeProductData,
  notificationData,
  colorData,
  ratingData,
  reviewsData,
  sortAndFilterData,
  shippingData,
  addPromoData,
  ConditionData,
  galleryPhotosData,
  inboxChatData,
  inboxCallData,
  bannerImage,
  specialImage,
  headerBanner,
  sizeData,
};
