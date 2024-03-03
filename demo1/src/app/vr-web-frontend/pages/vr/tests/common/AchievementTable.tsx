import React from 'react'
import {toAbsoluteUrl} from "../../../../../../_metronic/helpers";

type Props = {
    className: string | undefined

    title: string
    topic1,topic2,topic3,topic4 : string | undefined
    topic1Achievement1,topic1Achievement2,topic1Achievement3: string | undefined
    topic2Achievement1,topic2Achievement2,topic2Achievement3: string | undefined
    topic3Achievement1,topic3Achievement2,topic3Achievement3: string | undefined
    topic4Achievement1,topic4Achievement2,topic4Achievement3: string | undefined
}

const AchievementTable: React.FC<Props> = ({title, className,topic1,topic1Achievement1,topic1Achievement2,topic1Achievement3,topic2Achievement1,topic2Achievement2,topic2Achievement3,topic3Achievement1,topic3Achievement2,topic3Achievement3,topic4Achievement1,topic4Achievement2,topic4Achievement3,topic2,topic3,topic4}) => {
    return (
        <div className={`card ${className}`}>
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>{title}</span>
                </h3>
            </div>

            <div className='card-body py-3'>
                <div className='table-responsive'>
                    <table className='table align-middle gs-0 gy-4'>
                        <thead>
                        <tr className='fw-bold text-muted bg-light'>
                            <th className='ps-4 min-w-325px rounded-start'>Topic</th>
                            <th className='min-w-125px'>Achievement 1</th>
                            <th className='min-w-125px'>Achievement 2</th>
                            <th className='min-w-200px'>Achievement 3</th>
                        </tr>
                        </thead>

                        <tbody>

                        {topic1 && <tr>
                            <td>
                                <div className='d-flex align-items-center'>
                                    <div className='symbol symbol-50px me-5'>
                                        <img
                                            src={toAbsoluteUrl('/media/stock/600x400/img-26.jpg')}
                                            className=''
                                            alt=''
                                        />
                                    </div>
                                    <div className='d-flex justify-content-start flex-column'>
                                        <a className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                            {topic1}
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                    {topic1Achievement1}
                                </a>
                            </td>
                            <td>
                                <a className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                    {topic1Achievement2}
                                </a>
                            </td>
                            <td>
                                <a className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                    {topic1Achievement3}
                                </a>
                            </td>
                        </tr>}

                        {topic2 && <tr>
                            <td>
                                <div className='d-flex align-items-center'>
                                    <div className='symbol symbol-50px me-5'>
                                        <img
                                            src={toAbsoluteUrl('/media/stock/600x400/img-3.jpg')}
                                            className=''
                                            alt=''
                                        />
                                    </div>
                                    <div className='d-flex justify-content-start flex-column'>
                                        <a className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                            {topic2}
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                    {topic2Achievement1}
                                </a>
                            </td>
                            <td>
                                <a className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                    {topic2Achievement2}
                                </a>
                            </td>
                            <td>
                                <a className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                    {topic2Achievement3}
                                </a>
                            </td>
                        </tr>}

                        {topic3 && <tr>
                            <td>
                                <div className='d-flex align-items-center'>
                                    <div className='symbol symbol-50px me-5'>
                                        <img
                                            src={toAbsoluteUrl('/media/stock/600x400/img-9.jpg')}
                                            className=''
                                            alt=''
                                        />
                                    </div>
                                    <div className='d-flex justify-content-start flex-column'>
                                        <a className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                            {topic3}
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                    {topic3Achievement1}
                                </a>
                            </td>
                            <td>
                                <a className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                    {topic3Achievement2}
                                </a>
                            </td>
                            <td>
                                <a className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                    {topic3Achievement3}
                                </a>
                            </td>
                        </tr>}

                        {topic4 && <tr>
                            <td>
                                <div className='d-flex align-items-center'>
                                    <div className='symbol symbol-50px me-5'>
                                        <img
                                            src={toAbsoluteUrl('/media/stock/600x400/img-18.jpg')}
                                            className=''
                                            alt=''
                                        />
                                    </div>
                                    <div className='d-flex justify-content-start flex-column'>
                                        <a className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                                            {topic4}
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <a className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                    {topic4Achievement1}
                                </a>
                            </td>
                            <td>
                                <a className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                    {topic4Achievement2}
                                </a>
                            </td>
                            <td>
                                <a className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                    {topic4Achievement3}
                                </a>
                            </td>
                        </tr>}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export {AchievementTable}
