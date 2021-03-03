const generate_url = () => {
    const textarea = document.getElementById('textarea_links')
    let links = textarea.value.replace(/\r\n/g, "\n").split("\n");
    links = remove_empty_links(links);
    let users_url = window.location.origin + window.location.pathname + '?urls=';
    let ending = '';
    for (var index = 0; index < links.length; index++) {
        if (index == 0) {
            if (!links[index].startsWith('http')) {
                ending = ending + 'https://' + links[index];
            } else {
                ending = ending + links[index];
            }
        } else {
            if (!links[index].startsWith('http')) {
                console.log(links[index]);
                ending = ending + '&&&&&' + 'https://' + links[index]
            } else {
                ending = ending + '&&&&&' + links[index];
            }
        }
        console.log(ending);
    }

    ending = stringToInvisify(ending);

    document.getElementById('result-header').style.display = 'block';
    navigator.clipboard.writeText(users_url + ending + '/');
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