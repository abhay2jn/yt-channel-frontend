import { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    "https://via.placeholder.com/1500x400"
  );
  const [profileUrl, setProfileUrl] = useState(
    "https://via.placeholder.com/100"
  );

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div className=" relative w-[94%] ml-[5rem]">
      <div className="ralative">
        <img
          src={bannerUrl}
          alt="cover art"
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className=" cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileUrl}
          alt="logo"
          className="w-40 h-40 object-cover rounded-full border-white relative"
        />
        <button className="absolute ml-[3.6rem] mt-[10rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className=" cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        <div className="ml-4 mt-4">
          <h1 className=" text-2xl font-bold ml-[4rem]">Seedhe Maut</h1>
          <p className="ml-[4rem]">222M views</p>
          <p className="mt-2 ml-[4rem]">
            ENCORE ABJ and CALM are two Delhi, India based emcees. Check the
            music. TBMSM4L⚔️
          </p>
          <button className="ml-[4rem] mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
