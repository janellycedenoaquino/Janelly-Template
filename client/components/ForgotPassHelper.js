import Swal from "sweetalert2";
import axios from "axios";

export async function putReq(email, password) {
  let val = await axios.put("api/emailRecovery/reset_password", {
    email,
    password,
  });
  if (val.status === 200) {
    successful();
  }
  return val;
}
export function changePassword(email, OTP) {
  Swal.fire({
    title: "\nChange Password",
    html:
      '<form> <div style="flex:4;padding:40">' +
      '<input id=1 placeholder="  New Password" style="height:40;width:250;margin:12;font-size:15" type="password" />' +
      "<br/>" +
      '<input id=2 placeholder="  Confirm Password" style="height:40;width:250;margin:12;font-size:15" type="password" />' +
      "<h6>password must have atlease one uppercase letter and be atleast 5 letters long</h6>" +
      "</div></form>",
    confirmButtonText: "CONFIRM",
    confirmButtonColor: "#1876d2",
    preConfirm: () => {
      const password = document.getElementById("1").value;
      const passwordConfirmation = document.getElementById("2").value;

      if (password === passwordConfirmation) {
        if (password.length > 5 && /[A-Z]/.test(password) > 0) {
          const val = putReq(email, password);
          return val;
        } else {
          changePassword(email, OTP);
        }
      }
      changePassword(email, OTP);
    },
  });
}

export async function verifyOTP(email, OTP) {
  Swal.fire({
    title: "Email Verification",
    html:
      "We have sent a code to your email address " +
      email +
      "<br/>" +
      "<br/>" +
      '<form> <div style="flex:4;padding:40">' +
      '<input id=1 maxLength="1" style="height:50;width:50;position:center;margin:12;text-align:center;font-size:35" type="text"/>' +
      '<input id=2 maxLength="1" style="height:50;width:50;position:center;margin:12;text-align:center;font-size:35" type="text"/>' +
      '<input id=3 maxLength="1" style="height:50;width:50;position:center;margin:12;text-align:center;font-size:35" type="text"/>' +
      '<input id=4 maxLength="1" style="height:50;width:50;position:center;margin:12;text-align:center;font-size:35" type="text"/>' +
      "</div></form>",
    footer: "<a href='/forgotPassword'>Didn't receive code? Resend OTP</a>",
    showCancelButton: true,
    cancelButtonColor: "#d33",
    confirmButtonText: "confirm",
    confirmButtonColor: "#1876d2",
    showLoaderOnConfirm: true,
    timer: 240000,
    timerProgressBar: true,
    didOpen: () => setInterval(() => {}, 100),
    preConfirm: () => {
      console.log("inside preConfirm");
      const val1 = document.getElementById("1").value;
      const val2 = document.getElementById("2").value;
      const val3 = document.getElementById("3").value;
      const val4 = document.getElementById("4").value;

      const OTPFromUser = Number(val1 + val2 + val3 + val4);

      if (OTPFromUser === OTP) {
        console.log("\n\n\n\n\n\nNumbers match");
        setTimeout(changePassword(email, OTP), 30000);
        return true;
      } else {
        errorMessage("OTP");
      }
    },
    allowOutsideClick: false,
  });
}
export function successful() {
  Swal.fire({
    icon: "success",
    text: "Your password has been reset successfully.",
    showConfirmButton: false,
    footer: '<a href="/signIn">Click to Log in</a>',
  });
}

export function errorMessage(error) {
  Swal.fire({
    icon: "error",
    confirmButtonColor: "#1876d2",
    title: "Oops...",
    text: `${error}`,
  });
}
