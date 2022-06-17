const issue1 = 'https://api.github.com/repos/UnBArqDsw2022-1/2022_1_grupo5/issues/1';

function getMembers(url) {
    return new Promise((resolve, reject) => {
        var memReq = new XMLHttpRequest();

        memReq.onload = () => {
            if (memReq.readyState == XMLHttpRequest.DONE && memReq.status == 200) {
                resolve(JSON.parse(memReq.responseText).assignees);
            }
        };

        memReq.onerror = () => {
            reject(memReq.statusText)
        };

        memReq.open('GET', url, true);
        memReq.send();
    });
}

async function createMembersCards(issue = issue1) {
    getMembers(issue)
        .then(members => {
            let cardDiv = document.querySelector('.member-content');
            members.forEach(async(member) => {
                let cardImg = buildImgCard(member.avatar_url);
                let [followersTag, followersNum] = await buildFollowTag(member.followers_url);
                let cardTitle = await buildTitle(member.login, member.url);
                /*let usrLink = getUsrLink(member);
                    */

                let card = appendCardChildren([cardImg, followersTag, cardTitle /*, usrLink */ ], member.login);
                var i = 1;
                for(tagElem of followersTag.children) {
                    tagElem.id = `${member.login}-follow${i++}`
                }

                card.id = member.login;
                card.addEventListener('click', (ev) => {
                    window.open(member.html_url);
                });
                card.addEventListener('mouseover', (ev) => {
                    let span = document.querySelector(`#${member.login}-follow1`);
                    let p = document.querySelector(`#${member.login}-follow2`);

                    span.innerText = 'follow-me';
                    p.innerText = '+'
                });
                card.addEventListener('mouseout', (ev) => {
                    let span = document.querySelector(`#${member.login}-follow1`);
                    let p = document.querySelector(`#${member.login}-follow2`);

                    span.innerText = 'followers';
                    p.innerText = followersNum;
                });
                cardDiv.appendChild(card);
            });
        })
        .catch(error => console.log('Error:', error));
}

function buildTitle(login, userUrl) {
    return new Promise(resolve => {
        getUserName(userUrl).then(name => {
            let cardName = document.createElement('div');

            let nameElem = document.createElement('p');
            nameElem.innerText = name;

            let loginElem = document.createElement('span');
            loginElem.innerText = `@${login}`;

            cardName.className = 'card-title';
            cardName.appendChild(nameElem);
            cardName.appendChild(loginElem);

            resolve(cardName);
        });
    });
}

function buildFollowTag(followersUrl) {
    return new Promise(resolve => {
        getNumFollowers(followersUrl).then(num => {
            let followTag = document.createElement('div');
            followTag.className = 'card-tag';

            let p = document.createElement('p');
            p.innerText = `${num}`;

            let followNum = num;

            let span = document.createElement('span');
            span.innerText = 'followers'
            followTag.appendChild(span);
            followTag.appendChild(p);


            resolve([followTag, followNum]);
        });
    });
}

function buildImgCard(avatarUrl) {
    let avatar = document.createElement('img');
    avatar.className = 'card-img';
    avatar.setAttribute('src', avatarUrl);

    return avatar;
}



async function getNumFollowers(followersUrl) {
    console.log('Entered Get');
    return new Promise(resolve => {
        let request = new XMLHttpRequest();
        request.open('GET', followersUrl, true);

        request.onload = () => {
            if (request.status >= 200 && request.status < 300) {
                let followers = Array.from(JSON.parse(request.responseText)).reduce((prev) => ++prev, 0);
                resolve(followers);
            }
        }

        request.send();
    });
}

async function getUserName(userUrl) {
    console.log('Entered Get');
    return new Promise(resolve => {
        let request = new XMLHttpRequest();
        request.open('GET', userUrl, true);

        request.onload = () => {
            if (request.status >= 200 && request.status < 300) {
                let name = JSON.parse(request.responseText).name;
                resolve(name);
            }
        }

        request.send();
    });
}

function appendCardChildren([cardImg, followers, cardTitle /*, usrLink */ ], id) {
    let card = document.createElement('div');
    card.className = 'card';
    card.id = id;

    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    card.append(followers);

    return card;
}

document.addEventListener('DOMContentLoaded', async function() {
    await createMembersCards(issue1);
});