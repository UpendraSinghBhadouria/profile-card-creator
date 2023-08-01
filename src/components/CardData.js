import React, { useRef } from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CardData = ({ name, role, image, email, phone, linkedinAcc, state, gender }) => {

    const pdfRef = useRef();


    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('profile-card.pdf');
        })
    }

    return (
        <>
            <div className='cards'>
                <div className='container emp-profile'>
                    <div className="" ref={pdfRef}>
                        <form>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profile-img">
                                        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" /> */}
                                        <img src={image} alt="" />
                                        {/* <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file" />
                                </div> */}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="profile-head">
                                        <h5>
                                            {name}
                                        </h5>
                                        <h6>
                                            {role}
                                        </h6>
                                        <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="home-tab" data-toggle="tab" href='/' role="tab" aria-controls="home" aria-selected="true">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="profile-tab" data-toggle="tab" role="tab" href='/' aria-controls="profile" aria-selected="false">Timeline</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    {/* <button className='btn btn-primary' onClick={downloadPDF}> Download</button> */}
                                    {/* <input type="submit" className="profile-edit-btn" name="btnAddMore" defaultValue="Edit Profile" /> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profile-work">
                                        <p>WORK LINK</p>
                                        <a href={linkedinAcc} rel="noreferrer" target="_blank">Linkedin Profile</a><br />
                                        <a href>Github Profile</a><br />
                                        <a href>Instagram Profile</a>
                                        {/* <p>SKILLS</p>
                                <a href>Web Designer</a><br />
                                <a href>Web Developer</a><br />
                                <a href>WordPress</a><br />
                                <a href>WooCommerce</a><br />
                                <a href>PHP, .Net</a><br /> */}
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="tab-content profile-tab" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>User Id</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{name.charAt(0)}{name.charAt(1)}{name.charAt(2)}{phone.charAt(0)}{phone.charAt(1)}{phone.charAt(2)} </p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Name</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{name}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Email</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{email}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Phone</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{phone}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Gender</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{gender}</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>State</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>{state}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Experience</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Expert</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Hourly Rate</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>10$/hr</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Total Projects</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>230</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>English Level</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>Expert</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label>Availability</label>
                                                </div>
                                                <div className="col-md-6">
                                                    <p>6 months</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>Your Bio</label><br />
                                                    <p>Your detail description</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className=" text-center float-right">
                        <button className='btn btn-primary' onClick={downloadPDF}> Download</button>
                    </div>
                </div>

            </div>


        </>
    )
}

export default CardData
