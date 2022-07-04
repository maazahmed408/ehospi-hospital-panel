import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faHome,
  faUser,
  faList,
  faHospital,
  faBookMedical,
  faMoneyCheck,
  faAdd,
  faBed,
} from '@fortawesome/free-solid-svg-icons';

import { CNavGroup, CNavItem } from '@coreui/react';

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: (
      <FontAwesomeIcon
        color="bluelight"
        icon={faHome}
        style={{ margin: '10px' }}
      />
    ),
  },

  {
    component: CNavGroup,
    name: 'Department',
    to: '/Department',
    icon: <FontAwesomeIcon icon={faHospital} style={{ margin: '10px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Add Department',
        to: '/Department/Add Department',
        icon: <FontAwesomeIcon icon={faAdd} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'All Department',
        to: '/Department/All Department',
        icon: <FontAwesomeIcon icon={faHospital} style={{ margin: '10px' }} />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Amenities',
    to: '/Amenities',
    icon: <FontAwesomeIcon icon={faMoneyCheck} style={{ margin: '10px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Add Amenities',
        to: '/Amenities/Add Amenities',
        icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Amenities Price',
        to: '/Amenities/Amenities Price',
        icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Facilities',
    to: '/Facilities',
    icon: <FontAwesomeIcon icon={faMoneyCheck} style={{ margin: '10px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Add Facilities',
        to: '/Facilities/Add Facilities',
        icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Facilities Price',
        to: '/Facilities/Facilities Price',
        icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Services',
    to: '/Services',
    icon: <FontAwesomeIcon icon={faMoneyCheck} style={{ margin: '10px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Add Services',
        to: '/Services/Add Services',
        icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Services List',
        to: '/Services/Services List',
        icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Insurance',
    to: '/Insurance',
    icon: <FontAwesomeIcon icon={faMoneyCheck} style={{ margin: '10px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Add Insurance',
        to: '/Insurance/Add Insurance',
        icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Insurance List',
        to: '/Insurance/Insurance List',
        icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Bed Types',
    to: '/Bed Types',
    icon: <FontAwesomeIcon icon={faMoneyCheck} style={{ margin: '10px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Add Bed Type',
        to: '/Bed Types/Add Bed Type',
        icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Bed Type List',
        to: '/Bed Types/Bed Type List',
        icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Manage Sub Admins',
    to: '/Manage Sub Admins',
    icon: <FontAwesomeIcon icon={faMoneyCheck} style={{ margin: '10px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Add Sub Admin',
        to: '/Manage Sub Admins/Add Sub Admin',
        icon: <FontAwesomeIcon icon={faUser} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'SubAdmins List',
        to: '/Manage Sub Admins/SubAdmins List',
        icon: <FontAwesomeIcon icon={faList} style={{ margin: '10px' }} />,
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Bed Bookings',
    to: '/Bed Bookings',
    icon: <FontAwesomeIcon icon={faBookMedical} style={{ margin: '10px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'All Booking',
        to: '/Bed Bookings/All Booking',
        icon: <FontAwesomeIcon icon={faBed} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Pending Booking',
        to: '/Bed Bookings/Pending Booking',
        icon: (
          <FontAwesomeIcon icon={faMoneyCheck} style={{ margin: '10px' }} />
        ),
      },
      {
        component: CNavItem,
        name: 'Accepted Booking',
        to: '/Bed Bookings/Accepted Booking',
        icon: <FontAwesomeIcon icon={faBed} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Rejected Booking',
        to: '/Bed Bookings/Rejected Booking',
        icon: <FontAwesomeIcon icon={faBed} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'Completed Booking',
        to: '/Bed Bookings/Completed Booking',
        icon: <FontAwesomeIcon icon={faBed} style={{ margin: '10px' }} />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Photos',
    to: '/Photos',
    icon: <FontAwesomeIcon icon={faHospital} style={{ margin: '10px' }} />,
    items: [
      {
        component: CNavItem,
        name: 'Add Photos',
        to: '/Photos/Add Photos',
        icon: <FontAwesomeIcon icon={faAdd} style={{ margin: '10px' }} />,
      },
      {
        component: CNavItem,
        name: 'All Photos',
        to: '/Photos/All Photos',
        icon: <FontAwesomeIcon icon={faHospital} style={{ margin: '10px' }} />,
      },
    ],
  },
];

export default _nav;
