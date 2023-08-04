import {v4 as uuid} from 'uuid';
// carousel
import CarouselImage1 from '../assets/carousel/img1.jpg';
import CarouselImage2 from '../assets/carousel/img2.jpg';
import CarouselImage3 from '../assets/carousel/img4.jpg';
import CarouselImage4 from '../assets/carousel/img5.jpg';
import CarouselImage5 from '../assets/carousel/img6.jpg';
import CarouselImage6 from '../assets/carousel/img7.jpg';
// banner images
import bannerImg1 from '../assets/Banner/quran.svg';
import bannerImg2 from '../assets/Banner/book.svg';
import bannerImg3 from '../assets/Banner/game.svg';

export const carouselImages = [
  CarouselImage1,
  CarouselImage2,
  CarouselImage3,
  CarouselImage4,
  CarouselImage5,
  CarouselImage6,
];

// film container
import FilmCard1 from '../assets/film container/film.jpg';

export const filmCardInfo = [
  {
    imgUrl: FilmCard1,
    name: 'زاوالا',
    director: 'محمد موسوی',
    rate: 7.32,
    label1: 'درام',
    label2: 'راز آلود',
    link: '#',
    id: uuid(),
  },
  {
    imgUrl: FilmCard1,
    name: 'زاوالا',
    director: 'محمد موسوی',
    rate: 7.32,
    label1: 'درام',
    label2: 'راز آلود',
    link: '#',
    id: uuid(),
  },
  {
    imgUrl: FilmCard1,
    name: 'زاوالا',
    director: 'محمد موسوی',
    rate: 7.32,
    label1: 'درام',
    label2: 'راز آلود',
    link: '#',
    id: uuid(),
  },
  {
    imgUrl: FilmCard1,
    name: 'زاوالا',
    director: 'محمد موسوی',
    rate: 7.32,
    label1: 'درام',
    label2: 'راز آلود',
    link: '#',
    id: uuid(),
  },
];

// category container
import CategoryCard1 from '../assets/card/image1.png';
export const categoryContainerInfo = [
  {
    link: '#',
    imgUrl: CategoryCard1,
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    link: '#',
    imgUrl: CategoryCard1,
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    link: '#',
    imgUrl: CategoryCard1,
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    link: '#',
    imgUrl: CategoryCard1,
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    link: '#',
    imgUrl: CategoryCard1,
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    link: '#',
    imgUrl: CategoryCard1,
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    link: '#',
    imgUrl: CategoryCard1,
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    link: '#',
    imgUrl: CategoryCard1,
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
];

// channel card container
import channelCardImg1 from '../assets/card/img1.jpeg';

export const channelContainerInfo = [
  {
    imgUrl: channelCardImg1,
    link: '#',
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    imgUrl: channelCardImg1,
    link: '#',
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    imgUrl: channelCardImg1,
    link: '#',
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    imgUrl: channelCardImg1,
    link: '#',
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    imgUrl: channelCardImg1,
    link: '#',
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    imgUrl: channelCardImg1,
    link: '#',
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    imgUrl: channelCardImg1,
    link: '#',
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    imgUrl: channelCardImg1,
    link: '#',
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    imgUrl: channelCardImg1,
    link: '#',
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    imgUrl: channelCardImg1,
    link: '#',
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    imgUrl: channelCardImg1,
    link: '#',
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    imgUrl: channelCardImg1,
    link: '#',
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
  {
    imgUrl: channelCardImg1,
    link: '#',
    title: 'مجالس اهل بیت',
    id: uuid(),
  },
];

// Aside menu tags
export const asideMenuTagInfo = [
  {
    title: 'مذهبی',
    link: '#banner1',
    id: uuid(),
  },
  {
    title: 'برترین',
    link: '#banner2',
    id: uuid(),
  },
  {
    title: 'پرفروش هفته',
    link: '#banner3',
    id: uuid(),
  },
  {
    title: 'سبک زندگی',
    link: '#',
    id: uuid(),
  },
  {
    title: 'اخبار',
    link: '#',
    id: uuid(),
  },
  {
    title: 'تبلیغ گسترده',
    link: '#',
    id: uuid(),
  },
  {
    title: 'سروش پلاس',
    link: '#',
    id: uuid(),
  },
];

//Banner images
export const sectionArray = [
  {
    image: bannerImg1,
    color: 'rgba(21, 128, 61, 0.3)',
    textColor: 'rgba(21, 128, 61, 1)',
    upperText: 'پویش سبک',
    lowerText: 'زندگی اسلامی',
    buttonText: 'اطلاعات بیشتر',
    oneLine: false,
    headerText: 'مذهبی',
    tagId: 'banner1',
    id: uuid(),
  },
  {
    image: bannerImg2,
    color: 'rgba(59, 130, 246, 0.3)',
    textColor: 'rgba(59, 130, 246, 1)',
    upperText: 'صبحانه',
    lowerText: 'کتاب',
    buttonText: 'ورود به کانال',
    oneLine: true,
    headerText: 'برترین',
    tagId: 'banner2',
    id: uuid(),
  },
  {
    image: bannerImg3,
    color: 'rgba(168, 85, 247, 0.3)',
    textColor: 'rgba(168, 85, 247, 1)',
    upperText: 'دنیای',
    lowerText: 'سرگرمی',
    buttonText: 'ورود به کانال',
    oneLine: true,
    headerText: 'پرفروش هفته',
    tagId: 'banner3',
    id: uuid(),
  },
];
