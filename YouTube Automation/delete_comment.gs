// Author: Jnaneswara Rao Rompilli
// Description: This Scripts deletes comments on YouTube video

function main() {
    var videoId = j1w8duYS32c;
    var commentdetails = commentThreads(videoId);
    commentDelete(commentdetails.parentid, commentdetails.commenttext) }

function commentThreads(videoID) {
    var resource = YouTube.CommentThreads.list(snippet, {
    videoId : videoID }
);
  //Logger.log(JSON.stringify(resource)) ;

var obj = {
parentid : resource.items[0].id, commenttext : resource.items[0].snippet.topLevelComment.snippet.textDisplay }
Logger.log(obj.parentid);

return obj;
}

function commentDelete(parentid, text) {

YouTube.Comments.setModerationStatus(parentid, rejected);

}
