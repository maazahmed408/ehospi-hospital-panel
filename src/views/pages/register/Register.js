// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';


// import { Link } from 'react-router-dom';
// import image from 'src/assets/images/avatars/Bg-Login.png';




// const Register = () => {
//   {/*const [passwordType1, SetPasswordType1] = useState('password');
//   const [passwordType2, SetPasswordType2] = useState('password');
// const [passwordType3, SetPasswordType3] = useState('password');*/}


//   const history = useHistory();
//   const initialValues = { Firstname: " ", Lastname: " ", mobile: " ", Email: '', password: " ", conformpassword: '' };

//   const [formValues, setformValues] = useState(initialValues);
//   const [formErrors, setformErrors] = useState({});
//   const [IsSubmit, setIsSubmit] = useState(false);

//   const [btnEnabled, setBtnEnabled] = useState(false);
//   const [btnClass, setBtnClass] = useState('disabled');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setformValues({ ...formValues, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     console.log(handleSubmit);
//     console.log(setIsSubmit);
//     e.preventDefault();
//     (setformErrors(validate(formValues)))

//     setIsSubmit(true);
//   }
//   useEffect(() => {
//     console.log(IsSubmit);
//     if (Object.keys(formErrors).length === 0 && IsSubmit) {
//     }
//   }, [formErrors])

//   const validate = (values) => {
//     const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/;
    
//     //const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
//     const errors = {}
//     if (values.Firstname == 0) {
//       errors.Firstname = "Firstname is required";
//     }
//     if (values.Lastname == 0) {
//       errors.Lastname = "Lastname is required";
//     }
//     if (values.mobile.length <= 9) {
//       errors.mobile = "mobile is required";
//     }
//     if (values.Email = 0 ) {
//       errors.Email = "Email invalid";
//     }
//     if (values.password == 0) {
//       errors.password = "password is required";
//     }
//     if (values.conformpassword == 0) {
//       errors.conformpassword = "password is required"
//     }
//     if (values.password !== values.conformpassword) {
//       errors.conformpassword = "conform password don't match.";

//     }
//     return errors
//   }
//   const handleDirect = (event) => {
//     history.push('/Hospitalform');
//   };
//   return (
//     <>
//       <div style={{
//         backgroundImage: `url(${image})`,
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//       }}>
//         <section className='vh-100 d-flex flex-column align-items-center justify-content-center '>
//           {Object.keys(formErrors).length === 0 && IsSubmit ? (handleDirect()
//           ) : (
//             <Link to="/fddfgd"></Link>
//           )}
//           <div className='container-fluid' >
//             <div className='row d-flex justify-content-center align-items-center h-100'>
//               <div className='col-md-9 col-lg-6 col-xl-5'>
//                 <img
//                   src=''
//                   className='img-fluid'
//                   alt=''
//                 />
//               </div>
//               <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1 py-5' style={{background:'white', borderRadius:'5px'}}>
//                 <form onSubmit={handleSubmit}>
//                   <div className=''>
//                     <h2 className='mb-0 me-3 text-center' style={{ fontWeight: 'bolder' }}>e-Hospi</h2>
//                     <div className='col-sm-12 text align-center' style={{ fontSize: '13px', color: '#cdc8c8', marginLeft:'70px'}}> Please fill this form to create your account</div>

//                     <div className='col-sm-12 d-flex'>
                      
//                       <div className='col-sm-5 form-outline mb-0'>
//                         <div className=''>
                          
//                           <lable For='First Name' >First Name</lable>
//                           <input
//                             type='text'
//                             name='Firstname'
//                             id='First Name'
//                             value={formValues.Firstname}
//                             onChange={handleChange}
//                             className='form-control  form-control-sm'
//                             placeholder='Enter name'

//                           />
//                           <div style={{ color: "red" }}> {formErrors.Firstname}</div>
//                         </div>
                        
//                       </div>
//                       <div className=' col-sm-5 form-outline mb-0 ' style={{marginLeft:'4rem'}}>
//                         <div className=''>
//                           <lable>Last Name</lable>
//                           <input
//                             type='text'
//                             name='Lastname'
//                             id='Lastaname'
//                             value={formValues.Lastname}
//                             onChange={handleChange}
//                             className='form-control form-control-sm '

//                           />
//                           <div style={{ color: "red" }}> {formErrors.Lastname}</div>
//                         </div>
                        
//                       </div>
//                     </div>
//                     <div className='form-outline mb-0'>
//                       <lable>Mobile No</lable>
//                       <input
//                         type='text'
//                         name='mobile'
//                         required='required'
//                         value={formValues.mobile}
//                         onChange={handleChange}
//                         className='form-control form-control-sm'


//                       />
//                       <p style={{ color: "red" }}>{formErrors.mobile}</p>
//                     </div>
//                     <div className='form-outline mb-0 pt-0'>
//                       <lable>Email</lable>
//                       <input
//                         type='text'
//                         name='Email'
//                         value={formValues.Email}
//                         onChange={handleChange}
//                         className='form-control form-control-sm '
//                       />
//                       <p style={{ color: "red" }}>{formErrors.Email}</p>
//                     </div>
                    
//                     <div className='form-outline mb-0'>
//                       <lable>password</lable>
//                       <input
//                         type='text'
//                         name='password'
//                         value={formValues.password}
//                         onChange={handleChange}
//                         className='form-control form-control-sm'

//                       />
//                       <p style={{ color: "red" }}>{formErrors.password}</p>
//                     </div>
                    
//                     <div className='form-outline mt-2'>
//                       <lable>Conform Password</lable>
//                       <input
//                         type='text'
//                         name='conformpassword'
//                         value={formValues.conformpassword}
//                         onChange={handleChange}
//                         className='form-control form-control-sm'
//                       />

//                     </div>
//                     <p style={{ color: "red" }}>{formErrors.conformpassword}</p>
//                     <div className='form-check mt-2 align-items-end'>
//                       <input
//                         className='form-check-input mb-0'
//                         type='checkbox'
//                         onChange={(e) => {
//                           if (btnEnabled) {
//                             setBtnEnabled(false);
//                             setBtnClass('btn col-12 disabled');
//                           } else {
//                             setBtnEnabled(true);
//                             setBtnClass('btn col-12');
//                           }
//                         }}
//                         id='agree'
//                       />

//                       <label className='form-check-label' htmlFor='agree'>
//                         I agree to terms and conditions
//                       </label>
//                     </div>
//                     <div className='text-center text-lg-start mt-0 pt-0 text align-center mb-0'>
//                       <div className='row-12 text align-center form-outline mb-2'>
//                         <button

//                           type="submit"
//                           className='col-12  btn btn-primary btn-bg '
//                           style={{ paddingLeft: '4rem', paddingRight: '4rem' }}
//                         >
//                           Next
//                         </button>
//                       </div>
//                     </div>
//                     <div className='text align-center d-flex' style={{marginLeft:'80px'}}>
//                     <div className="">Already have an account?</div>
//                     <div className=''><Link to="/Login">Sign in</Link></div>
//                     </div>
//                   </div>
                  
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   )
// }
// export default Register;