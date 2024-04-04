import React from 'react';
import profileImg from '../Porfile/picture.png';
 
function ProfilePicture() {
  return (
    <div>
  <img className="profile-picture" src={profileImg} alt="About Us" width="100" height="100" />
      {/* <img src="" alt="About Us" /> */}
    </div>
   
   
  );
}

export default ProfilePicture;
