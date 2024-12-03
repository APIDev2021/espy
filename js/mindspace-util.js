const getMindspaceData = async() => {
    const res = await fetch('/json/mindspace.json');
    const data = await res.json();
    return data;
}

const getArtData = async() => {
    const res = await fetch('/json/art.json');
    const data = await res.json();
    return data;
}

function getImagesByCharacter(id, artData) {
    const art = artData["art"]

    const characterArt = art.filter((entry) => {
        if (entry.characters?.includes(id)) {
            return true;
        } else {
            return false;
        }
    });

    return characterArt;
}