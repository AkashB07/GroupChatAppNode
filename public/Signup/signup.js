const url = 'http://localhost'

async function signup(e)
{
    try 
    {
        e.preventDefault();
        const signupDetails = {
            name: e.target.name.value,
            email: e.target.email.value,
            phonenumber: e.target.phonenumber.value,
            password: e.target.password.value
        }
        // console.log(signupDetails.email);

        const respone = await axios.post(`${url}:3000/user/signup`, signupDetails)
        // console.log(respone.succes);
        if(respone.succes)
        {
            alert("Successfuly signed up");
            window.location.href ="../Login/login.html";
        }
        else
        {
            throw new Error(respone.message);
        }
    } 
    catch (error) 
    {
        alert(error);
    }
}