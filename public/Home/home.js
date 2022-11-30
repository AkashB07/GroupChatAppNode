const url = 'http://localhost';
const token = localStorage.getItem('token');
const messages =document.getElementById("messages_cont_ul");


// console.log(name, email);

const totalMsg = [];
const names = []



const addMsgBtn=document.getElementById('addmsgbtn');
const messageInput=document.getElementById('messageinput');

window.addEventListener('DOMContentLoaded',async()=>{
    try {
        const msg = await localStorage.getItem('totalMsgs');
        const nam = await localStorage.getItem('name');
        let msg1=msg.split(',');
        let nam1=nam.split(',')
        await displayMsg(nam1, msg1);

        // getMessages();
        // setInterval(() => {
        //     getMessages();
        // }, 1000);
        
    } 
    catch (error) {
        console.log(error)
    }  
})

const btn = document.getElementById('addmsgbtn');
btn.addEventListener('click', () => {
    getMessages();
})

async function displayMsg(nam1, msg1){
    try {
        for(i=0; i<msg1.length; i++){
            messages.innerHTML = messages.innerHTML+ ` <li class="even"><strong>${nam1[i]} :</strong> ${msg1[i]} </li>`;
        }
        
    } 
    catch (error) {
        console.log(error)
    }
    
}

addMsgBtn.addEventListener('click', async ()=>{
    try {
        let msg=messageInput.value;
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
        const msg = await localStorage.getItem('totalMsgs');
        let msg1=msg.split(',');
        const msLength = msg1.length;
        const response = await axios.get(`${url}:3000/message/getMessage?lastmsg=${msLength}`,{headers:{"Authorization":token}});
        // console.log(response.data);
        const data = response.data;
        messages.innerHTML = '';
        for(i=0; i<response.data.length; i++){
            messages.innerHTML = messages.innerHTML+ ` <li class="even"><strong>${data[i].username} :</strong> ${data[i]. msg} </li>`;
            const totalMsg2 =[];
            const names2 = [];
            
            totalMsg2.push(JSON.stringify(data[i]. msg));  
            names2.push(JSON.stringify(data[i].username));
            var totalMsg3 =[...totalMsg, ...totalMsg2];
            var names3 = [...names, ...names2]
        }
        
        localStorage.setItem('totalMsgs', totalMsg3);
        localStorage.setItem('name', names3);
       
        
    } catch (error) {
        console.log(error)
    } 
}