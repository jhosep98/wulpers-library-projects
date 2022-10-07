import { InputVariantType } from '@wulperstudio/cms';

interface DrawerConstsModel {
  paddingContainerDrawer: string;
  variantInput: InputVariantType;
}

export const consts = {
  backgroundImageRandom: 'https://source.unsplash.com/random',
  backgroundImageDefault: 'https://bit.ly/3owyZ8I',
  boxShadowStyle: 'rgb(0 0 0 / 9%) 0px 3px 12px',
  widthLayout: '50vw',
  avatarImg: 'https://mui.com/static/images/avatar/1.jpg',
  iframeVideo: 'https://www.youtube.com/embed/FdrEjwymzdY?',
  mapLink:
    'https://www.google.com/maps/place/Tokyo,+Japan/@35.5090627,139.2093904,9z/data=!3m1!4b1!4m5!3m4!1s0x605d1b87f02e57e7:0x2e01618b22571b89!8m2!3d35.6761919!4d139.6503106',
  iframeMap:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831438.4631872233!2d139.20939036334497!3d35.509062686028535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sar!4v1662489436025!5m2!1sen!2sar',
  logoHeader:
    'https://assets-global.website-files.com/5a8300770e20150001950f4f/5fc65274714fb356fe5f1fa8_Logo%20-%20full%20color%20dark%20accent.png',
};

export const DRAWER_CONSTS: DrawerConstsModel = {
  paddingContainerDrawer: '15px',
  variantInput: 'unfilled',
};

export const DEFAULT_REQUIRED_MESSAGE = 'Este campo es obligatorio';
export const DEFAULT_ERROR_MESSAGE = 'OCURRIÓ UN ERROR';
export const DEFAULT_UPDATE_MESSAGE = 'SE ACTUALIZÓ EL REGISTRO';
export const DEFAULT_CREATE_MESSAGE = 'SE HA CREADO EL REGISTRO';
export const DEFAULT_DELETE_MESSAGE = 'SE HA ELIMINADO EL REGISTRO';

export const DEFAULT_PROCESSING_MESSAGE = 'GUARDANDO...';
export const DEFAULT_SUCCESS_MESSAGE = 'SE REALIZÓ LA OPERACIÓN CORRECTAMENTE';

export const readOnly = {
  readOnly: true,
};

// array with numbers from 1 to 34 in string
export const arrIDTags = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '32',
  '33',
  '34',
];

export const FAKE_IMAGES_API_URL = 'https://jsonplaceholder.typicode.com/albums/1/photos';
