import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl">Rahabul Islam</h2>
                    <p className='text-xl '>Email : <span className='text-success'>rahabulislam1@gmail.com</span> </p>
                    <div>
                        <h2 className='text-center text-3xl text-success'>Educational Background</h2>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>*</th>
                                        <th>Passing Exam</th>
                                        <th>Institution</th>
                                        <th>Passing year</th>
                                        <th>Group</th>
                                        <th>GPA/CGPA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>SSC</td>
                                        <td>Nazrul Academy School</td>
                                        <td>2012</td>
                                        <td>Science</td>
                                        <td>5.00</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>HSC</td>
                                        <td>Agricultural University College</td>
                                        <td>2014</td>
                                        <td>Science</td>
                                        <td>4.90</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>B.Sc</td>
                                        <td>Mawlana Bhashani Science and Technology University</td>
                                        <td>2021</td>
                                        <td>CSE</td>
                                        <td>2.94</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>

                </div>
            </div>
            <div className='mt-12 text-xl'>
                <h2 className='text-2xl mb-2'>Two of my Projects link is here :</h2>
                <p>Bike Collection : <span className='text-primary'>https://bike-warehouse2.web.app/</span></p>
                <p>Capture Your Image : <span className='text-primary'>https://iridescent-arithmetic-521238.netlify.app/</span></p>
            </div>
        </div>
    );
};

export default MyPortfolio;