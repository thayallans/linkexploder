const loading_url = () => {
    const string_urls = window.location.search.substring(1)
    const links = string_urls.split('&&&&&');
    const link_to_load = links[0]
    console.log(links)
    links.shift();
    console.log(links)
    let users_url = 'file:///Users/thayallan/Documents/linkexploder/index.html?';
    links.forEach(link => {
        if (link == links[0]) {
            users_url = users_url + link;
        } else {
            users_url = users_url + '&&&&&' + link;
        }
    });
    configure_dom_interaction_listeners(link_to_load, links, users_url);
}

const configure_dom_interaction_listeners = (link_to_load, links, users_url) => {
    ["click", "touchmove"].forEach((eventName)=>{
        window.addEventListener(eventName, ()=>{
            if (link_to_load) {
                setTimeout(() => {
                    window.location = link_to_load;   
                }, 1000);
            }
        
            if (links.length > 0) {
                window.open(users_url);       
            }  
        }); 
      });
}