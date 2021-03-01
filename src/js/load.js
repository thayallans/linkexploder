const loading_url = () => {
    const string_urls = window.location.search.substring(1)
    let links = string_urls.split('&&&&&');
    const link_to_load = links[0]
    if (link_to_load) {
        document.getElementById('generate_url').style.display = 'none';
        document.getElementById('loading_url').style.display = 'block';
    }
    console.log(link_to_load);
    links = remove_empty_links(links);
    links.shift();
    let users_url = window.location.origin + window.location.pathname;
    for (var index = 0; index < links.length; index++) {
        if (index == 0) {
            users_url = users_url + '?' + links[index];
        } else {
            users_url = users_url + '&&&&&' + links[index];
        }
    }
    configure_dom_interaction_listeners(link_to_load, links, users_url);
}

const configure_dom_interaction_listeners = (link_to_load, links, users_url) => {
    ["click", "touchmove"].forEach((eventName) => {
        window.addEventListener(eventName, () => {
            if (links.length > 0) {
                window.open(users_url)
                if (link_to_load) {
                    window.location = link_to_load;   
                }
            } else {
                if (link_to_load) {
                    window.location = link_to_load;   
                }
            }
        }); 
      });
}