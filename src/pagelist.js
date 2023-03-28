import DropDownView from './Views/DropDownView/DropDownView';
import ButtonView from './Views/ButtonView/ButtonView';
import InputView from './Views/InputView/InputView';
import ToggleView from './Views/ToggleView/ToggleView';
import SelectView from './Views/SelectView/SelectView';
import CheckboxView from './Views/CheckboxView/CheckboxView';
import TextFieldView from './Views/TextFieldView/TextFieldView';
import UploadInputView from './Views/UploadInputView/UploadInputView';
import RadioView from './Views/RadioView/RadioView';
import RangeSelectView from './Views/RangeSelectView/RangeSelectView';
import BannerView from './Views/BannerView/BannerView';
import SubmenuView from './Views/SubmenuView/SubmenuView';
import LoaderView from './Views/LoaderView/LoaderView';
import SearchView from './Views/SearchView/SearchView';
import ImageUploadView from './Views/ImageUploadView/ImageUploadView';
import GraphView from './Views/GraphView/GraphView';
import ModalView from './Views/ModalView/ModalView';
import DialogView from './Views/DialogView/DialogView';
import DateView from './Views/DateView/DateView';
import MainmenuView from './Views/MainmenuView/MainmenuView';
import FileView from './Views/FileView/FileView';
import CalendarSmallView from './Views/CalendarSmallView/CalendarSmallView';
import CalendarLargeView from './Views/CalendarLargeView/CalendarLargeView';
import ColorsView from './Views/ColorsView/ColorsView';
import OvalGraph from './Views/OvalGraph/OvalGraph';
import PropertyCardView from './Views/PropertyCardView/PropertyCardView';

let pageArray = [
  {
    title: 'Colors',
    link: 'colors',
    comp: ColorsView
  },
    {
      title: 'Text Input',
      link: 'textinput',
      comp: InputView
    },
    {
      title: 'Search Input',
      link: 'search',
      comp: SearchView
    },
    {
      title: 'Date Input',
      link: 'date',
      comp: DateView
    },
    {
      title: 'Upload Input',
      link: 'uploadinput',
      comp: UploadInputView
    },
    {
      title: 'Image Upload',
      link: 'imageupload',
      comp: ImageUploadView
    },
    {
      title: 'Textarea',
      link: 'textarea',
      comp: TextFieldView
    },
    {
      title: 'Select',
      link: 'select',
      comp: SelectView
    },
    {
      title: 'Buttons',
      link: 'buttons',
      comp: ButtonView
    },
    {
      title: 'Toggle',
      link: 'toggle',
      comp: ToggleView
    },
    {
      title: 'Checkbox',
      link: 'checkbox',
      comp: CheckboxView
    },
    {
      title: 'Radio',
      link: 'radio',
      comp: RadioView
    },
    {
      title: 'Range',
      link: 'range',
      comp: RangeSelectView
    },
    {
      title: 'Dropdown',
      link: 'dropdown',
      comp: DropDownView
    },
    {
      title: 'Main Menu',
      link: 'mainmenu',
      comp: MainmenuView
    },
    {
        title: 'Sub Menu',
        link: 'submenu',
        comp: SubmenuView
      },
    {
      title: 'Banners',
      link: 'banners',
      comp: BannerView
    },
    {
      title: 'Loaders',
      link: 'loaders',
      comp: LoaderView
    },
    {
      title: 'Bar Graph',
      link: 'graphs',
      comp: GraphView
    },
    {
      title: 'Oval Graph',
      link: 'ovalgraph',
      comp: OvalGraph
    },
    {
      title: 'Modal',
      link: 'modal',
      comp: ModalView
    },
    {
      title: 'Dialogs',
      link: 'dialogs',
      comp: DialogView
    },
    {
      title: 'File View',
      link: 'fileview',
      comp: FileView
    },
    {
      title: 'Calendar Small',
      link: 'calsmall',
      comp: CalendarSmallView
    },
    {
      title: 'Calendar Large',
      link: 'callarge',
      comp: CalendarLargeView
    },
    {
      title: 'Property Card',
      link: 'propcard',
      comp: PropertyCardView
    }
  ]


  export default pageArray;