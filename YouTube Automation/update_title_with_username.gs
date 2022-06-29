// Author: Jnaneswara Rao Rompilli
// Description: This Scripts updates title of a YouTube video with the username of most recent comment on the video

function main() {
    var videoId = hPEgMcEmlwc;
    var author = commentThreadsListByVideoId(snippet, videoId);
    Logger.log(author.reply);
    updateDetails(author);

}

function commentThreadsListByVideoId(part, videoId) {
    var response = YouTube.CommentThreads.list(part, {
    videoId : videoId }
);
var obj = {
reply : response.items[0].snippet.topLevelComment.snippet.authorDisplayName, reply1 : response.items[1].snippet.topLevelComment.snippet.authorDisplayName, } 
  //Logger.log(JSON.stringify(response))

return obj;
}

function updateDetails(author) {
var temp = CacheService.getScriptCache().get(namet);
Logger.log(temp);
if(temp != author.reply) {
var resource = {
snippet : {
title : Most recent comment on this video is from + author.reply, categoryId : 22 }
, id : hPEgMcEmlwc, };
YouTube.Videos.update(resource, snippet, id);
Logger.log(Updated Sucessfully) }

CacheService.getScriptCache().put(namet, author.reply);
}