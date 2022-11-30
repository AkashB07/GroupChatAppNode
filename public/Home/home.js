const url = 'http://localhost';
const token = localStorage.getItem('token');
const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
// console.log(name, email);

const addMsgBtn=document.getElementById('addmsgbtn');
const messageInput=document.getElementById('messageinput')

addMsgBtn.addEventListener('click', async ()=>{
    try {
        let msg=messageInput.value
        // console.log(messageInput.value)
        messageInput.value="";
        const response = await axios.post(`${url}:3000/message/addMessage`, {msg:msg}, {headers:{"Authorization":token}});
        alert('Message sent successfully');
    } 
    catch (error) {
        alert(error);
    } 
})