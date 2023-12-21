import React from "react";
import {

    BsFacebook,
    BsInstagram,
    BsTwitter,

} from 'react-icons/bs';



const Footer = () => {
    return (

        <footer>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 bg-primary text-white xl:px-42 gap-2 md:gap-20">




            <ul className="px-10 xl:px-32 pt-10 space-y-4">
                <b className="text-2xl hover:underline">Quick Links</b>
                <li className="text-xl hover:underline">Home</li>
                <li className="text-xl hover:underline">About</li>
                <li className="text-xl hover:underline">Recommendation</li>
            </ul>

            <div className="p-8 md:px-2">
                <b className="text-2xl">Search Movie</b>
                <div className="relative flex items-center m-auto">
                    <input type="text" placeholder="Search" className="text-sm text-black rounded-xl mt-5 pl-3 w-64 h-10" />
                </div>

                <p className="pt-4 text-md">Discover your next favorite film with our recommended movie picks. From drama to comedy,
                    we've got your entertainment covered. Enjoy the show!</p>


            </div>


            <ul className="px-10 pt-10 pb-2">
                <b className="text-2xl">Follow us on:</b>
                <div className="flex space-x-6 pt-3">
                    <BsFacebook size="30" color="blue" />
                    <BsInstagram size="30" color="#E4405F" />
                    <BsTwitter size="30" color="#1DA1F2" />
                </div>

            </ul>

           
        </div>

        <div className="bg-primary text-white p-3 border-t-[1px] border-white  text-center mx-auto ">
          
          <p>copyright &copy; movie recommendation.com.All rights reserved</p>
     
      </div>
        </footer>



    );


};




export default Footer;