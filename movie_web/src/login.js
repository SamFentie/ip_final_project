import {TextInputHolder,LoginButton,SignUpLink} from "./login_componenets";
import "./login.css"
function Login(){
    return(
    <>
    <center>
    <div class="container">
        <image src="image_asset/netflix.png"></image>
      <TextInputHolder type="email" name="email" hint="User Email"></TextInputHolder><br/>
      <TextInputHolder type="password" name="password" hint="User Password"></TextInputHolder><br/>
      <LoginButton ></LoginButton><br/><br/>
      <SignUpLink></SignUpLink>
     </div>
     </center>
    </>
    );
}

export default Login