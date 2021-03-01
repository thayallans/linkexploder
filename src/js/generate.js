const generate_url = () => {
    const textarea = document.getElementById('textarea_links')
    let links = textarea.value.replace(/\r\n/g, "\n").split("\n");
    links = remove_empty_links(links);
    let users_url = window.location.origin + window.location.pathname;
    for (var index = 0; index < links.length; index++) {
        if (index == 0) {
            users_url = users_url + '?' + links[index];
        } else {
            users_url = users_url + '&&&&&' + links[index];
        }
    }

    document.getElementById('result-header').style.display = 'block';
    document.getElementById('result').innerHTML = users_url;
}

const remove_empty_links = (links) => {
    let real_links = [];
    links.forEach(link => {
        if(link != "") {
            real_links.push(link);
        }
    });
    return real_links;
}