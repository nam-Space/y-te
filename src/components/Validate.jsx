import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'

const Validate = () => {
    const submitSchema = Yup.object().shape({
        name: Yup.string().required(),
        identifycation: Yup.string().required(),
        birth: Yup.number().required().min(1900),
        national: Yup.string().required(),
        province: Yup.string().required(),
        district: Yup.string().required(),
        wards: Yup.string().required(),
        village: Yup.string().required(),
        phone: Yup.string().required(),
        email: Yup.string().required().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, 'Invalid email address')
    })

    return (
        <>
            <h1>Tờ khai y tế</h1>
            <Formik
                initialValues={{
                    name: '',
                    identifycation: '',
                    birth: 0,
                    gender: '',
                    national: '',
                    companyWorking: '',
                    role: '',
                    healthInsurance: '',
                    province: '',
                    district: '',
                    wards: '',
                    village: '',
                    phone: '',
                    email: ''
                }} 
                validationSchema={submitSchema} 
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <div className={`${errors.name && touched.name && 'custom-input-error'}`}>
                            <label htmlFor="name">Họ tên</label>
                            <Field name='name'/>
                            {errors.name && touched.name && (
                                <div className='error'>{errors.name}</div>
                            )}
                        </div>
                        <div className={`${errors.name && touched.name && 'custom-input-error'}`}>
                            <label htmlFor="identifycation">Số hộ chiếu / CMND</label>
                            <Field name='identifycation'/>
                            {errors.identifycation && touched.identifycation && (
                                <div className='error'>{errors.identifycation}</div>
                            )}
                        </div>
                        <div className={`${errors.name && touched.name && 'custom-input-error'}`}>
                            <label htmlFor="birth">Năm sinh</label>
                            <Field name='birth' type='number'/>
                            {errors.birth && touched.birth && (
                                <div className='error'>{errors.birth}</div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="birth">Giới tính</label>
                            <label className='check__input' htmlFor="male">
                                <Field id='male' type='radio' name='gender' value='male'/>
                                Nam
                            </label>
                            <label className='check__input' htmlFor="femail">
                                <Field id='femail' type='radio' name='gender' value='femail'/>
                                Nữ
                            </label>
                        </div>
                        <div className={`${errors.name && touched.name && 'custom-input-error'}`}>
                            <label htmlFor="national">Quốc tịch</label>
                            <Field name='national'/>
                            {errors.national && touched.national && (
                                <div className='error'>{errors.national}</div>
                            )}
                        </div>
                        <div>
                            <label htmlFor="companyWorking">Công ty làm việc</label>
                            <Field name='companyWorking'/>
                        </div>
                        <div>
                            <label htmlFor="role">Bộ phận làm việc</label>
                            <Field name='role'/>
                        </div>
                        <div>
                            <label className='check__input' htmlFor="">
                                Có thẻ bảo hiểm y tế
                                <Field type='checkbox' name='healthInsurance' value='healthInsurance'/>
                            </label>
                        </div>
                        
                        <h2>Địa chỉ liên lạc tại Việt Nam</h2>
                        <div className={`${errors.province && touched.province && 'custom-input-error'}`}>
                            <label htmlFor="province">Tỉnh thành</label>
                            <Field name='province'/>
                            {errors.province && touched.province && (
                                <div className='error'>{errors.province}</div>
                            )}
                        </div>
                        <div className={`${errors.district && touched.district && 'custom-input-error'}`}>
                            <label htmlFor="district">Quận / Huyện</label>
                            <Field name='district'/>
                            {errors.district && touched.district && (
                                <div className='error'>{errors.district}</div>
                            )}
                        </div>
                        <div className={`${errors.wards && touched.wards && 'custom-input-error'}`}>
                            <label htmlFor="wards">Phường / Xã</label>
                            <Field name='wards'/>
                            {errors.wards && touched.wards && (
                                <div className='error'>{errors.wards}</div>
                            )}
                        </div>
                        <div className={`${errors.village && touched.village && 'custom-input-error'}`}>
                            <label htmlFor="village">Số nhà, phố, tổ dân phố / thôn / đội</label>
                            <Field name='village'/>
                            {errors.village && touched.village && (
                                <div className='error'>{errors.village}</div>
                            )}
                        </div>
                        <div className={`${errors.phone && touched.phone && 'custom-input-error'}`}>
                            <label htmlFor="phone">Điện thoại</label>
                            <Field name='phone'/>
                            {errors.phone && touched.phone && (
                                <div className='error'>{errors.phone}</div>
                            )}
                        </div>
                        <div className={`${errors.email && touched.email && 'custom-input-error'}`}>
                            <label htmlFor="email">Email</label>
                            <Field name='email'/>
                            {errors.email && touched.email && (
                                <div className='error'>{errors.email}</div>
                            )}
                        </div>
                        <br />
                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default Validate