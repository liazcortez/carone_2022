import {
  Aperture as MakeIcon,
  Truck as VehicleIcon,
  Home as StoreIcon,
  Layers as CategoryIcon,
  User as UserIcon,
  Users as UsersIcon,
  Camera as MediaIcon,
  Tablet as CampaignIcon,
  Briefcase,
  Image,
  Coffee
} from 'react-feather';

const t = (t)=>t;

const Sections = [
  {
    subheader: t('Navbar.Control'),
    items: [
      {
        title: 'SEO',
        href: '/app/management/seo',
        icon: Coffee
      },
      {
        title: t('Navbar.Makes'),
        href: '/app/management/makes',
        icon: MakeIcon
      },
      {
        title: t('Navbar.BannersC1'),
        href: '/app/management/carone',
        icon: Image
      },
      {
        title: t('Navbar.Media'),
        href: '/app/management/medias',
        icon: MediaIcon
      },
      {
        title: t('Navbar.Cars'),
        href: '/app/management/cars',
        icon: VehicleIcon
      },
      {
        title: t('Navbar.Vehicles'),
        href: '/app/management/vehicles',
        icon: VehicleIcon
      },
      {
        title: t('Navbar.Preowneds'),
        href: '/app/management/preowneds',
        icon: VehicleIcon
      },
      {
        title: t('Navbar.Stores'),
        href: '/app/management/stores',
        icon: StoreIcon
      },
      {
        title: t('Navbar.Categories'),
        href: '/app/management/categories',
        icon: CategoryIcon
      },
      {
        title: t('Navbar.Users'),
        href: '/app/management/users',
        icon: UserIcon
      },
      {
        title: t('Navbar.Jobs'),
        icon: Briefcase,
        href: '/app/management/jobs'
      },
      {
        title: t('Navbar.Applicants'),
        icon: UserIcon,
        href: '/app/management/applicants'
      }
    ]
  },
  {
    subheader: 'Marketing',
    items: [
      {
        title: t('Navbar.Designs'),
        icon: Image,
        href: '/app/management/designs'
      },
      {
        title: t('Navbar.Segmentations'),
        icon: UsersIcon,
        href: '/app/management/segmentations'
      },
      {
        title: t('Navbar.Campaigns'),
        icon: CampaignIcon,
        href: '/app/management/campaigns'
      }
    ]
  }
];

export default Sections;
