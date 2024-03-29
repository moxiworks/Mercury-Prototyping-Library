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
import TableView from './Views/TableView/TableView';
import TestimonialsView from './Views/TestimonialsView/TestimonialsView';
import AnimationView from './Views/AnimationView/AnimationView';
import ImpersonView from './Views/ImpersonView/ImpersonView';
import TimelineView from './Views/TimelineView/TimelineView';
import InputViewCC from './Views/InputViewCC/InputViewCC';
import FiltersView from './Views/FiltersView/FiltersView';
import InlineInfoView from './Views/InlineInfoView/InlineInfoView';
import TabsView from './Views/TabsView/TabsView';
import DataCardView from './Views/DataCardView/DataCardView';
import PieChartView from './Views/PieChartView/PieChartView';
import GraphLine from './Views/GraphLine/GraphLine';

let pageArray = [
  {
    title: 'Colors',
    link: 'colors',
    comp: ColorsView
  },
    {
      title: 'Input Text',
      link: 'textinput',
      comp: InputView
    },
    {
      title: 'Input Text Char Count',
      link: 'textinputcc',
      comp: InputViewCC,
      new: false
    },
    {
      title: 'Input Search',
      link: 'search',
      comp: SearchView
    },
    {
      title: 'Input Date',
      link: 'date',
      comp: DateView
    },
    {
      title: 'Input Upload',
      link: 'uploadinput',
      comp: UploadInputView
    },
    {
      title: 'Image Upload',
      link: 'imageupload',
      comp: ImageUploadView
    },
    {
      title: 'Input Textarea',
      link: 'textarea',
      new: false,
      comp: TextFieldView
    },
    {
      title: 'Input Select',
      link: 'select',
      comp: SelectView
    },
    {
      title: 'Buttons',
      link: 'buttons',
      comp: ButtonView
    },
    {
      title: 'Input Toggle',
      link: 'toggle',
      comp: ToggleView
    },
    {
      title: 'Input Checkbox',
      link: 'checkbox',
      comp: CheckboxView
    },
    {
      title: 'Input Radio',
      link: 'radio',
      comp: RadioView
    },
    {
      title: 'Input Range',
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
      title: 'Graph Bar',
      link: 'graphbar',
      comp: GraphView
    },
    {
      title: 'Graph Oval',
      link: 'graphoval',
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
    },
    {
      title: 'Tables',
      link: 'tables',
      comp: TableView
    },
    {
      title: 'Testimonials',
      link: 'testimonials',
      comp: TestimonialsView
    },
    {
      title: 'Animations',
      link: 'animations',
      comp: AnimationView
    }
    ,{
      title: 'Impersonate',
      link: 'imperson',
      new: false,
      comp: ImpersonView
    },{
      title: 'Timeline',
      link: 'timeline',
      new: false,
      comp: TimelineView
    },{
      title: "Filters",
      link:'filters',
      comp :FiltersView,
      new:false
    },
    {
      title: "Inline Info",
      link:'inlineinfo',
      comp :InlineInfoView,
      new:false
      
    },
    {
      title: "Tabs",
      link:'tabs',
      comp :TabsView,
      new:true
    },
    {
      title: "Data Cards",
      link:'datacards',
      comp :DataCardView,
      new:true
    },
    {
      title: "Graph Pie",
      link:'piegraph',
      comp :PieChartView,
      new:true
    },
    {
      title: "Graph Line",
      link:'linegraph',
      comp :GraphLine,
      new:true
    }
  ]


  export default pageArray;