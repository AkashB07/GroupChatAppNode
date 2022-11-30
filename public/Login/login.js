const url = 'http://localhost'

async function login(e)
{
    try 
    {
        e.preventDefault();
        const loginDetails = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        const respone = await axios.post(`${url}:3000/user/login`, loginDetails);
        // console.log(respone.name);
        localStorage.setItem('token', respone.token);
        // localStorage.setItem('name', respone.name);
        // localStorage.setItem('email', respone.email);
        alert(respone.message);
        window.location.href ='../Home/home.html';
    }
    catch (err) 
    {
        alert(err.message);
    }
}