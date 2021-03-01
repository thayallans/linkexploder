const generate_url = () => {
    const textarea = document.getElementById('textarea_links')
    const links = textarea.value.replace(/\r\n/g, "\n").split("\n");
    let users_url = 'file:///Users/thayallan/Documents/linkexploder/index.html?';
    links.forEach(link => {
        if (link == links[0]) {
            users_url = users_url + link;
        } else {
            users_url = users_url + '&&&&&' + link;
        }
    });

    document.getElementById('result').innerHTML = 'Your URL is: ' + users_url;
}
