import react from "react";
import GoogleLogin from 'react-google-login';
import axios from "axios";

const handleSuccess=(googleResponse)=>{
  axios.post(`${"http://192.168.43.253:8080"}/api/login`,{google:googleResponse})
  .then((serverResoponse)=>{
    localStorage.setItem("user", JSON.stringify(googleResponse));
  })
  .catch((er)=>{
    console.log(er);
  })
  .finally((serverResoponse)=>{
    // localStorage.setItem("user", JSON.stringify(serverResoponse.data.user));
  });
}

const handleError=(response)=>{
  console.error(response);
}


const Google=()=>{
    return(
        <GoogleLogin
    clientId="1044944754985-re4a45mp68r4l709rcj61lamops1uhoj.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={handleSuccess}
    onFailure={handleError}
    cookiePolicy={'single_host_origin'}
  />
    );
}



export default Google;