import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

// Doctor
const All_Doctor = React.lazy(() =>
  import('./views/Doctor/All Doctor/All Doctor'),
);
const Add_Doctor = React.lazy(() =>
  import('./views/Doctor/Add Doctor/Add Doctor'),
);

//Department
const All_Department = React.lazy(() =>
  import('./views/Department/All Department/All Department'),
);
const Add_Department = React.lazy(() =>
  import('./views/Department/Add Department/Add Department'),
);
//Photos
const All_Photos = React.lazy(() => import('./views/Photos/ListPhoto'));
const Add_Photos = React.lazy(() => import('./views/Photos/AddPhotos'));

//Appointment
const Doctor_schedule = React.lazy(() =>
  import('./views/Appointment/Doctor schedule/Doctor schedule'),
);
const Add_schedule = React.lazy(() =>
  import('./views/Appointment/Add schedule/Add schedule'),
);

//patient
const Add_patient = React.lazy(() =>
  import('./views/Patient/Add patient/Add patient'),
);
const All_patient = React.lazy(() =>
  import('./views/Patient/All patient/All patient'),
);

//Bed Menu
const Add_bed = React.lazy(() => import('./views/Bed Booking/Add bed/Add bed'));
const Bed_expense = React.lazy(() =>
  import('./views/Bed Booking/Bed Expense/Bed Expense'),
);
const All_bed = React.lazy(() => import('./views/Bed Booking/All bed/All bed'));
const Add_facility = React.lazy(() =>
  import('./views/Bed Booking/Add Bed facility/Add faciility'),
);

//AMENITIES
const Add_Amenities = React.lazy(() =>
  import('./views/Amenities/Add Amenities/AddAmenities'),
);
const Amenities_Price = React.lazy(() =>
  import('./views/Amenities/Amenities Price/AmenitiesPrice'),
);
const Add_Facilities = React.lazy(() =>
  import('./views/Facilities/Add Facilities/AddFacilities'),
);
const Facilities_Price = React.lazy(() =>
  import('./views/Facilities/Facilities Price/FacilitiesPrice'),
);
const Add_Services = React.lazy(() =>
  import('./views/Services/Add Services/AddServices'),
);
const Services_List = React.lazy(() =>
  import('./views/Services/Services List/ServicesList'),
);
const Add_Insurance = React.lazy(() =>
  import('./views/Insurance/Add Insurance/AddInsurance'),
);
const Insurance_List = React.lazy(() =>
  import('./views/Insurance/Insurance List/InsuranceList'),
);

const Add_BedTypes = React.lazy(() =>
  import('./views/Bed Types/Add Bed Type/AddBedType'),
);
const BedType_List = React.lazy(() =>
  import('./views/Bed Types/Bed Type List/BedTypeList'),
);

//Accepted Booking
const All_Booking = React.lazy(() =>
  import('./views/Bed Bookings/All Booking/All Booking'),
);
const Accepted_booking = React.lazy(() =>
  import('./views/Bed Bookings/Accepted Booking/Accepted Booking'),
);
const Pending_booking = React.lazy(() =>
  import('./views/Bed Bookings/Pending Booking/Pending Booking'),
);
const Rejected_booking = React.lazy(() =>
  import('./views/Bed Bookings/Rejected Booking/Rejected Booking'),
);
const Completed_booking = React.lazy(() =>
  import('./views/Bed Bookings/Completed Booking/Completed Booking'),
);

const AddSubAdmin = React.lazy(() =>
  import('./views/Manage Sub Admins/Add Sub Admin/Add SubAdmin'),
);

const SubAdmin_list = React.lazy(() =>
  import('./views/Manage Sub Admins/SubAdmins List/SubAdmin List'),
);

//Manage Hospital SubAdmin
// const ManageHospitalAdmin = React.lazy(() =>
//   import(
//     './views/Manage HospitalSubAdmin/Manage HospitalAdmin/Manage HospitalAdmin'
//   ),
// );
// const HospitalSubAmin_List = React.lazy(() =>
//   import(
//     './views/Manage HospitalSubAdmin/Manage HospitalSubAdmin/HospitalSubAdmin List'
//   ),
// );

//Payment
const Payment = React.lazy(() => import('./views/Payments/Payment/Payment'));
const Add_payment = React.lazy(() =>
  import('./views/Payments/Add payment/Add payment'),
);

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/Doctor', name: 'Doctor', component: All_Doctor, exact: true },
  { path: '/Doctor/All Doctor', name: 'All Doctor', component: All_Doctor },
  { path: '/Doctor/Add Doctor', name: 'Add Doctor', component: Add_Doctor },

  {
    path: '/Department',
    name: 'Department',
    component: All_Department,
    exact: true,
  },
  {
    path: '/Department/All Department',
    name: 'All Department',
    component: All_Department,
  },
  {
    path: '/Department/Add Department',
    name: 'Add Department',
    component: Add_Department,
  },
  {
    path: '/Photos',
    name: 'Photos',
    component: All_Photos,
    exact: true,
  },
  {
    path: '/Photos/All Photos',
    name: 'All Photos',
    component: All_Photos,
  },
  {
    path: '/Photos/Add Photos',
    name: 'Add Photos',
    component: Add_Photos,
  },

  {
    path: '/Appointment',
    name: 'Appointment',
    component: Doctor_schedule,
    exact: true,
  },

  {
    path: '/Appointment/Doctor schedule',
    name: 'Doctor schedule',
    component: Doctor_schedule,
  },
  {
    path: '/Appointment/Add schedule',
    name: 'Add schedule',
    component: Add_schedule,
  },

  { path: '/Patient', name: 'Patient', component: All_patient, exact: true },
  { path: '/Patient/All patient', name: 'All patient', component: All_patient },
  { path: '/Patient/Add patient', name: 'Add patient', component: Add_patient },

  {
    path: '/Bed Booking',
    name: 'Bed Booking',
    component: All_bed,
    exact: true,
  },
  { path: '/Bed Booking/All bed', name: 'All bed', component: All_bed },
  { path: '/Bed Booking/Add bed', name: 'Add bed', component: Add_bed },
  {
    path: '/Bed Booking/Bed Expense',
    name: 'Bed Expense',
    component: Bed_expense,
  },
  {
    path: '/Bed Booking/Add Bed facility',
    name: 'Add Bed facility',
    component: Add_facility,
  },

  {
    path: '/Bed Bookings',
    name: 'Bed Bookings',
    component: All_Booking,
    exact: true,
  },
  {
    path: '/Bed Bookings/All Booking',
    name: 'All Booking',
    component: All_Booking,
  },
  {
    path: '/Bed Bookings/Accepted Booking',
    name: 'Accepted Booking',
    component: Accepted_booking,
  },
  {
    path: '/Bed Bookings/Pending Booking',
    name: 'Pending Booking',
    component: Pending_booking,
  },
  {
    path: '/Bed Bookings/Rejected Booking',
    name: 'Rejected Booking',
    component: Rejected_booking,
  },
  {
    path: '/Bed Bookings/Completed Booking',
    name: 'Completed Booking',
    component: Completed_booking,
  },

  { path: '/Payments', name: 'Payments', component: Add_payment, exact: true },
  { path: '/Payments/Payment', name: 'Payment', component: Payment },
  {
    path: '/Payments/Add payment',
    name: 'Add payment',
    component: Add_payment,
  },
  {
    path: '/Manage Sub Admins',
    name: 'Add Sub Admin',
    component: AddSubAdmin,
    exact: true,
  },
  {
    path: '/Manage Sub Admins/Add Sub Admin',
    name: 'Add Sub Admin',
    component: AddSubAdmin,
  },
  {
    path: '/Manage Sub Admins/SubAdmins List',
    name: 'SubAdmins List',
    component: SubAdmin_list,
  },
  {
    path: '/Amenities',
    name: 'Amenities',
    component: Add_Amenities,
    exact: true,
  },
  {
    path: '/Amenities/Add Amenities',
    name: 'Add Amenities',
    component: Add_Amenities,
  },
  {
    path: '/Amenities/Amenities Price',
    name: 'Amenities Price',
    component: Amenities_Price,
  },
  {
    path: '/Facilities',
    name: 'Add Facilities',
    component: Add_Facilities,
    exact: true,
  },
  {
    path: '/Facilities/Add Facilities',
    name: 'Add Facilities',
    component: Add_Facilities,
  },
  {
    path: '/Facilities/Facilities Price',
    name: 'Facilities Price',
    component: Facilities_Price,
  },
  {
    path: '/Services',
    name: 'Add Services',
    component: Add_Services,
    exact: true,
  },
  {
    path: '/Services/Add Services',
    name: 'Add Services',
    component: Add_Services,
  },
  {
    path: '/Services/Services List',
    name: 'Services List',
    component: Services_List,
  },
  {
    path: '/Insurance',
    name: 'Add Insurance',
    component: Add_Insurance,
    exact: true,
  },
  {
    path: '/Insurance/Add Insurance',
    name: 'Add Insurance',
    component: Add_Insurance,
  },
  {
    path: '/Insurance/Insurance List',
    name: 'Insurance List',
    component: Insurance_List,
  },
  {
    path: '/Bed Types',
    name: 'Bed Types',
    component: Add_BedTypes,
    exact: true,
  },
  {
    path: '/Bed Types/Add Bed Type',
    name: 'Add Bed Type',
    component: Add_BedTypes,
  },
  {
    path: '/Bed Types/Bed Type List',
    name: 'Bed Type List',
    component: BedType_List,
  },
];
export default routes;
