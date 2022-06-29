// Author: Jnaneswara Rao Rompilli
// Description: This Scripts updates title of a YouTube video with view count of that video

function main() {
  var videoId = HkiVmhSnaU8;
  var videoData = getVideoDetails(videoId);

  var templ = CacheService.getScriptCache().get(like);
  var tempv = CacheService.getScriptCache().get(view);
  Logger.log(tempv);
  Logger.log(videoData.viewCount);

  if(tempv != videoData.viewCount) {
    updatetext(1 soIG4a4lg - zMqa33PVjPtyOgySwhtiZjVaFiycEpKlU, 7 aa5f36b - fb78 - 43 fb - b13c -b0fb51b45224, videoData.viewCount);
    var t_url = saveThumbnail(1 soIG4a4lg -zMqa33PVjPtyOgySwhtiZjVaFiycEpKlU, gcf60fceb0b_0_0);
    updateDetails(videoData, t_url);
  }
  CacheService.getScriptCache().put(view, videoData.viewCount);
  CacheService.getScriptCache().put(like, videoData.likecount);
}

function getVideoDetails(videoId) {
  var result = YouTube.Videos.list(snippet, statistics, {
  id : videoId }
);
var obj = {
id : videoId, title : result.items[0].snippet.title, categoryId : result.items[0].snippet.categoryId, viewCount : result.items[0].statistics.viewCount, likecount : result.items[0].statistics.likeCount, };

return obj;
}

function updatetext(presentationId, shapeId, viewCount) {
var requests =[{
deleteText : {
objectId : shapeId, textRange : {
type : ALL, }
, }
, }
, {
insertText : {
objectId : shapeId, insertionIndex : 0, text : viewCount, }
, }
,];
var batchUpdateResponse = Slides.Presentations.batchUpdate({
requests : requests, }
, presentationId);
}

function saveThumbnail(presentationId, pageId) {
var pic = Slides.Presentations.Pages.getThumbnail(presentationId, pageId);
var blob = UrlFetchApp.fetch(pic.contentUrl).getBlob();
return blob;
}

function updateDetails(videoData, t_url) {
var resource = {
part : snippet, snippet : {
title : This Video freezes at + videoData.viewCount + Views, Unexplained !, categoryId : videoData.categoryId, }
, id : videoData.id, };
YouTube.Thumbnails.set(videoData.id, t_url);
YouTube.Videos.update(resource, snippet, id);
Logger.log(Title and Thumbnail Updated Sucessfully);
}
