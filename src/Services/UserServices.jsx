import GenericServices from './GenericServices';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtdecode from "jwt-decode";
class UserServices extends GenericServices{
    constructor() {
    super();
  }
    login=(Email,password)=>new Promise((resolve,reject)=>{
        this.post("/login",{Email,password}).then((token)=>{
            localStorage.setItem("token",token);
            resolve(token);
        })
        .catch((err)=>{
            reject(err);
        });
    });
    register=(FirstName,LastName,Age,PhoneNumber,Email,password)=>new Promise((resolve,reject)=>{
        this.post("/register",{FirstName,LastName,Age,PhoneNumber,Email,password}).then((data)=>{
            console.log(data)
        toast.success("Account Created Successfully!", {
        position: toast.POSITION.TOP_CENTER
      });
      useNavigate("/Login");
        })
        .catch((err)=>{
            reject(err);
        });
    });
    logout=()=>{
        localStorage.removeItem("token");
    }
    islogIn=()=>{
        return localStorage.getItem("token")? true : false;
    }
    getLoggedInUser=()=>{
        try{
               const jwt= localStorage.getItem("token");
               console.log(jwtdecode(jwt));
               return jwtdecode(jwt);
        }
        catch(err){
            return null;
        }
    }
    isAdmin=()=>{
            if(this.islogIn())
            {
                console.log(this.getLoggedInUser().role);
            if(this.getLoggedInUser().role =="admin") return true;
                else return false;
        } else return false
    }
};
let UserService= new UserServices();
export default UserService;