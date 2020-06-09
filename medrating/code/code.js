  

function getStarred() {
    //localStorage.removeItem('starredPics');
    if (localStorage['starredPics']) {
        return JSON.parse(localStorage.getItem('starredPics'));
    } else {
        localStorage.setItem('starredPics', JSON.stringify([]));
        return JSON.parse(localStorage.getItem('starredPics'));
    }
};


/*  ***  START building USERS list  ***  */
let getCatalog = function () {
    let requestUsers = 'https://json.medrating.org/users/';
    let requestAlbums = 'https://json.medrating.org/albums?userId=';
    let myList = document.querySelector('.usersTree');
    //empty the list before rebuild it
    $(myList).empty();

/*  ***  START ADDING USERS  ***  */

    fetch(requestUsers)
        .then(function (response) { return response.json(); })
        .then(function (users) {
            for (let current in users) {
                if (users[current]['name'] != undefined) {
                    let person = document.createElement('li');
                    person.setAttribute("class", "usersTree__person");
                    let userId = 'user' + users[current]['id'];                    
                    person.innerHTML = '<span>►</span>' +
                        users[current]['name'] +
                        '<ul class="hideList" id=' + userId + '></ul>';
                    myList.appendChild(person);

/*  ***  END ADDING USERS  ***  */
/*  ***  START ADDING TITLES OF ALBUMS TO EACH USER  ***  */   

                    let req = 'https://json.medrating.org/albums?userId=' + users[current]['id'];
                    let albumsUlId = '#' + userId;
                    let albumList = document.querySelector(albumsUlId);              
                    fetch(req)
                        .then(function (response) { return response.json(); })
                        .then(function (albumData) {                         
                            for (let i in albumData) {
                                let albumId = albumData[i]['id'];
                                let title = document.createElement('li');
                                title.setAttribute("class", "albumTitle");
                                title.setAttribute("id", albumId);
                                title.innerHTML = '<span>►</span>' +
                                    albumData[i]['title'];
                                albumList.appendChild(title);
                            };
                        });
                    
/*  ***  END ADDING TITLES OF ALBUMS TO EACH USER  ***  */
                }
            };
        });
}; 
/*  ***  END building USERS list  ***  */




/*  ***  START FUNCTION FOR SHOW/HIDE ALBUMS ***  */
    $(document).on("click", ".usersTree__person", function (event) {
        let curDiv = $(this).find("span");
        curDiv[0].innerText = (curDiv[0].innerText == `►` ? "▼" : "►");
        let curUl = $(this).find("ul").eq(0);
        let setClass = (curUl.attr('class') == 'showList' ? 'hideList' : 'showList');
        curUl.attr('class', setClass);
        event.stopPropagation();
    });
/*  ***  END FUNCTION FOR SHOW/HIDE ALBUMS ***  */

/*  ***  START ADDING PHOTOS OF ALBUMS TO EACH USER  ***  */
    $(document).on("click", ".albumTitle", function (event) {
        let curDiv = $(this).find("span");
        curDiv[0].innerText = (curDiv[0].innerText == `►` ? "▼" :"►");
        let curUl = $(this).find("ul"); 
        if (curUl.length > 0) {
            //console.log('show/hide existed list');
            let setClass = (curUl.attr('class') == 'showList' ? 'hideList' : 'showList');      
            curUl.attr('class', setClass);
        } else {    
            //console.log('making new list...');     
            let currentAlbum = this;
            let albumId = this.id;
            let requestAlbum = 'https://json.medrating.org/photos?albumId=' + albumId;
            fetch(requestAlbum)
                .then(function (response) { return response.json(); })
                .then(function (photosData) {
                    let ulPhotos = document.createElement('ul');                  
                    for (let i in photosData) {                          
                        let star = document.createElement('span');
                        star.setAttribute("class", "sideStar star");
                        star.setAttribute("fullsize", photosData[i]["url"]);
                        star.setAttribute("thumbnail", photosData[i]["thumbnailUrl"]);
                        star.setAttribute("title", photosData[i]["title"]);
                        star.innerHTML = "★";
                        let favourite = getStarred();
                        for (let k in favourite){
                            if(favourite[k][0] == photosData[i]["url"]){
                                star.setAttribute("class", "sideStar starSelected");
                                star.innerHTML = "★";
                            }                                                       
                        }

                        let photo = document.createElement('li');
                        photo.setAttribute("class", "thumbnail");
                        photo.setAttribute("fullsize", photosData[i]["url"]);
                        photo.setAttribute("thumbnail", photosData[i]["thumbnailUrl"]);
                        photo.setAttribute("title", photosData[i]["title"]);
                        photo.innerHTML = '<img src=' + photosData[i]["thumbnailUrl"] + '></img>';
                        
                        photo.prepend(star);
                        ulPhotos.appendChild(photo);
                    };
                    ulPhotos.className = (ulPhotos.className == 'showList' ? 'hideList' : 'showList');
                    currentAlbum.appendChild(ulPhotos);
                });
        }
        event.stopPropagation();    
    });

/*  ***  END ADDING PHOTOS OF ALBUMS TO EACH USER  ***  */


/*  ***  START SHOW NAME OF THE PHOTO  ***  *//*
    $(document).on("mousemove", '.thumbnail', function (eventObject) {
        console.log('mouse in!');
        
        let title = this.getAttribute("title");
        $thumbnail = $(this).attr("title");
        $("#tooltip").html($thumbnail)
            .css({
                "top": eventObject.pageY + 5,
                "left": eventObject.pageX + 5
            })
            .show();
    }).mouseout(function () {
        $("#tooltip").hide()
            .html("")
            .css({
                "top": 0,
                "left": 0
            });

    });
/*  ***  END SHOW NAME OF THE PHOTO  ***  */


/*  ***  START SHOW FULLSIZEPHOTO  ***  */
    $(document).on("click", '.thumbnail', function (event) {
        let src = this.getAttribute("fullsize");
        let modal = $('#fullsize');

        let close = document.getElementById("closeModal");
        let fullPhoto = $(modal).find("img");
        fullPhoto.attr("src", src);

        modal.toggleClass("showModal");
        close.onclick = function (event) {
            modal.toggleClass("showModal");
            event.stopPropagation();
        }
        window.onclick = function (event) {
            modal.toggleClass("showModal");
        }
        event.stopPropagation();
    });
/*  ***  END SHOW FULLSIZEPHOTO  ***  */

/*  ***  START SAVE PHOTO TO STARRED  ***  */    

    $(document).on("click", '.sideStar', function (event) {
        let src = $(this).attr("fullsize");
        let thumbnail = $(this).attr("thumbnail");
        let title = $(this).attr("title");
        let toSave = [src, thumbnail, title];
        this.innerHTML = '★';
        let savedPhotos = getStarred();       
        for(let k in savedPhotos){//find out if this photo already saved
            if (JSON.stringify(savedPhotos[k]) == JSON.stringify(toSave)){
                console.log('already exist! Deleted');
                savedPhotos.splice(k, 1);
                localStorage.setItem('starredPics', JSON.stringify(savedPhotos));
                $(this).toggleClass("starSelected");
                event.stopPropagation();
                return 0;//work done, stop function                           
            }
        }
        savedPhotos.push(toSave);     
        localStorage.setItem('starredPics', JSON.stringify(savedPhotos));
        $(this).toggleClass("starSelected");  
        event.stopPropagation();
    });
/*  ***  END SAVE PHOTO TO STARRED  ***  */ 



/*  ***  START DELETE PHOTO FROM STARRED  ***  */
$(document).on("click", '.favStar', function (event) {
    let fullPath = $(this).attr("fullsize");
    let favPics = getStarred();    
    for (let [index, value] of favPics.entries()) {
        if (value[0] == fullPath) {
            favPics.splice(index, 1);
            localStorage.setItem('starredPics', JSON.stringify(favPics));
        }
    }
    $(this).parent().remove();
    event.stopPropagation();
});
/*  ***  END DELETE PHOTO FROM STARRED  ***  */

/*  ***  START BUILDING STARRED LIST VIEW ***  */
let getFav = function () {
    let favline = $('.favline');
    $(favline).empty();   
    let favPics = getStarred();
    for (let m of favPics) {
        let photo = $(`<li><img src=${m[1]}></img></li>`);
        photo.attr("class", 'thumbnail');
        photo.attr("title", m[2]);  
        photo.attr("fullsize", m[0]);
        let title = `<h4>${m[2]}</h4> `;           
        let star = $('<span>').text("★"); 
        star.attr("fullsize", m[0]);      
        star.attr("class", "favStar starSelected");       
        photo.prepend(star);
        photo.prepend(title);
        favline.append(photo);
    }
};
/*  ***  END BUILDING STARRED LIST VIEW ***  */

/*  ***  START PROGRAMMING BUTTONS ***  */
$('#catalog').click(function (event) {
    getCatalog();    
    $('.favline').hide();
    $('.catalogline').show();
    event.stopPropagation();
});
$('#fav').click(function (event) {
    getFav();
    $('.catalogline').hide();
    $('.favline').show();
    event.stopPropagation();
});  
/*  ***  END PROGRAMMING BUTTONS ***  */




