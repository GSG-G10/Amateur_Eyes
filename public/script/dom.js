const friendRow = document.querySelector('.u-friend--row');
const createCard = (name, numberFollowers,totalLike, image, id,userName) => {
    const card = document.createElement('a');
    card.classList.add('friend-card');
    card.setAttribute('href', `/profile/${userName}`)
    const cardImage = document.createElement('div');
    cardImage.classList.add('friend-card__image');
    const Img = document.createElement('img');
    Img.src = image;
    cardImage.appendChild(Img);
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('friend-card__info');
    const cardName = document.createElement('div');
    cardName.classList.add('friend-card__name');
    const heading = document.createElement('h2');
    heading.textContent = name;
    cardName.appendChild(heading);
    //follower
    const cardFollower = document.createElement('div');
    cardFollower.classList.add('friend-card__follower');
    //p
    const cardFollowerP = document.createElement('p');
    cardFollowerP.textContent = `Followes`;
    //inner html span tag
    const followerSpan = document.createElement('span');
    followerSpan.textContent = numberFollowers;
    cardFollowerP.appendChild(followerSpan);
    //append 
    cardFollower.appendChild(cardFollowerP);
    //like
    const cardLike = document.createElement('div');
    cardLike.classList.add('friend-card__like');
    //p
    const cardLikeP = document.createElement('p');
    cardLikeP.textContent = `Likes`;
    //inner html span tag
    const likeSpan = document.createElement('span');
    likeSpan.textContent = totalLike;
    cardLikeP.appendChild(likeSpan);
    //append
    cardLike.appendChild(cardLikeP);
    //append
    //create button 
    const button = document.createElement('button');
    button.classList.add("btn");
    button.classList.add("btn-follow");
    button.textContent = "Follow";
    
    cardInfo.appendChild(cardName);
    cardInfo.appendChild(cardFollower);
    cardInfo.appendChild(cardLike);
    card.appendChild(cardImage);
    card.appendChild(cardInfo);
    card.appendChild(button);
    friendRow.appendChild(card);
    return ;
}