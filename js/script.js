let xhttpUsers = new XMLHttpRequest();

xhttpUsers.onload = () => {
    let data = JSON.parse(xhttpUsers.responseText);
    
    console.log(data.data);
};

xhttpUsers.open("GET", "https://reqres.in/api/users?per_page=12", true);
xhttpUsers.send();