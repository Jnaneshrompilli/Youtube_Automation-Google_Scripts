// Author: Jnaneswara Rao Rompilli
// Description: This Scripts updates Thumbnail of a YouTube video with view count of that video

function myFunction() {
 
var data = Slides.Presentations.get("1soIG4a4lg-zMqa33PVjPtyOgySwhtiZjVaFiycEpKlU")

var t_url = saveThumbnail("1soIG4a4lg-zMqa33PVjPtyOgySwhtiZjVaFiycEpKlU","gcf60fceb0b_0_0")
updateThumbanil("cUyzrDHzQNI",t_url)
}

function updatetext(presentationId,shapeId){
var requests = [{
  deleteText: {
    objectId: shapeId,
    textRange: {
      type: 'ALL'
    }
  }
}, {
  insertText: {
    objectId: shapeId,
    insertionIndex: 0,
    text: "11"
  }
}];
var batchUpdateResponse = Slides.Presentations.batchUpdate({
  requests: requests
}, presentationId);
}

function saveThumbnail(presentationId,pageId){
  var pic = Slides.Presentations.Pages.getThumbnail(presentationId,pageId)
  Logger.log(pic.contentUrl)
  var blob = UrlFetchApp.fetch(pic.contentUrl).getBlob()
  return blob
}

function updateThumbanil(v_id,t_url){
  YouTube.Thumbnails.set(v_id,t_url)
}