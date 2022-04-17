function imgError(image) {
    image.onerror = "";
    image.src = "../src/imagenotfound.gif";
    return true;
}
function validat_thumbnail(thumbnail) {
    var thumbnail_path = thumbnail;
    if (thumbnail.slice(0, 4).toLowerCase() !== "http") {
        thumbnail_path = `../src/img/` + thumbnail;
    }
    return thumbnail_path;
}
