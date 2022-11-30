const url = 'http://localhost';
const token = localStorage.getItem('token');
const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
// console.log(name, email);


const addMsgBtn=document.getElementById('addmsgbtn');
const messageInput=document.getElementById('messageinput');

window.addEventListener('DOMContentLoaded',async()=>{
    getMessages();
})

addMsgBtn.addEventListener('click', async ()=>{
    try {
        let msg=messageInput.value
        // console.log(messageInput.value)
        messageInput.value="";
        await axios.post(`${url}:3000/message/addMessage`, {msg:msg}, {headers:{"Authorization":token}});
        alert('Message sent successfully');
    } 
    catch (error) {
        alert(error);
    } 
})

async function getMessages(){
    try {
        const response = await axios.get(`${url}:3000/message/getMessage`,{headers:{"Authorization":token}});
        console.log(response.data);
        const data = response.data;
        let messages =document.getElementById("messages_cont_ul")
        for(i=0; i<response.data.length; i++){
            messages.innerHTML = messages.innerHTML+ ` <li class="even"><strong>${data[i].username} :</strong> ${data[i]. msg} </li>`;
        }
        
    } catch (error) {
        console.log(error)
    }
    
    
}